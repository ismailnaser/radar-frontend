import{f as M,a as P,r as i,j as e,L as d,P as L,I as _,C as S,E as U,F as A,G as R,H as D}from"./index-B_PBbNzb.js";import{M as H,D as T,f as $}from"./MainLayout-DmMKzzNS.js";import{I as F}from"./ImageCarousel-B1HfYWYG.js";import{v as l}from"./productImages-BYfYSUZM.js";import{I as y}from"./image-CqC3pf1Q.js";import{U as G}from"./upload-GZm_PNi6.js";import{P as O}from"./pencil-CWxy1ICo.js";import{T as W}from"./trash-2-pT_lOFWx.js";import"./chevron-left-XrYxVJgw.js";const V=M("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]),re=()=>{const{showAlert:n,showConfirm:w}=P(),[p,j]=i.useState([]),[k,m]=i.useState(!0),[h,x]=i.useState(!1),[o,u]=i.useState([]),c=async()=>{m(!0);try{const t=await S();j(t)}finally{m(!1)}};i.useEffect(()=>{c()},[]);const N=async t=>{await R(t.id,{is_archived:!t.is_archived}),await c()},I=async t=>{await w("متأكد بدك تحذف المنتج نهائياً؟","تأكيد الحذف")&&(await D(t.id),await c())},C=async()=>{try{const t=await U(),a=window.URL.createObjectURL(t),r=document.createElement("a");r.href=a,r.download=`منتجات_رادار_${new Date().toLocaleDateString("ar-EG").replace(/\//g,"-")}.xlsx`,document.body.appendChild(r),r.click(),window.URL.revokeObjectURL(a),document.body.removeChild(r)}catch{n("فشل تصدير الملف. حاول مرة أخرى.","خطأ")}},z=async t=>{var r,g,b,v,f;const a=(r=t.target.files)==null?void 0:r[0];if(a){x(!0);try{const s=await A(a,o);await n(s.message,"تم الاستيراد"),((g=s.skipped)!=null&&g.length||(b=s.errors)!=null&&b.length)&&console.warn("Import issues:",s),await c()}catch(s){const E=((f=(v=s.response)==null?void 0:v.data)==null?void 0:f.error)||"فشل استيراد الملف. تأكد من الصيغة والبيانات.";await n(E,"خطأ")}finally{x(!1),u([]),t.target.value=""}}},B=()=>{n(`يجب أن يكون ملف Excel بالصيغة التالية:
1. العمود الأول: اسم المنتج (مطلوب)
2. العمود الثاني: السعر (رقم)
3. العمود الثالث: وصف المنتج
4. العمود الرابع: تفاصيل المنتج (افصل بينها بـ |)
5. العمود الخامس: أسماء الصور (افصل بينها بـ |) مثل: img1.jpg|img2.jpg
ثم ارفع نفس الصور من زر "اختيار صور".

تأكد من البدء من الصف الثاني (الصف الأول للعناوين).`,"تعليمات الاستيراد")};return e.jsx(H,{children:e.jsxs("div",{className:"merchant-products",children:[e.jsxs("div",{className:"flex-between",style:{marginBottom:16,flexWrap:"wrap",gap:12},children:[e.jsx("h1",{style:{fontSize:"1.8rem",margin:0},children:"منتجاتي"}),e.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[e.jsxs("button",{onClick:C,className:"btn-secondary",style:{width:"auto",display:"inline-flex",gap:8,alignItems:"center",background:"var(--white)",color:"var(--secondary)",border:"1px solid var(--border)"},children:[e.jsx(T,{size:18}),"تصدير إكسل"]}),e.jsxs("div",{style:{position:"relative"},children:[e.jsxs("button",{className:"btn-secondary",style:{width:"auto",display:"inline-flex",gap:8,alignItems:"center",background:"var(--white)",color:"var(--secondary)",border:"1px solid var(--border)"},onClick:()=>document.getElementById("excel-images-input").click(),type:"button",children:[e.jsx(y,{size:18}),o.length>0?`تم اختيار ${o.length} صورة`:"اختيار صور"]}),e.jsx("input",{id:"excel-images-input",type:"file",accept:"image/*,.jpg,.jpeg,.png,.webp,.heif,.heic",multiple:!0,style:{display:"none"},onChange:t=>u(Array.from(t.target.files||[]))})]}),e.jsxs("div",{style:{position:"relative"},children:[e.jsxs("button",{disabled:h,className:"btn-secondary",style:{width:"auto",display:"inline-flex",gap:8,alignItems:"center",background:"var(--white)",color:"var(--secondary)",border:"1px solid var(--border)"},onClick:()=>document.getElementById("excel-import-input").click(),children:[e.jsx(G,{size:18}),h?"جاري الاستيراد...":"استيراد إكسل"]}),e.jsx("input",{id:"excel-import-input",type:"file",accept:".xlsx, .xls",style:{display:"none"},onChange:z})]}),e.jsxs(d,{to:"/merchant/products/new",className:"btn-primary",style:{width:"auto",display:"inline-flex",gap:10,alignItems:"center"},children:[e.jsx(L,{size:18}),"إضافة منتج"]})]})]}),e.jsxs("div",{style:{display:"flex",gap:12,marginBottom:14},children:[e.jsxs("div",{className:"card",style:{flex:1,padding:"12px 16px",background:"var(--primary-light)",borderColor:"rgba(245,192,0,0.45)",fontSize:"0.92rem",lineHeight:1.55,color:"var(--text-primary)"},children:[e.jsx("strong",{children:"مهم:"})," المنتجات ذات الحالة «مؤرشف» لا تظهر في صفحة المتجر للمتسوّقين. اضغط أيقونة الأرشيف بجانب المنتج لتغيير حالته."]}),e.jsx("button",{onClick:B,className:"iconBtn",title:"تعليمات الاستيراد",style:{background:"var(--white)",border:"1px solid var(--border)",flexShrink:0},children:e.jsx(_,{size:20})})]}),e.jsx("div",{className:"card merchant-products-table",style:{padding:0,overflow:"hidden"},children:k?e.jsx("div",{style:{padding:18},children:"جاري التحميل..."}):p.length===0?e.jsx("div",{style:{padding:18},children:"لا يوجد منتجات بعد."}):e.jsxs("div",{className:"table",children:[e.jsxs("div",{className:"row head",children:[e.jsx("div",{children:"المنتج"}),e.jsx("div",{children:"السعر"}),e.jsx("div",{children:"الحالة"}),e.jsx("div",{children:"إجراءات"})]}),p.map(t=>e.jsxs("div",{className:"row product-row",children:[e.jsxs("div",{className:"cell productCell",children:[e.jsx("div",{className:"product-thumb-wrap",children:l(t).length>0?e.jsx(F,{images:l(t),alt:t.name,height:76,borderRadius:14}):e.jsx("div",{className:"thumb thumb-empty",children:e.jsx(y,{size:18})})}),e.jsxs("div",{className:"product-text",children:[e.jsx("div",{className:"product-name",children:t.name}),e.jsx("div",{className:"product-desc",children:t.description||"—"})]})]}),e.jsxs("div",{className:"product-row-meta",children:[e.jsx("div",{className:"cell cell-price","data-label":"السعر",children:e.jsxs("span",{className:"price-value",children:[t.price," ₪"]})}),e.jsxs("div",{className:"cell cell-status","data-label":"الحالة",children:[e.jsx("span",{className:"badge",style:{background:t.is_archived?"#eee":"var(--primary)",color:"var(--secondary)"},children:t.is_archived?"مؤرشف":"نشط"}),t.is_archived&&e.jsx("div",{className:"archived-hint",children:"مخفي عن صفحة المتجر"})]})]}),e.jsxs("div",{className:"cell actions","data-label":"إجراءات",children:[e.jsx(d,{to:`/merchant/products/${t.id}/edit`,className:"iconBtn",title:"تعديل",children:e.jsx(O,{size:18})}),t.is_archived?null:e.jsx(d,{to:"/merchant/ads",state:{prefillFromProduct:{id:t.id,name:t.name||"",description:(t.description||"").trim(),price:t.price,image:t.image||null,images:l(t)}},className:"iconBtn",title:"إعلان ممول لهذا المنتج","aria-label":"إعلان ممول لهذا المنتج",children:e.jsx($,{size:18})}),e.jsx("button",{type:"button",className:"iconBtn",onClick:()=>N(t),title:t.is_archived?"إلغاء الأرشفة":"أرشفة",children:e.jsx(V,{size:18})}),e.jsx("button",{type:"button",className:"iconBtn danger",onClick:()=>I(t),title:"حذف",children:e.jsx(W,{size:18})})]})]},t.id))]})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .merchant-products{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .merchant-products .table {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          .merchant-products .product-row-meta { display: contents; }
          .merchant-products .row {
            display: grid;
            grid-template-columns: minmax(220px, 1.7fr) minmax(90px, 0.6fr) minmax(100px, 0.7fr) minmax(150px, 0.9fr);
            gap: 12px;
            padding: 14px 16px;
            align-items: center;
            border-top: 1px solid var(--border);
          }
          .merchant-products .row.head { background: var(--surface); font-weight: 900; border-top: none; }
          .merchant-products .row.head > div { color: var(--text-secondary); }
          .merchant-products .productCell { display: flex; gap: 12px; align-items: center; min-width: 0; }
          .merchant-products .product-text { min-width: 0; }
          .merchant-products .product-name { font-weight: 900; color: var(--text-primary); }
          .merchant-products .product-desc {
            color: var(--text-secondary);
            font-size: 0.9rem;
            line-height: 1.45;
            margin-top: 4px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .merchant-products .product-thumb-wrap {
            flex-shrink: 0;
            width: 108px;
            max-width: 36vw;
          }
          .merchant-products .thumb-empty {
            height: 88px;
            border-radius: 14px;
            background: var(--primary-light);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border: 1px solid rgba(245,192,0,0.25);
          }
          .merchant-products .cell-price,
          .merchant-products .cell-status {
            justify-self: center;
          }
          .merchant-products .price-value {
            font-weight: 900;
            font-variant-numeric: tabular-nums;
            white-space: nowrap;
          }
          .merchant-products .cell-status { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
          .merchant-products .archived-hint { font-size: 0.78rem; color: #c0392b; margin-top: 4px; font-weight: 700; line-height: 1.35; }
          .merchant-products .actions {
            display: flex;
            gap: 10px;
            justify-content: flex-start;
            flex-wrap: wrap;
            min-width: 0;
          }
          .merchant-products .iconBtn {
            border: 1px solid var(--border);
            background: var(--white);
            padding: 8px;
            border-radius: 12px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--secondary);
          }
          .merchant-products .iconBtn:hover { background: var(--primary-light); }
          .merchant-products .iconBtn.danger { color: #c0392b; }

          @media (max-width: 900px) {
            .merchant-products .row.head { display: none; }
            .merchant-products .merchant-products-table {
              border-radius: 16px;
            }
            .merchant-products .table {
              background: var(--surface);
              padding: 10px 8px 14px;
              gap: 0;
              border-radius: 0 0 var(--radius-lg) var(--radius-lg);
            }
            .merchant-products .row.product-row {
              display: flex;
              flex-direction: column;
              align-items: stretch;
              gap: 14px;
              padding: 16px 14px;
              margin: 0 4px 12px;
              border: 1px solid var(--border);
              border-radius: 14px;
              background: var(--white);
              box-shadow: var(--shadow-sm);
              border-top: 1px solid var(--border);
            }
            .merchant-products .row.product-row:last-child { margin-bottom: 4px; }
            .merchant-products .product-row-meta {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 12px 14px;
              align-items: start;
              width: 100%;
            }
            .merchant-products .cell-price,
            .merchant-products .cell-status {
              justify-self: stretch;
              background: var(--surface);
              border: 1px solid var(--border);
              border-radius: 12px;
              padding: 10px 12px;
            }
            .merchant-products .cell-status { align-items: flex-start; }
            .merchant-products .productCell { align-items: flex-start; }
            .merchant-products .product-thumb-wrap { width: 120px; max-width: 55vw; }
            .merchant-products .thumb-empty { height: 100px; border-radius: 16px; }
            .merchant-products .cell[data-label]::before {
              content: attr(data-label);
              display: block;
              font-size: 0.72rem;
              font-weight: 800;
              color: var(--text-secondary);
              margin-bottom: 6px;
              text-transform: none;
              letter-spacing: 0.02em;
            }
            .merchant-products .actions {
              justify-content: flex-end;
              padding-top: 8px;
              border-top: 1px dashed var(--border);
            }
            .merchant-products .iconBtn { min-width: 44px; min-height: 44px; padding: 10px; }
          }

          @media (max-width: 380px) {
            .merchant-products .product-row-meta { grid-template-columns: 1fr; }
          }
        `}})]})})};export{re as default};
