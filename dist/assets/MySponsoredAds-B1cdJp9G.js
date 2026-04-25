import{a as f,r as c,O as j,j as e,L as o,Q as w,R as v}from"./index-DU8M2o6X.js";import{M as N}from"./MainLayout-OmniWajU.js";import{I as k}from"./ImageCarousel-BLxvKXkR.js";import{v as _}from"./productImages-BYfYSUZM.js";import{I as S}from"./image-BOFWuLnF.js";import{P as z}from"./pencil-DEzdtH6C.js";import{T as A}from"./trash-2-CxzRsFES.js";import"./chevron-left-D-wcnmbd.js";function m(a){if(!a)return"—";try{const i=new Date(a);return Number.isNaN(i.getTime())?String(a):i.toLocaleString("ar",{dateStyle:"medium",timeStyle:"short"})}catch{return String(a)}}function T(a){if(a.status==="pending")return{label:"بانتظار موافقة الإدارة",className:"mb-pill mb-pill-pending"};if(a.status==="rejected")return{label:"مرفوض",className:"mb-pill mb-pill-rejected"};if(a.status==="expired")return{label:"منتهي الصلاحية",className:"mb-pill mb-pill-expired"};if(a.status==="active"&&a.approved_at){const i=new Date(a.approved_at),n=new Date(i.getTime()+24*60*60*1e3);return Date.now()<=n.getTime()?{label:`يعرض للمتسوّقين حتى ${m(n.toISOString())}`,className:"mb-pill mb-pill-active"}:{label:"نافذة العرض منتهية (يُحدَّث السجل تلقائياً)",className:"mb-pill mb-pill-warn"}}return{label:a.status,className:"mb-pill"}}function P(){const{showAlert:a,showConfirm:i,showPrompt:n}=f(),[p,x]=c.useState([]),[u,h]=c.useState(!0),l=c.useCallback(async()=>{h(!0);try{const r=await j();x(Array.isArray(r)?r:[])}catch(r){console.error(r),x([]),await a("تعذر تحميل إعلاناتك.","خطأ")}finally{h(!1)}},[a]);c.useEffect(()=>{l()},[l]);const y=async r=>{if(await i("حذف هذا الطلب؟ (مسموح فقط أثناء انتظار الموافقة)","تأكيد"))try{await w(r.id),await a("تم الحذف.","تم"),await l()}catch(t){console.error(t),await a("تعذر الحذف. قد لا يكون الطلب قيد الانتظار.","خطأ")}},b=async r=>{const s=await n("عدّل عنوان الإعلان","العنوان","تعديل الطلب",r.title||"");if(s==null)return;const t=await n("عدّل وصف الإعلان","الوصف","تعديل الطلب",r.description||"");if(t!=null)try{await v(r.id,{title:s,description:t}),await a("تم التعديل.","تم"),await l()}catch(d){console.error(d),await a("تعذر التعديل.","خطأ")}};return e.jsx(N,{children:e.jsxs("div",{className:"merchant-my-ads",children:[e.jsxs("div",{className:"flex-between",style:{marginBottom:14,flexWrap:"wrap",gap:12},children:[e.jsxs("div",{children:[e.jsx("h1",{style:{fontSize:"1.8rem",margin:"0 0 6px"},children:"إعلاناتي الممولة"}),e.jsx("p",{style:{margin:0,color:"var(--text-secondary)",lineHeight:1.65,maxWidth:640},children:"كل الطلبات التي أرسلتها: قيد المراجعة، المرفوضة، النشطة، أو المنتهية بعد 24 ساعة من الموافقة. التفاصيل كاملة لكل إعلان بما فيها المنتج المربوط (إن وُجد) وإشعار الدفع."})]}),e.jsx(o,{to:"/merchant/ads",className:"btn-request-ad",children:"طلب إعلان ممول جديد"})]}),u?e.jsx("p",{children:"جاري التحميل…"}):p.length===0?e.jsxs("div",{className:"card",style:{padding:24,textAlign:"center"},children:[e.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"لا توجد إعلانات بعد."}),e.jsx(o,{to:"/merchant/ads",style:{display:"inline-block",marginTop:14,fontWeight:800},children:"إرسال طلب إعلان ممول"})]}):e.jsx("div",{className:"my-ads-stack",children:p.map(r=>{var g;const s=T(r),t=_(r),d=r.status==="pending";return e.jsx("article",{className:"card my-ad-card",children:e.jsxs("div",{className:"my-ad-top",children:[e.jsx("div",{className:"my-ad-media",children:t.length>0?e.jsx(k,{images:t,height:152,borderRadius:16}):e.jsx("div",{className:"my-ad-media-empty",children:e.jsx(S,{size:32})})}),e.jsxs("div",{className:"my-ad-main",children:[e.jsxs("div",{className:"my-ad-title-row",children:[e.jsx("h2",{className:"my-ad-title",children:r.title}),e.jsx("span",{className:s.className,children:s.label})]}),e.jsxs("div",{className:"my-ad-meta",children:[e.jsxs("span",{children:[e.jsx("strong",{children:"سعر العرض في الإعلان:"})," ",Number(r.product_price)>0?`${Number(r.product_price).toFixed(2)} ₪`:"—"]}),e.jsxs("span",{children:[e.jsx("strong",{children:"قناة الدفع:"})," ",r.payment_method_label||"—"]}),e.jsxs("span",{children:[e.jsx("strong",{children:"أُنشئ:"})," ",m(r.created_at)]}),r.approved_at?e.jsxs("span",{children:[e.jsx("strong",{children:"وافقت الإدارة:"})," ",m(r.approved_at)]}):null]}),e.jsxs("div",{className:"my-ad-product-block",children:[e.jsx("strong",{children:"المنتج في الكتالوج:"})," ",r.product_details?e.jsxs(e.Fragment,{children:[e.jsx(o,{to:`/merchant/products/${r.product}/edit`,children:r.product_details.name}),e.jsxs("span",{className:"muted",children:[" ","— سعر الكتالوج: ",Number(r.product_details.price).toFixed(2)," ₪"]})]}):r.product?e.jsxs("span",{children:["مرتبط بمنتج #",r.product]}):e.jsx("span",{className:"muted",children:"إعلان مستقل (غير مربوط بمنتج في «منتجاتي»)"})]}),e.jsxs("div",{className:"my-ad-desc",children:[e.jsx("strong",{children:"تفاصيل الإعلان"}),e.jsx("p",{children:(g=r.description)!=null&&g.trim()?r.description:e.jsx("span",{className:"muted",children:"لا يوجد وصف"})})]}),r.payment_receipt_image?e.jsxs("div",{className:"my-ad-receipt",children:[e.jsx("strong",{children:"إشعار الدفع"}),e.jsx("a",{href:r.payment_receipt_image,target:"_blank",rel:"noreferrer",children:e.jsx("img",{src:r.payment_receipt_image,alt:"إشعار الدفع",className:"receipt-thumb",loading:"lazy",width:"220",height:"220"})})]}):null,d?e.jsxs("div",{className:"my-ad-actions",children:[e.jsxs("button",{type:"button",className:"iconBtn",onClick:()=>b(r),title:"تعديل سريع",children:[e.jsx(z,{size:18}),"تعديل"]}),e.jsxs("button",{type:"button",className:"iconBtn danger",onClick:()=>y(r),title:"حذف",children:[e.jsx(A,{size:18}),"حذف"]})]}):null]})]})},r.id)})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .merchant-my-ads{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .merchant-my-ads .btn-request-ad {
            display: inline-flex; align-items: center; justify-content: center;
            padding: 12px 18px; border-radius: 14px; font-weight: 900; text-decoration: none;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary); box-shadow: var(--shadow-gold); white-space: nowrap;
          }
          .merchant-my-ads .btn-request-ad:hover { filter: brightness(1.03); }
          .my-ads-stack { display: flex; flex-direction: column; gap: 20px; }
          .my-ad-card { padding: 18px; overflow: hidden; }
          .my-ad-top { display: grid; grid-template-columns: minmax(0, 280px) 1fr; gap: 18px; }
          @media (max-width: 768px) {
            .my-ad-top { grid-template-columns: 1fr; }
          }
          .my-ad-media-empty {
            height: 200px; border-radius: 16px; background: var(--primary-light);
            display: flex; align-items: center; justify-content: center; color: var(--text-secondary);
            border: 1px dashed var(--border);
          }
          .my-ad-title-row { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 10px; margin-bottom: 10px; }
          .my-ad-title { margin: 0; font-size: 1.25rem; color: var(--secondary); flex: 1; min-width: 0; }
          .mb-pill {
            padding: 6px 12px; border-radius: 999px; font-size: 0.78rem; font-weight: 800; white-space: nowrap;
          }
          .mb-pill-pending { background: #fff8e6; color: #856404; border: 1px solid #f5d77a; }
          .mb-pill-active { background: #e8f8f0; color: #1e6b48; border: 1px solid #9dceb5; }
          .mb-pill-rejected { background: #fdecea; color: #922b21; border: 1px solid #f5c6c2; }
          .mb-pill-expired { background: #eef1f4; color: #566573; border: 1px solid var(--border); }
          .mb-pill-warn { background: #fff4e5; color: #a65c00; border: 1px solid #ffc999; }
          .my-ad-meta {
            display: flex; flex-direction: column; gap: 6px; font-size: 0.88rem; line-height: 1.5;
            margin-bottom: 12px; color: var(--text-primary);
          }
          .my-ad-product-block { margin-bottom: 12px; font-size: 0.92rem; line-height: 1.55; }
          .my-ad-product-block a { font-weight: 800; color: var(--secondary); }
          .my-ad-desc { margin-bottom: 12px; }
          .my-ad-desc p { margin: 6px 0 0; line-height: 1.7; white-space: pre-wrap; }
          .my-ad-receipt { margin-top: 8px; }
          .my-ad-receipt .receipt-thumb {
            display: block; margin-top: 8px; max-width: 220px; max-height: 160px; object-fit: contain;
            border-radius: 10px; border: 1px solid var(--border);
          }
          .my-ad-actions { display: flex; gap: 10px; margin-top: 14px; flex-wrap: wrap; }
          .merchant-my-ads .iconBtn {
            border: 1px solid var(--border); background: var(--white); padding: 10px 14px; border-radius: 14px;
            font-weight: 800; color: var(--secondary); display: inline-flex; align-items: center; gap: 8px;
            cursor: pointer; font-family: inherit;
          }
          .merchant-my-ads .iconBtn:hover { background: var(--primary-light); }
          .merchant-my-ads .iconBtn.danger { color: #c0392b; }
        `}})]})})}export{P as default};
