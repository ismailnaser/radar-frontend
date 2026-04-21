import{h as M,a as E,r as l,_ as L,j as a,L as k,a0 as T,a1 as I,a2 as W}from"./index-BpETrDVb.js";import{M as B}from"./MainLayout-D1gNvmgX.js";import{I as P}from"./ImageCarousel-BW75vxf7.js";import{c as q}from"./productImages-BYfYSUZM.js";import{f as x}from"./apiErrors-Bccm4O3Y.js";import{I as R}from"./image-BA5580ze.js";import{C as U,a as D}from"./chevron-up-pB1JqUnE.js";import{T as Q}from"./trash-2-CQDofV1L.js";import"./chevron-left-CISDpb1T.js";const tt=()=>{const{cartId:g}=M(),{showAlert:o,showConfirm:C}=E(),[i,h]=l.useState(null),[z,f]=l.useState(!0),[u,d]=l.useState(null),[F,_]=l.useState(null),s=l.useCallback(async({silent:t=!1}={})=>{if(g){t||f(!0);try{const e=await L(g);h(e)}catch(e){h(null),o(x(e,"تعذر تحميل السلة."),"خطأ")}finally{t||f(!1)}}},[g,o]);l.useEffect(()=>{s()},[s]);const c=t=>{var e;if(t.effective_unit_price!=null&&t.effective_unit_price!==""){const r=Number(t.effective_unit_price);if(Number.isFinite(r))return r}return Number(((e=t.product_details)==null?void 0:e.price)??0)},p=t=>{const e=t.catalog_unit_price;if(e==null||e==="")return null;const r=Number(e);return Number.isFinite(r)?r:null},b=t=>c(t)*Number(t.quantity??0),S=l.useMemo(()=>((i==null?void 0:i.items)||[]).reduce((e,r)=>e+b(r),0),[i]),$=async t=>{if(!i)return;const e=t??"";if((i.notes??"")!==e){_(i.id);try{await T(i.id,{notes:e}),await s({silent:!0})}catch(r){o(x(r,"تعذر حفظ الملاحظة.")),await s({silent:!0})}finally{_(null)}}},y=async t=>{var n;const e=t.line_title||((n=t.product_details)==null?void 0:n.name)||"هذا السطر";if(await C(`هل تريد إزالة «${e}» من السلة؟`,"تأكيد الحذف")){d(t.id);try{await W(t.id),await s({silent:!0})}catch(m){o(x(m,"تعذر حذف المنتج."))}finally{d(null)}}},w=async(t,e)=>{const r=Number(t.quantity??0)+e;if(r<1){await y(t);return}d(t.id);try{await I(t.id,{quantity:r}),await s({silent:!0})}catch(n){o(x(n,"تعذر تحديث الكمية.")),await s({silent:!0})}finally{d(null)}},A=async(t,e)=>{const r=parseInt(String(e),10);if(Number.isNaN(r)||r<1){o("الكمية يجب أن تكون رقماً صحيحاً ≥ ١"),await s({silent:!0});return}d(t.id);try{await I(t.id,{quantity:r}),await s({silent:!0})}catch(n){o(x(n,"تعذر تحديث الكمية.")),await s({silent:!0})}finally{d(null)}};return a.jsx(B,{children:a.jsxs("div",{className:"cart-details-page",children:[a.jsx("div",{style:{marginBottom:12},children:a.jsx(k,{to:"/carts",className:"cart-details-back",children:"← رجوع للسلال"})}),z?a.jsx("div",{className:"card cart-details-loading",children:"جاري تحميل السلة…"}):i?a.jsxs("div",{className:"card cart-details-card",children:[a.jsxs("div",{className:"cart-details-head",children:[a.jsx("h1",{className:"cart-details-title",children:i.name}),a.jsxs("div",{className:"cart-details-total",children:["الإجمالي: ",a.jsxs("span",{className:"cart-details-total-num",children:[S.toFixed(2)," ₪"]})]})]}),a.jsxs("div",{className:"cart-notes-section",children:[a.jsx("label",{className:"cart-note-label",htmlFor:`cart-notes-${i.id}`,children:"ملاحظة على السلة"}),a.jsx("textarea",{id:`cart-notes-${i.id}`,className:"cart-note-input",rows:2,placeholder:"مثال: موعد التوصيل، طلبات عامة على الطلب…",defaultValue:i.notes||"",disabled:F===i.id,onBlur:t=>$(t.target.value)},`${i.id}-cart-notes-${i.notes??""}`)]}),a.jsx("div",{className:"cart-items",children:Array.isArray(i.items)&&i.items.length>0?i.items.map(t=>a.jsx("div",{className:"cart-line-block",children:a.jsxs("div",{className:"item-row cart-item-row",style:{padding:"10px 0 6px",borderRadius:t.is_promotional_line?12:0,marginInline:t.is_promotional_line?-4:0,paddingInline:t.is_promotional_line?10:0,marginTop:t.is_promotional_line?6:0,background:t.is_promotional_line?"linear-gradient(135deg, rgba(245,192,0,0.12) 0%, rgba(255,249,230,0.35) 100%)":void 0,border:t.is_promotional_line?"1px solid rgba(245,192,0,0.4)":void 0},children:[a.jsx("div",{className:"cart-item-thumb",children:q(t).length>0?a.jsx(P,{images:q(t),height:96,borderRadius:16}):a.jsx("span",{className:"cart-item-thumb-placeholder flex-center",children:a.jsx(R,{size:20,color:"var(--text-light)"})})}),a.jsxs("div",{className:"cart-item-main",children:[(()=>{var m,v,j,N;const e=((m=t==null?void 0:t.product_details)==null?void 0:m.store)??((v=t==null?void 0:t.product_details)==null?void 0:v.store_id)??(t==null?void 0:t.store)??null,r=(t==null?void 0:t.product)??((j=t==null?void 0:t.product_details)==null?void 0:j.id)??null,n=t.line_title||((N=t.product_details)==null?void 0:N.name);return t.is_expired_line?a.jsx("div",{className:"cart-item-title cart-item-title--static",children:n}):e&&r?a.jsx(k,{to:`/stores/${e}`,state:{scrollToProductId:r},className:"cart-item-title",title:"فتح المنتج داخل المتجر",children:n}):a.jsx("div",{className:"cart-item-title cart-item-title--static",children:n})})(),a.jsxs("div",{className:"cart-item-meta",children:[t.is_expired_line?a.jsx("div",{className:"cart-item-expired",children:t.expired_message||"انتهت صلاحية الإعلان."}):null,t.is_promotional_line?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"cart-item-badges",children:[a.jsx("span",{className:"cart-item-badge",children:t.is_standalone_ad_line?`عرض ممول مستقل: ${c(t).toFixed(2)} ₪ للقطعة`:`عرض ممول: ${c(t).toFixed(2)} ₪ للقطعة`}),!t.is_standalone_ad_line&&p(t)!=null&&Math.abs(c(t)-p(t))>1e-9?a.jsxs("span",{className:"cart-item-strike",children:["سعر المتجر ",p(t).toFixed(2)," ₪"]}):null]}),a.jsx("div",{className:"cart-item-pricing",children:a.jsxs("span",{className:"cart-item-total",children:["المجموع ",b(t).toFixed(2)," ₪"]})})]}):a.jsxs("div",{className:"cart-item-pricing",children:[a.jsxs("span",{className:"cart-item-unit",children:[(p(t)!=null?p(t):c(t)).toFixed(2)," ₪ للقطعة"]}),a.jsx("span",{className:"cart-item-dot","aria-hidden":!0,children:"·"}),a.jsxs("span",{className:"cart-item-total",children:["المجموع ",b(t).toFixed(2)," ₪"]})]})]})]}),a.jsxs("div",{className:"flex-center cart-item-actions",children:[a.jsxs("div",{className:"cart-qty-stepper",dir:"ltr",children:[a.jsx("button",{type:"button",className:"cart-qty-stepper__btn cart-qty-stepper__btn--minus",disabled:u===t.id||t.is_expired_line,onClick:()=>w(t,-1),"aria-label":"تقليل الكمية",children:a.jsx(U,{size:18,strokeWidth:2.5,"aria-hidden":!0})}),a.jsx("input",{type:"text",inputMode:"numeric",className:"cart-qty-stepper__input",disabled:u===t.id||t.is_expired_line,value:String(t.quantity??""),onBlur:e=>A(t,e.target.value),"aria-label":"الكمية"}),a.jsx("button",{type:"button",className:"cart-qty-stepper__btn cart-qty-stepper__btn--plus",disabled:u===t.id||t.is_expired_line,onClick:()=>w(t,1),"aria-label":"زيادة الكمية",children:a.jsx(D,{size:18,strokeWidth:2.5,"aria-hidden":!0})})]}),a.jsx("button",{type:"button",className:"cart-item-remove",title:"حذف من السلة",disabled:u===t.id,onClick:()=>y(t),"aria-label":"حذف من السلة",children:a.jsx(Q,{size:17,strokeWidth:2.25,"aria-hidden":!0})})]})]})},t.id)):a.jsx("p",{style:{color:"#999",fontSize:"0.9rem",margin:0},children:"السلة فارغة حالياً."})})]}):a.jsx("div",{className:"card cart-details-loading",children:"تعذر تحميل السلة."}),a.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .cart-details-page{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .cart-details-back{
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 800;
          }
          .cart-details-back:hover{ text-decoration: underline; }
          .cart-details-loading{
            padding: 22px;
            font-weight: 800;
            color: var(--text-secondary);
            text-align: center;
          }
          .cart-details-card{
            padding: 16px 16px 18px;
          }
          .cart-items{
            margin-top: 10px;
          }
          .cart-line-block{
            border-bottom: 1px solid rgba(232, 230, 224, 0.85);
            padding: 10px 0;
          }
          .cart-line-block:last-child{
            border-bottom: none;
          }
          .cart-item-row{
            border-radius: 18px !important;
            padding: 12px 12px !important;
            background: rgba(255,255,255,0.92);
            border: 1px solid rgba(232, 230, 224, 0.95);
            box-shadow: 0 8px 22px rgba(26, 29, 38, 0.06);
            display: grid;
            grid-template-columns: 96px minmax(0, 1fr) auto;
            grid-template-areas: "thumb main actions";
            gap: 14px;
            align-items: start;
          }
          .cart-item-row:hover{
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 14px 34px rgba(245, 192, 0, 0.12);
          }
          .cart-item-thumb{
            grid-area: thumb;
            width: 96px;
            height: 96px;
            border-radius: 16px;
            overflow: hidden;
            background: var(--primary-light);
            border: 1px solid rgba(245,192,0,0.22);
          }
          .cart-item-main{
            grid-area: main;
            min-width: 0;
          }
          .cart-item-actions{
            grid-area: actions;
          }
          .cart-item-title{
            display: block;
            font-weight: 950;
            color: var(--secondary);
            text-decoration: none;
            line-height: 1.35;
            overflow-wrap: anywhere;
            word-break: break-word;
          }
          .cart-item-title--static{
            cursor: default;
          }
          .cart-item-meta{
            margin-top: 8px;
            display: grid;
            gap: 6px;
            min-width: 0;
          }
          .cart-item-badges{
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            align-items: center;
            min-width: 0;
          }
          .cart-item-badge{
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px;
            border-radius: 10px;
            font-weight: 950;
            font-size: 0.82rem;
            line-height: 1.25;
            color: var(--secondary);
            background: rgba(245,192,0,0.35);
            border: 1px solid rgba(245,192,0,0.5);
          }
          .cart-item-strike{
            font-size: 0.82rem;
            color: var(--text-secondary);
            text-decoration: line-through;
            white-space: nowrap;
          }
          .cart-item-pricing{
            font-size: 0.86rem;
            color: var(--text-secondary);
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            line-height: 1.35;
            min-width: 0;
          }
          .cart-item-dot{
            color: var(--text-light);
          }
          .cart-item-total{
            color: var(--text-light);
            font-weight: 900;
            white-space: nowrap;
          }
          .cart-item-expired{
            padding: 8px 10px;
            border-radius: 12px;
            background: rgba(229, 115, 115, 0.10);
            border: 1px solid rgba(229, 115, 115, 0.28);
            color: #8b2b2b;
            font-weight: 900;
            font-size: 0.86rem;
            line-height: 1.35;
          }
          @media (max-width: 520px){
            .cart-item-row{
              grid-template-columns: 1fr auto !important;
              grid-template-areas:
                "thumb actions"
                "main main" !important;
              padding: 10px 10px !important;
              border-radius: 16px !important;
            }
            .cart-item-thumb{ width: 112px; height: 112px; border-radius: 16px; }
            .cart-item-meta{ margin-top: 6px; gap: 5px; }
          }
          .cart-details-head{
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            flex-wrap: wrap;
            margin-bottom: 12px;
          }
          .cart-details-title{
            margin: 0;
            font-size: 1.25rem;
            font-weight: 950;
            color: var(--secondary);
          }
          .cart-details-total{
            font-weight: 900;
            color: var(--text-secondary);
          }
          .cart-details-total-num{
            color: #FFCC00;
            font-weight: 950;
          }
          .cart-item-actions{
            gap: 10px;
            flex-wrap: wrap;
            justify-content: flex-end;
            align-items: center;
          }
          .cart-qty-stepper{
            display: inline-flex;
            align-items: stretch;
            border-radius: 14px;
            overflow: hidden;
            border: 1.5px solid rgba(245, 192, 0, 0.38);
            background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255, 252, 238, 0.92) 100%);
            box-shadow: 0 2px 10px rgba(26, 29, 38, 0.06), inset 0 1px 0 rgba(255,255,255,0.85);
          }
          .cart-qty-stepper__btn{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 40px;
            padding: 0 8px;
            border: none;
            cursor: pointer;
            color: var(--secondary);
            background: rgba(245, 192, 0, 0.12);
            transition: background 0.15s ease, color 0.15s ease, transform 0.12s ease;
          }
          .cart-qty-stepper__btn:hover:not(:disabled){
            background: rgba(245, 192, 0, 0.28);
            color: var(--secondary);
          }
          .cart-qty-stepper__btn:active:not(:disabled){
            transform: scale(0.96);
          }
          .cart-qty-stepper__btn:disabled{
            opacity: 0.45;
            cursor: not-allowed;
          }
          .cart-qty-stepper__btn--minus{
            border-inline-end: 1px solid rgba(245, 192, 0, 0.22);
          }
          .cart-qty-stepper__btn--plus{
            border-inline-start: 1px solid rgba(245, 192, 0, 0.22);
          }
          .cart-qty-stepper__input{
            width: 48px;
            min-width: 44px;
            border: none;
            text-align: center;
            font-weight: 900;
            font-size: 0.95rem;
            font-variant-numeric: tabular-nums;
            color: var(--secondary);
            background: transparent;
            padding: 8px 4px;
            outline: none;
          }
          .cart-qty-stepper__input:focus{
            background: rgba(255, 255, 255, 0.65);
          }
          .cart-qty-stepper__input:disabled{
            opacity: 0.5;
          }
          .cart-item-remove{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 42px;
            height: 42px;
            border-radius: 12px;
            border: 1.5px solid rgba(229, 115, 115, 0.35);
            background: linear-gradient(180deg, rgba(255, 241, 241, 0.98) 0%, rgba(255, 250, 250, 0.88) 100%);
            color: #c62828;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(198, 40, 40, 0.08);
            transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, transform 0.12s ease;
          }
          .cart-item-remove:hover:not(:disabled){
            background: rgba(255, 227, 227, 0.95);
            border-color: rgba(198, 40, 40, 0.45);
            box-shadow: 0 4px 14px rgba(198, 40, 40, 0.14);
          }
          .cart-item-remove:active:not(:disabled){
            transform: scale(0.96);
          }
          .cart-item-remove:disabled{
            opacity: 0.5;
            cursor: not-allowed;
          }
          @media (max-width: 420px){
            .cart-qty-stepper__btn{ min-width: 36px; }
            .cart-qty-stepper__input{ width: 42px; min-width: 38px; font-size: 0.9rem; }
            .cart-item-remove{ width: 40px; height: 40px; border-radius: 11px; }
          }
        `}})]})})};export{tt as default};
