import{h as E,a as L,r as c,_ as T,j as e,L as f,a0 as B,a1 as y,a2 as W}from"./index-BYhK4i_S.js";import{M as P}from"./MainLayout-DbKfCyIo.js";import{I as R}from"./ImageCarousel-BLZqgF1J.js";import{c as q}from"./productImages-BYfYSUZM.js";import{f as p}from"./apiErrors-Bccm4O3Y.js";import{I as U}from"./image-9gmbRdCi.js";import{C as D,a as Q}from"./chevron-up-q8D-VpnP.js";import{T as V}from"./trash-2-CyBdgt45.js";import"./chevron-left-CAxHjwQU.js";const et=()=>{const{cartId:b}=E(),{showAlert:o,showConfirm:C}=L(),[i,w]=c.useState(null),[z,_]=c.useState(!0),[x,l]=c.useState(null),[F,v]=c.useState(null),s=c.useCallback(async({silent:t=!1}={})=>{if(b){t||_(!0);try{const a=await T(b);w(a)}catch(a){w(null),o(p(a,"تعذر تحميل السلة."),"خطأ")}finally{t||_(!1)}}},[b,o]);c.useEffect(()=>{s()},[s]);const u=t=>{var a;if(t.effective_unit_price!=null&&t.effective_unit_price!==""){const r=Number(t.effective_unit_price);if(Number.isFinite(r))return r}return Number(((a=t.product_details)==null?void 0:a.price)??0)},g=t=>{const a=t.catalog_unit_price;if(a==null||a==="")return null;const r=Number(a);return Number.isFinite(r)?r:null},h=t=>u(t)*Number(t.quantity??0),$=c.useMemo(()=>((i==null?void 0:i.items)||[]).reduce((a,r)=>a+h(r),0),[i]),S=async t=>{if(!i)return;const a=t??"";if((i.notes??"")!==a){v(i.id);try{await B(i.id,{notes:a}),await s({silent:!0})}catch(r){o(p(r,"تعذر حفظ الملاحظة.")),await s({silent:!0})}finally{v(null)}}},j=async t=>{var n;const a=t.line_title||((n=t.product_details)==null?void 0:n.name)||"هذا السطر";if(await C(`هل تريد إزالة «${a}» من السلة؟`,"تأكيد الحذف")){l(t.id);try{await W(t.id),await s({silent:!0})}catch(d){o(p(d,"تعذر حذف المنتج."))}finally{l(null)}}},N=async(t,a)=>{const r=Number(t.quantity??0)+a;if(r<1){await j(t);return}l(t.id);try{await y(t.id,{quantity:r}),await s({silent:!0})}catch(n){o(p(n,"تعذر تحديث الكمية.")),await s({silent:!0})}finally{l(null)}},A=async(t,a)=>{const r=parseInt(String(a),10);if(Number.isNaN(r)||r<1){o("الكمية يجب أن تكون رقماً صحيحاً ≥ ١"),await s({silent:!0});return}l(t.id);try{await y(t.id,{quantity:r}),await s({silent:!0})}catch(n){o(p(n,"تعذر تحديث الكمية.")),await s({silent:!0})}finally{l(null)}},M=async(t,a)=>{const r=a??"";if((t.note??"")!==r){l(t.id);try{await y(t.id,{note:r}),await s({silent:!0})}catch(n){o(p(n,"تعذر حفظ الملاحظة.")),await s({silent:!0})}finally{l(null)}}};return e.jsx(P,{children:e.jsxs("div",{className:"cart-details-page",children:[e.jsx("div",{style:{marginBottom:12},children:e.jsx(f,{to:"/carts",className:"cart-details-back",children:"← رجوع للسلال"})}),z?e.jsx("div",{className:"card cart-details-loading",children:"جاري تحميل السلة…"}):i?e.jsxs("div",{className:"card cart-details-card",children:[e.jsxs("div",{className:"cart-details-head",children:[e.jsx("h1",{className:"cart-details-title",children:i.name}),e.jsxs("div",{className:"cart-details-total",children:["الإجمالي: ",e.jsxs("span",{className:"cart-details-total-num",children:[$.toFixed(2)," ₪"]})]})]}),e.jsxs("div",{className:"cart-notes-section",children:[e.jsx("label",{className:"cart-note-label",htmlFor:`cart-notes-${i.id}`,children:"ملاحظة على السلة"}),e.jsx("textarea",{id:`cart-notes-${i.id}`,className:"cart-note-input",rows:2,placeholder:"مثال: موعد التوصيل، طلبات عامة على الطلب…",defaultValue:i.notes||"",disabled:F===i.id,onBlur:t=>S(t.target.value)},`${i.id}-cart-notes-${i.notes??""}`)]}),e.jsx("div",{className:"cart-items",children:Array.isArray(i.items)&&i.items.length>0?i.items.map(t=>e.jsx("div",{className:"cart-line-block",children:e.jsxs("div",{className:"item-row cart-item-row",style:{padding:"10px 0 6px",borderRadius:t.is_promotional_line?12:0,marginInline:t.is_promotional_line?-4:0,paddingInline:t.is_promotional_line?10:0,marginTop:t.is_promotional_line?6:0,background:t.is_promotional_line?"linear-gradient(135deg, rgba(245,192,0,0.12) 0%, rgba(255,249,230,0.35) 100%)":void 0,border:t.is_promotional_line?"1px solid rgba(245,192,0,0.4)":void 0},children:[e.jsx("div",{className:"cart-item-thumb",children:q(t).length>0?e.jsx(R,{images:q(t),height:96,borderRadius:16}):e.jsx("span",{className:"cart-item-thumb-placeholder flex-center",children:e.jsx(U,{size:20,color:"var(--text-light)"})})}),e.jsxs("div",{className:"cart-item-main",children:[(()=>{var d,m,k,I;const a=((d=t==null?void 0:t.product_details)==null?void 0:d.store)??((m=t==null?void 0:t.product_details)==null?void 0:m.store_id)??(t==null?void 0:t.store)??null,r=(t==null?void 0:t.product)??((k=t==null?void 0:t.product_details)==null?void 0:k.id)??null,n=t.line_title||((I=t.product_details)==null?void 0:I.name);return t.is_expired_line?e.jsx("div",{className:"cart-item-title cart-item-title--static",children:n}):a&&r?e.jsx(f,{to:`/stores/${a}`,state:{scrollToProductId:r},className:"cart-item-title",title:"فتح المنتج داخل المتجر",children:n}):e.jsx("div",{className:"cart-item-title cart-item-title--static",children:n})})(),(()=>{var n,d,m;const a=((t==null?void 0:t.line_store_name)||((n=t==null?void 0:t.product_details)==null?void 0:n.store_name)||"").trim(),r=(t==null?void 0:t.line_store_id)??((d=t==null?void 0:t.product_details)==null?void 0:d.store)??((m=t==null?void 0:t.product_details)==null?void 0:m.store_id)??null;return a?r&&!t.is_expired_line?e.jsxs(f,{to:`/stores/${r}`,className:"cart-item-store-link",title:"فتح المتجر",children:["المتجر: ",a]}):e.jsxs("div",{className:"cart-item-store-label",children:["المتجر: ",a]}):null})(),e.jsxs("div",{className:"cart-item-meta",children:[t.is_expired_line?e.jsx("div",{className:"cart-item-expired",children:t.expired_message||"انتهت صلاحية الإعلان."}):null,t.is_promotional_line?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cart-item-badges",children:[e.jsx("span",{className:"cart-item-badge",children:t.is_standalone_ad_line?`عرض ممول مستقل: ${u(t).toFixed(2)} ₪ للقطعة`:`عرض ممول: ${u(t).toFixed(2)} ₪ للقطعة`}),!t.is_standalone_ad_line&&g(t)!=null&&Math.abs(u(t)-g(t))>1e-9?e.jsxs("span",{className:"cart-item-strike",children:["سعر المتجر ",g(t).toFixed(2)," ₪"]}):null]}),e.jsx("div",{className:"cart-item-pricing",children:e.jsxs("span",{className:"cart-item-total",children:["المجموع ",h(t).toFixed(2)," ₪"]})})]}):e.jsxs("div",{className:"cart-item-pricing",children:[e.jsxs("span",{className:"cart-item-unit",children:[(g(t)!=null?g(t):u(t)).toFixed(2)," ₪ للقطعة"]}),e.jsx("span",{className:"cart-item-dot","aria-hidden":!0,children:"·"}),e.jsxs("span",{className:"cart-item-total",children:["المجموع ",h(t).toFixed(2)," ₪"]})]})]}),e.jsxs("div",{className:"cart-item-note-wrap",children:[e.jsx("label",{className:"cart-item-note-label",htmlFor:`cart-item-note-${t.id}`,children:"ملاحظة على المنتج (اختياري)"}),e.jsx("textarea",{id:`cart-item-note-${t.id}`,className:"cart-item-note-input",rows:2,placeholder:"مثال: بدون بصل / أولوية للتوصيل السريع",defaultValue:t.note||"",disabled:x===t.id,onBlur:a=>M(t,a.target.value)},`${t.id}-item-note-${t.note??""}`)]})]}),e.jsxs("div",{className:"flex-center cart-item-actions",children:[e.jsxs("div",{className:"cart-qty-stepper",dir:"ltr",children:[e.jsx("button",{type:"button",className:"cart-qty-stepper__btn cart-qty-stepper__btn--minus",disabled:x===t.id||t.is_expired_line,onClick:()=>N(t,-1),"aria-label":"تقليل الكمية",children:e.jsx(D,{size:18,strokeWidth:2.5,"aria-hidden":!0})}),e.jsx("input",{type:"text",inputMode:"numeric",className:"cart-qty-stepper__input",disabled:x===t.id||t.is_expired_line,value:String(t.quantity??""),onBlur:a=>A(t,a.target.value),"aria-label":"الكمية"}),e.jsx("button",{type:"button",className:"cart-qty-stepper__btn cart-qty-stepper__btn--plus",disabled:x===t.id||t.is_expired_line,onClick:()=>N(t,1),"aria-label":"زيادة الكمية",children:e.jsx(Q,{size:18,strokeWidth:2.5,"aria-hidden":!0})})]}),e.jsx("button",{type:"button",className:"cart-item-remove",title:"حذف من السلة",disabled:x===t.id,onClick:()=>j(t),"aria-label":"حذف من السلة",children:e.jsx(V,{size:17,strokeWidth:2.25,"aria-hidden":!0})})]})]})},t.id)):e.jsx("p",{style:{color:"#999",fontSize:"0.9rem",margin:0},children:"السلة فارغة حالياً."})})]}):e.jsx("div",{className:"card cart-details-loading",children:"تعذر تحميل السلة."}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
            display: grid;
            gap: 8px;
            justify-items: end;
            text-align: right;
          }
          .cart-item-actions{
            grid-area: actions;
          }
          .cart-item-note-wrap{
            margin-top: 2px;
            display: grid;
            gap: 6px;
            width: 100%;
            justify-items: end;
          }
          .cart-item-note-label{
            font-size: 0.82rem;
            color: var(--text-secondary);
            font-weight: 800;
            width: 100%;
            text-align: right;
          }
          .cart-item-note-input{
            width: 100%;
            min-height: 44px;
            border-radius: 12px;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: rgba(255,255,255,0.96);
            padding: 10px 12px;
            font-family: inherit;
            font-size: 0.9rem;
            resize: vertical;
            box-sizing: border-box;
            text-align: right;
          }
          .cart-item-note-input:focus{
            outline: none;
            border-color: rgba(245,192,0,0.65);
            box-shadow: 0 0 0 3px rgba(245,192,0,0.16);
          }
          .cart-item-title{
            display: block;
            font-weight: 950;
            color: var(--secondary);
            text-decoration: none;
            line-height: 1.35;
            overflow-wrap: anywhere;
            word-break: break-word;
            width: 100%;
            text-align: right;
          }
          .cart-item-title--static{
            cursor: default;
          }
          .cart-item-store-link,
          .cart-item-store-label{
            width: 100%;
            font-size: 0.84rem;
            font-weight: 800;
            color: var(--text-secondary);
            text-align: right;
          }
          .cart-item-store-link{
            text-decoration: none;
            color: var(--secondary);
          }
          .cart-item-store-link:hover{
            text-decoration: underline;
          }
          .cart-item-meta{
            margin-top: 0;
            display: grid;
            gap: 6px;
            min-width: 0;
            width: 100%;
            justify-items: end;
            text-align: right;
            direction: rtl;
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
            justify-content: flex-start;
            width: 100%;
            justify-self: end;
            text-align: right;
            direction: rtl;
            unicode-bidi: plaintext;
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
            text-align: right;
            width: 100%;
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
            .cart-item-meta{ margin-top: 6px; gap: 5px; justify-items: end; }
            .cart-item-main{ justify-items: end; }
            .cart-item-note-wrap{ justify-items: end; }
            .cart-item-pricing{ justify-content: flex-start; text-align: right; direction: rtl; }
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
        `}})]})})};export{et as default};
