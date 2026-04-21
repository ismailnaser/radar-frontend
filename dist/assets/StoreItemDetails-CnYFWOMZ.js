import{h as O,u as X,a as Y,r as i,a7 as Z,t as tt,j as r,L as U,S as et,y as rt,A as B,w as at,x as nt,z as st}from"./index-BRoAb6GP.js";import{M as it,H as ot}from"./MainLayout-PAPPIjtx.js";import{I as lt}from"./ImageCarousel-CUa8pEVx.js";import{c as dt}from"./cartAccess-DdSevxjw.js";import{v as ct}from"./productImages-BYfYSUZM.js";import{A as ut}from"./arrow-left-BbB0wHrx.js";import{I as pt}from"./image-B4MalXhi.js";import{C as mt,a as gt}from"./chevron-up-CTEVtSZZ.js";import"./chevron-left-CICpcYFM.js";function St(){const{storeId:c,itemType:m,itemId:I}=O(),w=X(),{showAlert:u,showPrompt:C,showSelect:Q}=Y(),[g,F]=i.useState(!0),[l,G]=i.useState(null),[x,q]=i.useState(""),[j,f]=i.useState(!1),[N,p]=i.useState(null),[_,b]=i.useState(1),R=localStorage.getItem("isGuest")==="true",h=!!localStorage.getItem("token")&&!R,S=dt();i.useEffect(()=>{let a=!1;return(async()=>{var n,e;try{F(!0);const s=await Z(c);a||(G(s),q(""))}catch(s){a||q(((e=(n=s==null?void 0:s.response)==null?void 0:n.data)==null?void 0:e.detail)||"تعذر تحميل تفاصيل المنتج.")}finally{a||F(!1)}})(),()=>{a=!0}},[c]);const t=i.useMemo(()=>{if(!l)return null;const a=Number(I);return Number.isFinite(a)?m==="product"?(l.products||[]).find(n=>Number(n.id)===a)||null:m==="sponsored"&&(l.sponsored_ads||[]).find(n=>Number(n.id)===a)||null:null},[l,m,I]),M=ct(t),o=m==="sponsored",z=(t==null?void 0:t.name)||(t==null?void 0:t.title)||"تفاصيل المنتج",T=(t==null?void 0:t.description)||"",y=o?t==null?void 0:t.product_price:t==null?void 0:t.price,v=o?t==null?void 0:t.catalog_product_price:null,$=Array.isArray(t==null?void 0:t.product_features)?t.product_features.map(a=>String(a||"").trim()).filter(Boolean).slice(0,8):[],L=N!=null,k=Number.isFinite(Number(_))?Math.max(1,Math.min(99,Number(_))):1;i.useEffect(()=>{if(!h||!t){p(null);return}let a=!1;return(async()=>{try{const n=await tt();if(a||!Array.isArray(n))return;const e=n.find(s=>o?Number(s.sponsored_ad)===Number(t.id):Number(s.product)===Number(t.id));p((e==null?void 0:e.id)??null)}catch{a||p(null)}})(),()=>{a=!0}},[h,t,o]);const V=()=>({productId:o?(t==null?void 0:t.product)??null:t==null?void 0:t.id,sponsoredAdId:o?t==null?void 0:t.id:null,quantity:k,note:""}),D=async(a,{isFirstCart:n=!1}={})=>{const e=await C(n?"لا توجد لديك سلال بعد. اكتب اسماً لسلتك الأولى — يُضاف المنتج إليها مباشرة.":"اكتب اسماً للسلة الجديدة ثم يُضاف المنتج إليها.",n?"مثال: سلة اليوم":"اسم السلة...",n?"إنشاء أول سلة":"سلة جديدة");if(!e||!String(e).trim())return!1;const s=await st(String(e).trim());return await B(s.id,a.productId??null,a.quantity??1,a.sponsoredAdId??null,a.note??""),!0},E=a=>{b(n=>{const e=Number(n),s=Number.isFinite(e)?e:1;return Math.max(1,Math.min(99,s+a))})},J=async()=>{var a,n;if(!h){w("/login",{state:{flash:"يجب تسجيل الدخول أولاً."}});return}if(S&&t){f(!0);try{const e=V(),s=await C("أضف ملاحظة على هذا المنتج داخل السلة (اختياري). اترك الحقل فارغاً إذا لا تريد.","مثال: بدون بصل / توصيل بعد العصر","ملاحظة على المنتج","");e.note=s==null?"":String(s).trim();const H=await rt(),W=Array.isArray(H)?H:[];if(W.length===0){if(!await D(e,{isFirstCart:!0}))return}else{const P=W.map(d=>({id:String(d.id),label:d.name||`سلة #${d.id}`,value:d.id,badge:Array.isArray(d.items)?d.items.length:0})),A=await Q("اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",P,{primaryActionLabel:"سلة جديدة"});if(A==null)return;if(A==="__primary__"){if(!await D(e))return}else await B(Number(A),e.productId??null,e.quantity??1,e.sponsoredAdId??null,e.note??"")}await u("تمت إضافة العنصر إلى السلة.","تم")}catch(e){await u(((n=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:n.error)||"تعذر الإضافة إلى السلة.","خطأ")}finally{f(!1)}}},K=async()=>{var a,n;if(!h){w("/login",{state:{flash:"يجب تسجيل الدخول أولاً."}});return}if(t){f(!0);try{if(N)await at(N),p(null),await u("تمت إزالة العنصر من المفضلة.","تم");else{const e=await nt(o?t.product??null:t.id,o?t.id:null);p((e==null?void 0:e.id)??!0),await u("تمت إضافة العنصر إلى المفضلة.","تم")}}catch(e){await u(((n=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:n.error)||"تعذر تعديل المفضلة.","خطأ")}finally{f(!1)}}};return r.jsxs(it,{children:[r.jsxs("div",{style:{maxWidth:920,margin:"0 auto",padding:"12px clamp(10px, 2vw, 20px) 34px"},children:[r.jsxs("button",{type:"button",className:"item-details-back-btn",onClick:()=>w(`/stores/${c}`),children:[r.jsx(ut,{size:18}),"العودة إلى المتجر"]}),g?r.jsx("div",{className:"card",children:"جاري التحميل…"}):null,!g&&x?r.jsx("div",{className:"card",style:{color:"#c62828"},children:x}):null,!g&&!x&&!t?r.jsxs("div",{className:"card",children:["هذا العنصر غير موجود حالياً.",r.jsx("div",{style:{marginTop:10},children:r.jsx(U,{to:`/stores/${c}`,children:"الرجوع للمتجر"})})]}):null,!g&&!x&&t?r.jsxs("article",{className:"card",style:{overflow:"hidden",padding:0},children:[r.jsx("div",{style:{background:"var(--grey-light)",minHeight:260},children:M.length>0?r.jsx(lt,{images:M,alt:z,height:360,borderRadius:0}):r.jsx("div",{className:"flex-center",style:{minHeight:260},children:r.jsx(pt,{size:46,color:"var(--text-light)"})})}),r.jsxs("div",{style:{padding:"14px clamp(12px, 2vw, 20px) 18px"},children:[r.jsx("h1",{style:{margin:0,color:"var(--secondary)",fontSize:"clamp(1.18rem, 2.2vw, 1.7rem)"},children:z}),r.jsxs("div",{style:{marginTop:8,color:"var(--text-secondary)",fontWeight:700},children:["من متجر: ",r.jsx(U,{to:`/stores/${c}`,children:(l==null?void 0:l.store_name)||"المتجر"})]}),y!=null&&Number.isFinite(Number(y))?r.jsxs("div",{style:{marginTop:12,display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[v!=null&&Number.isFinite(Number(v))&&Number(v)>Number(y)?r.jsxs("span",{style:{textDecoration:"line-through",color:"var(--text-light)"},children:[Number(v).toFixed(2)," ₪"]}):null,r.jsxs("span",{style:{fontSize:"1.28rem",fontWeight:900,color:"var(--secondary)"},children:[Number(y).toFixed(2)," ₪"]})]}):null,r.jsxs("div",{className:"item-details-actions",children:[r.jsxs("div",{className:"item-details-qty",children:[r.jsx("button",{type:"button",className:"item-details-qty-btn",onClick:()=>E(-1),"aria-label":"نقص الكمية",children:r.jsx(mt,{size:18})}),r.jsx("input",{className:"item-details-qty-input",type:"text",inputMode:"numeric",value:k,onChange:a=>{const n=String(a.target.value||"").replace(/\D+/g,"");if(!n)return b(1);const e=Number(n);b(Number.isFinite(e)?Math.max(1,Math.min(99,e)):1)},onBlur:()=>b(k)}),r.jsx("button",{type:"button",className:"item-details-qty-btn",onClick:()=>E(1),"aria-label":"زيادة الكمية",children:r.jsx(gt,{size:18})})]}),r.jsxs("button",{type:"button",className:`item-details-action-btn${S?"":" item-details-action-btn--muted"}`,onClick:J,disabled:j||!S,children:[r.jsx(et,{size:18}),j?"جارٍ التنفيذ…":"إضافة إلى السلة"]}),r.jsxs("button",{type:"button",className:"item-details-action-btn item-details-action-btn--fav",onClick:K,disabled:j,children:[r.jsx(ot,{size:18,color:"#e91e63",fill:L?"#e91e63":"none"}),L?"إزالة من المفضلة":"إضافة إلى المفضلة"]})]}),T?r.jsx("p",{style:{marginTop:12,lineHeight:1.8,color:"var(--text-primary)"},children:T}):null,$.length>0?r.jsx("div",{style:{marginTop:10,display:"flex",flexWrap:"wrap",gap:8},children:$.map((a,n)=>r.jsx("span",{className:"badge",style:{background:"var(--white)"},children:a},`${a}-${n}`))}):null]})]}):null]}),r.jsx("style",{children:`
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
      `})]})}export{St as default};
