import{f as T,r as s,a as Y,Z as B,j as e,P as R,L as D,y as W,z as Z,_ as H,$ as O}from"./index-C-VrR7wq.js";import{M as V,i as J}from"./MainLayout-XBlxfZ8w.js";import{G as K}from"./GuestAccessPrompt-BnDY45AK.js";import{f as _}from"./apiErrors-Bccm4O3Y.js";import{c as Q}from"./cartAccess-DdSevxjw.js";import{T as X}from"./trash-2-B0hdkQEJ.js";import"./CustomButton-_KVkiNpC.js";const tt=T("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]),et=n=>typeof window>"u"||!n?"":`${window.location.origin}/share/cart/${n}`,C=n=>{const c=String(n||"").trim();return c?["Cart link:",`‭${c}‬`,c]:[]},ht=()=>{const[n,c]=s.useState([]),[z,$]=s.useState(!0),[rt,at]=s.useState(null),[it,nt]=s.useState(null),[S,ot]=s.useState(localStorage.getItem("isGuest")==="true"),{showAlert:d,showPrompt:I,showConfirm:A}=Y(),x=async()=>{try{const t=await W();c(t)}catch(t){console.error("Error fetching carts:",t)}finally{$(!1)}};s.useEffect(()=>{(async()=>{if(await x(),!!Q())try{const{notices:t}=await B(),r=Array.isArray(t)?t:[];for(const i of r){const o=typeof i=="string"?i:i==null?void 0:i.text;o&&await d(o,"تنبيه")}}catch{}})()},[]);const u=async()=>{const t=await I("أدخل اسم السلة الجديدة (مثل: أغراض المنزل):","اسم السلة...");if(t)try{await Z(t),x()}catch(r){d(_(r,"تعذر إنشاء السلة."),"خطأ")}},w=t=>{var r;if(t.effective_unit_price!=null&&t.effective_unit_price!==""){const i=Number(t.effective_unit_price);if(Number.isFinite(i))return i}return Number(((r=t.product_details)==null?void 0:r.price)??0)},F=t=>{const r=t.catalog_unit_price;if(r==null||r==="")return null;const i=Number(r);return Number.isFinite(i)?i:null},m=t=>w(t)*Number(t.quantity??0),L=async t=>{let r=t.share_token!=null&&t.share_token!==""?String(t.share_token):"";if(!r)try{const a=await H(t.id);r=(a==null?void 0:a.share_token)!=null&&a.share_token!==""?String(a.share_token):""}catch{r=""}if(!r){d("تعذر الحصول على رابط المشاركة. تحقق من الاتصال بالخادم ثم حدّث الصفحة.","مشاركة السلة");return}const i=et(r),o=t.name||"سلة المشتريات",l=t.items||[],y=l.reduce((a,b)=>a+m(b),0),U=l.map((a,b)=>{const E=a.product_details||{},P=a.line_title||E.name||"منتج",k=w(a),f=F(a),q=Number(a.quantity??0),G=m(a);let p=`${b+1}) ${P}
   ${q} × ${k.toFixed(2)} ₪ = ${G.toFixed(2)} ₪`;a.is_promotional_line&&f!=null&&Math.abs(k-f)>1e-9?p+=`
   (سعر عرض ممول؛ السعر المعتاد في المتجر ${f.toFixed(2)} ₪)`:a.is_promotional_line&&a.is_standalone_ad_line&&(p+=`
   (عرض ممول مستقل — بسعر الإعلان)`);const N=(a.note||"").trim();return N&&(p+=`
   📌 ملاحظة: ${N}`),p}),v=(t.notes||"").trim(),j=a=>a?[`رادار — ${o}`,`الإجمالي: ${y} ₪`,"التفاصيل الكاملة في الرابط أدناه.","","────────","رابط عرض السلة على موقع رادار:",...C(i),"","تم إنشاء القائمة من تطبيق رادار."].join(`
`):[`رادار — ${o}`,...v?[`ملاحظة على السلة: ${v}`,"──────────────────"]:[],...U,"──────────────────",`الإجمالي: ${y} ₪`,"","────────","رابط عرض السلة على موقع رادار (اضغط للصفحة والصور):",...C(i),"","تم إنشاء القائمة من تطبيق رادار."].join(`
`);let g=j(!1),h=`https://wa.me/?text=${encodeURIComponent(g)}`;h.length>6e3&&(g=j(!0),h=`https://wa.me/?text=${encodeURIComponent(g)}`),window.open(h,"_blank","noopener,noreferrer")||d("تعذر فتح واتساب. اسمح بالنوافذ المنبثقة ثم أعد المحاولة.","مشاركة السلة")},M=async t=>{if(await A(`حذف السلة «${t.name}» وجميع محتوياتها نهائياً؟ لا يمكن التراجع.`,"تأكيد حذف السلة"))try{await O(t.id),await x()}catch(i){d(_(i,"تعذر حذف السلة."),"خطأ")}};return e.jsx(V,{children:e.jsxs("div",{className:"carts-page",children:[S?e.jsx(K,{title:"سلال المشتريات متوفرة للأعضاء فقط",message:"قم بإنشاء حساب مجاني لتتمكن من إنشاء سلال مشتريات متعددة ومشاركتها مع عائلتك وأصدقائك عبر الواتساب."}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"carts-head flex-between",children:[e.jsx("h1",{className:"carts-title",children:"سلال المشتريات"}),e.jsxs("button",{className:"btn-primary carts-new-btn",onClick:u,children:[e.jsx(R,{size:20})," سلة جديدة"]})]}),z?e.jsx("p",{children:"جاري تحميل السلال..."}):n.length>0?e.jsx("div",{className:"carts-grid",children:n.map(t=>{const r=(t.items||[]).length,i=Number((t.items||[]).reduce((o,l)=>o+m(l),0)).toFixed(2);return e.jsx("div",{className:"card shopping-cart-card",children:e.jsxs("div",{className:"cart-card-shell",dir:"rtl",children:[e.jsxs("div",{className:"cart-card-top",children:[e.jsxs("div",{className:"cart-card-text-cluster",dir:"rtl",children:[e.jsxs("div",{className:"cart-card-row-head",children:[e.jsx("div",{className:"cart-card-icon","aria-hidden":!0,children:e.jsx(tt,{size:22,strokeWidth:2.25})}),e.jsx("h3",{className:"cart-collapsed-title",children:t.name})]}),e.jsxs("div",{className:"cart-card-details",dir:"rtl",children:[e.jsx("div",{className:"cart-card-meta",children:e.jsxs("span",{className:"cart-card-pill",children:[r," ",r===1?"عنصر":"عناصر"]})}),e.jsxs("div",{className:"cart-card-total-strip",children:[e.jsx("span",{className:"cart-card-total-label",children:"الإجمالي"}),e.jsxs("span",{className:"cart-card-total-num",children:[i," ₪"]})]})]})]}),e.jsxs("div",{className:"cart-card-actions flex-center",children:[e.jsx("button",{type:"button",className:"action-btn share",title:"مشاركة واتساب",onClick:()=>L(t),children:e.jsx(J,{size:18})}),e.jsx("button",{type:"button",className:"action-btn delete",title:"حذف السلة",onClick:()=>M(t),children:e.jsx(X,{size:18})})]})]}),e.jsx("div",{className:"cart-card-bottom",children:e.jsx(D,{to:`/carts/${t.id}`,className:"cart-card-view-btn","aria-label":`عرض سلة ${t.name}`,children:"عرض السلة"})})]})},t.id)})}):e.jsxs("div",{className:"empty-state card flex-center",style:{flexDirection:"column",padding:"50px"},children:[e.jsx("p",{children:"ليس لديك أي سلال مشتريات بعد."}),e.jsx("button",{className:"btn-primary",onClick:u,style:{width:"auto",marginTop:"20px"},children:"ابدأ بإنشاء أول سلة"})]})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .carts-page{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .carts-head{
            margin-bottom: 20px;
            flex-wrap: wrap;
            gap: 12px;
          }
          .carts-title{
            margin: 0;
            font-weight: 950;
            font-size: 1.65rem;
            color: var(--secondary);
            letter-spacing: -0.02em;
          }
          .carts-new-btn{
            width: auto;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 10px 16px;
          }
          .carts-grid{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
            gap: clamp(12px, 3vw, 20px);
          }
          @media (min-width: 960px) {
            .carts-grid{
              grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
            }
          }
          .shopping-cart-card{
            border-top: 5px solid var(--primary);
            padding: 0;
            border-radius: 20px;
            min-height: 244px;
            box-shadow: 0 12px 34px rgba(26, 29, 38, 0.08);
            background: linear-gradient(165deg, rgba(255, 252, 238, 0.55) 0%, rgba(255, 255, 255, 0.98) 42%, rgba(255, 255, 255, 1) 100%);
            border: 1px solid rgba(232, 230, 224, 0.95);
            border-top-width: 5px;
            transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
            overflow: hidden;
            display: flex;
            flex-direction: column;
          }
          .shopping-cart-card:hover{
            transform: translateY(-3px);
            box-shadow: 0 18px 44px rgba(245, 192, 0, 0.16);
            border-color: rgba(245, 192, 0, 0.42);
          }
          .cart-card-shell{
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 18px 14px 20px;
            min-height: 244px;
            box-sizing: border-box;
          }
          .cart-card-top{
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            flex: 1;
            min-height: 0;
            min-width: 0;
            flex-wrap: nowrap;
            position: relative;
          }
          .cart-card-text-cluster{
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 14px;
            flex: 1;
            min-width: 0;
            /* reserve space for the absolute actions column so the title+icon can truly center */
            padding-inline-end: 56px;
          }
          .cart-card-row-head{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 12px;
            min-width: 0;
            text-align: center;
          }
          .cart-card-row-head .cart-collapsed-title{
            flex: 0 1 auto;
            min-width: 0;
            padding-top: 2px;
            text-align: start;
          }
          .cart-card-details{
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
            width: 100%;
            margin-top: 2px;
            padding-top: 12px;
            border-top: 1px solid rgba(232, 230, 224, 0.9);
            box-sizing: border-box;
          }
          .cart-card-bottom{
            display: flex;
            justify-content: center;
            width: 100%;
            flex-shrink: 0;
            padding-top: 2px;
          }
          .cart-card-view-btn{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 11px 18px;
            border-radius: 14px;
            font-weight: 950;
            font-size: 0.88rem;
            max-width: min(220px, 100%);
            box-sizing: border-box;
            white-space: nowrap;
            text-decoration: none;
            color: var(--secondary);
            background: linear-gradient(180deg, rgba(255, 249, 220, 0.95) 0%, rgba(245, 192, 0, 0.42) 100%);
            border: 1.5px solid rgba(245, 192, 0, 0.55);
            box-shadow: 0 4px 14px rgba(245, 192, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.75);
            transition: transform 0.14s ease, box-shadow 0.14s ease, border-color 0.14s ease;
          }
          .cart-card-view-btn:hover{
            transform: translateY(-1px);
            border-color: rgba(245, 192, 0, 0.85);
            box-shadow: 0 8px 22px rgba(245, 192, 0, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.85);
          }
          .cart-card-view-btn:focus-visible{
            outline: 2px solid rgba(245, 192, 0, 0.75);
            outline-offset: 2px;
          }
          .cart-card-view-btn:active{
            transform: translateY(0);
          }
          .cart-card-icon{
            flex-shrink: 0;
            align-self: flex-start;
            width: 48px;
            height: 48px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--secondary);
            background: linear-gradient(160deg, rgba(245, 192, 0, 0.38) 0%, rgba(255, 249, 220, 0.9) 100%);
            border: 1px solid rgba(245, 192, 0, 0.45);
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.75);
          }
          .cart-card-meta{
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            justify-content: flex-start;
          }
          .cart-card-pill{
            display: inline-flex;
            align-items: center;
            padding: 4px 11px;
            border-radius: 999px;
            font-size: 0.78rem;
            font-weight: 900;
            color: var(--text-secondary);
            background: rgba(26, 29, 38, 0.06);
            border: 1px solid rgba(26, 29, 38, 0.08);
          }
          .cart-card-total-strip{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 11px 12px;
            border-radius: 14px;
            background: rgba(255, 255, 255, 0.82);
            border: 1px solid rgba(245, 192, 0, 0.28);
            box-shadow: 0 2px 10px rgba(26, 29, 38, 0.05);
          }
          .cart-card-total-label{
            font-size: 0.8rem;
            font-weight: 850;
            color: var(--text-secondary);
          }
          .cart-card-total-num{
            font-size: 1.08rem;
            font-weight: 950;
            font-variant-numeric: tabular-nums;
            color: var(--secondary);
            letter-spacing: -0.02em;
            min-width: 0;
            overflow-wrap: anywhere;
          }
          .cart-card-actions{
            flex-direction: column;
            flex-shrink: 0;
            gap: 8px;
            align-self: stretch;
            padding-top: 0;
            min-width: 44px;
            position: absolute;
            top: 0;
            inset-inline-end: 0;
            bottom: 0;
            justify-content: center;
            align-items: center;
          }
          .cart-collapsed-title{
            margin: 0;
            font-weight: 950;
            font-size: 1.06rem;
            line-height: 1.35;
            color: var(--secondary);
            min-width: 0;
            overflow-wrap: anywhere;
            word-break: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .action-btn {
            background: rgba(255,255,255,0.92);
            border: 1px solid rgba(232, 230, 224, 0.95);
            cursor: pointer;
            color: var(--secondary);
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.12s ease, box-shadow 0.15s ease, border-color 0.15s ease;
            box-shadow: 0 2px 12px rgba(26, 29, 38, 0.06);
          }
          .action-btn:hover { transform: translateY(-1px); border-color: rgba(245, 192, 0, 0.45); box-shadow: 0 10px 24px rgba(26, 29, 38, 0.10); }
          .action-btn:active { transform: translateY(0); }
          .action-btn.share { color: #1b5e20; }
          .action-btn.delete { color: #c62828; border-color: rgba(198, 40, 40, 0.25); }
          .action-btn.delete:hover { border-color: rgba(198, 40, 40, 0.45); }
          @media (max-width: 520px){
            .cart-card-top{
              flex-direction: column;
              align-items: stretch;
              gap: 14px;
              position: static;
            }
            .cart-card-text-cluster{
              order: 0;
              width: 100%;
              padding-inline-end: 0;
            }
            .cart-card-actions{
              flex-direction: row;
              justify-content: flex-start;
              gap: 10px;
              order: 1;
              align-self: stretch;
              padding-top: 0;
              position: static;
            }
            .cart-card-total-strip{
              flex-wrap: wrap;
              row-gap: 8px;
            }
          }
          @media (max-width: 420px){
            .cart-card-shell{
              padding: 16px 12px 18px;
              gap: 14px;
              min-height: 252px;
            }
            .cart-card-top{ gap: 12px; }
            .cart-card-view-btn{
              padding: 10px 14px;
              font-size: 0.84rem;
              max-width: 100%;
            }
            .cart-card-icon{ width: 44px; height: 44px; border-radius: 14px; }
            .cart-card-icon svg{ width: 19px; height: 19px; }
            .cart-collapsed-title{ font-size: 1rem; }
            .cart-card-total-num{ font-size: 1rem; }
            .action-btn{ width: 38px; height: 38px; border-radius: 13px; }
            .shopping-cart-card{ min-height: 252px; border-radius: 18px; }
          }
          .qty-mini {
            background: var(--white);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 6px 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--secondary);
          }
          .qty-mini:disabled { opacity: 0.55; cursor: not-allowed; }
          .cart-notes-section {
            margin-bottom: 14px;
            padding-bottom: 14px;
            border-bottom: 1px solid var(--border, #e8e8e8);
          }
          .cart-note-label {
            display: block;
            font-size: 0.82rem;
            font-weight: 800;
            color: var(--text-secondary);
            margin-bottom: 6px;
          }
          .cart-note-input {
            width: 100%;
            padding: 10px 12px;
            border-radius: 12px;
            border: 1px solid var(--border);
            background: var(--surface, #fdfdf9);
            font-size: 0.92rem;
            resize: vertical;
            min-height: 44px;
            font-family: inherit;
            line-height: 1.45;
          }
          .cart-note-input:focus {
            outline: none;
            border-color: var(--primary, #f5c000);
            box-shadow: 0 0 0 2px rgba(245, 192, 0, 0.25);
          }
          .cart-note-input:disabled { opacity: 0.65; cursor: wait; }
          .cart-note-input-sm { min-height: 40px; font-size: 0.88rem; }
          .cart-line-block {
            border-bottom: 1px solid #f0f0f0;
            margin-bottom: 4px;
          }
          .cart-line-block:last-of-type { border-bottom: none; margin-bottom: 0; }
          .cart-item-note-wrap {
            padding: 0 0 12px 0;
            margin-inline-start: 0;
          }
          @media (min-width: 560px) {
            .cart-item-note-wrap { margin-inline-start: 68px; }
          }
          .cart-item-thumb {
            width: 56px;
            height: 56px;
            border-radius: 14px;
            overflow: hidden;
            flex-shrink: 0;
            background: var(--primary-light);
            border: 1px solid rgba(245,192,0,0.25);
          }
          .cart-item-thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .cart-item-thumb-placeholder {
            width: 100%;
            height: 100%;
            background: var(--grey-light, #f0f0f0);
          }
          @media (max-width: 420px) {
            .cart-item-row {
              grid-template-columns: 48px minmax(0, 1fr) !important;
            }
            .cart-item-actions {
              grid-column: 1 / -1;
              justify-content: flex-start !important;
              margin-top: 6px;
            }
            .cart-item-thumb { width: 48px; height: 48px; border-radius: 12px; }
          }
        `}})]})})};export{ht as default};
