import{a as T,r as s,aD as E,aE as L,aF as k,aG as S,j as a}from"./index-triUy4pT.js";import{M as $}from"./MainLayout-CULM5rEt.js";import{T as z}from"./trash-2-CXED3W_K.js";function F(t){if(!t)return"—";try{const i=new Date(t);return Number.isNaN(i.getTime())?String(t):i.toLocaleString("ar",{dateStyle:"medium",timeStyle:"short"})}catch{return String(t)}}function I(){const{showAlert:t,showConfirm:i}=T(),[o,h]=s.useState(!1),[d,A]=s.useState(""),[y,b]=s.useState([]),[n,f]=s.useState({total_count:0,total_paid_ils:"0.00",total_all_ils:"0.00"}),[c,j]=s.useState(""),[p,_]=s.useState(""),[u,v]=s.useState(""),[m,w]=s.useState("paid"),[x,N]=s.useState(""),l=s.useCallback(async()=>{h(!0);try{const e=await E({status:d});b(Array.isArray(e==null?void 0:e.results)?e.results:[]),f((e==null?void 0:e.meta)||{total_count:0,total_paid_ils:"0.00",total_all_ils:"0.00"})}catch(e){console.error(e),b([]),f({total_count:0,total_paid_ils:"0.00",total_all_ils:"0.00"}),await t("تعذر تحميل المدفوعات.","خطأ")}finally{h(!1)}},[d,t]);s.useEffect(()=>{l()},[l]);const C=s.useMemo(()=>`المدفوع: ${n.total_paid_ils??"0.00"} ₪ — الإجمالي (مدفوع + قيد الدفع): ${n.total_all_ils??"0.00"} ₪`,[n]),P=s.useCallback(async()=>{const e=Number(String(p).replace(",","."));if(!Number.isFinite(e)){await t("يرجى إدخال مبلغ صحيح.","تنبيه");return}try{await L({title:String(c||"").trim(),amount_ils:e,status:m,due_date:u||null,notes:String(x||"").trim()}),j(""),_(""),v(""),w("paid"),N(""),await t("تمت إضافة الدفعة.","تم"),await l()}catch(r){console.error(r),await t("تعذر إضافة الدفعة.","خطأ")}},[p,u,l,m,x,t,c]),D=s.useCallback(async e=>{const r=e.status==="paid"?"planned":"paid";try{await k(e.id,{status:r}),await l()}catch(g){console.error(g),await t("تعذر تحديث الحالة.","خطأ")}},[l,k,t]),M=s.useCallback(async e=>{if(await(i==null?void 0:i(`هل تريد حذف هذه الدفعة (${e.amount_ils} ₪)؟`,"تأكيد الحذف")))try{await S(e.id),await t("تم حذف الدفعة.","تم"),await l()}catch(g){console.error(g),await t("تعذر حذف الدفعة.","خطأ")}},[S,l,t,i]);return a.jsx($,{children:a.jsxs("div",{className:"admin-dash admin-payments-page",children:[a.jsx("h1",{style:{marginTop:0},children:"المدفوعات"}),a.jsx("p",{className:"admin-intro",children:"تسجيل ما تم دفعه للتطبيق وما هو قيد الدفع، مع إجمالي واضح للمبالغ."}),a.jsxs("section",{className:"card admin-section",children:[a.jsx("div",{className:"admin-section-head",style:{alignItems:"flex-start"},children:a.jsxs("div",{children:[a.jsx("h2",{style:{margin:0},children:"المدفوعات"}),a.jsxs("p",{className:"muted small",style:{margin:"6px 0 0"},children:[a.jsx("strong",{dir:"ltr",children:n.total_count??0})," عناصر — ",a.jsx("span",{dir:"ltr",children:C})]})]})}),a.jsxs("div",{className:"pay-filters",children:[a.jsxs("label",{children:["الحالة",a.jsxs("select",{value:d,onChange:e=>A(e.target.value),children:[a.jsx("option",{value:"",children:"الكل"}),a.jsx("option",{value:"paid",children:"مدفوع"}),a.jsx("option",{value:"planned",children:"قيد الدفع"})]})]}),a.jsx("button",{type:"button",className:"btn-ok",onClick:l,disabled:o,children:"تحديث"})]}),a.jsxs("div",{className:"pay-create",children:[a.jsxs("label",{children:["العنوان (اختياري)",a.jsx("input",{value:c,onChange:e=>j(e.target.value),placeholder:"مثال: استضافة / دومين / صيانة..."})]}),a.jsxs("label",{children:["المبلغ (₪)",a.jsx("input",{value:p,onChange:e=>_(e.target.value),inputMode:"decimal",placeholder:"مثال: 50"})]}),a.jsxs("label",{children:["الحالة",a.jsxs("select",{value:m,onChange:e=>w(e.target.value),children:[a.jsx("option",{value:"paid",children:"مدفوع"}),a.jsx("option",{value:"planned",children:"قيد الدفع"})]})]}),a.jsxs("label",{children:["تاريخ الاستحقاق (اختياري)",a.jsx("input",{type:"date",value:u,onChange:e=>v(e.target.value)})]}),a.jsxs("label",{className:"pay-notes",children:["ملاحظات (اختياري)",a.jsx("input",{value:x,onChange:e=>N(e.target.value),placeholder:"أي تفاصيل إضافية..."})]}),a.jsx("button",{type:"button",className:"btn-ok",onClick:P,disabled:o,children:"إضافة"})]}),o?a.jsx("p",{children:"جاري التحميل…"}):y.length===0?a.jsx("p",{className:"muted",children:"لا توجد عناصر."}):a.jsx("div",{className:"pay-cards",children:y.map(e=>a.jsxs("article",{className:"pay-card",children:[a.jsxs("div",{className:"pay-card__top",children:[a.jsxs("div",{className:"pay-card__title",children:[a.jsx("div",{style:{fontWeight:950,color:"var(--secondary)"},children:e.title||"دفعة"}),a.jsx("div",{className:"muted small",children:F(e.created_at)}),e.due_date?a.jsxs("div",{className:"muted small",children:["استحقاق: ",e.due_date]}):null]}),a.jsxs("div",{className:"pay-card__amount",dir:"ltr",children:[e.amount_ils," ₪"]})]}),e.notes?a.jsx("div",{className:"pay-card__notes",children:e.notes}):null,a.jsxs("div",{className:"pay-card__actions",children:[a.jsx("button",{type:"button",className:`pay-pill${e.status==="paid"?" pay-pill--paid":" pay-pill--planned"}`,onClick:()=>D(e),title:"تغيير الحالة",children:e.status_label||e.status}),a.jsxs("button",{type:"button",className:"pay-del",onClick:()=>M(e),title:"حذف",children:[a.jsx(z,{size:16,strokeWidth:2.25,"aria-hidden":!0})," حذف"]})]})]},e.id))}),a.jsx("style",{children:`
            .pay-filters{
              display:flex;
              flex-wrap: wrap;
              gap: 10px;
              align-items: end;
              margin-bottom: 12px;
            }
            .pay-filters label{
              display:flex;
              flex-direction: column;
              gap: 6px;
              font-weight: 900;
              color: var(--secondary);
              font-size: 0.9rem;
              min-width: 220px;
            }
            .pay-filters select,
            .pay-create input,
            .pay-create select{
              padding: 10px 12px;
              border-radius: 12px;
              border: 1.5px solid var(--border);
              background: var(--white);
              font-family: inherit;
            }
            .pay-create{
              display:grid;
              grid-template-columns: repeat(5, minmax(0, 1fr));
              gap: 10px;
              align-items: end;
              margin-bottom: 14px;
            }
            .pay-create label{
              display:flex;
              flex-direction: column;
              gap: 6px;
              font-weight: 900;
              color: var(--secondary);
              font-size: 0.9rem;
              min-width: 0;
            }
            .pay-notes{ grid-column: span 2; }
            @media (max-width: 980px){
              .pay-create{ grid-template-columns: 1fr 1fr; }
              .pay-notes{ grid-column: auto; }
            }
            .pay-cards{
              display:grid;
              grid-template-columns: 1fr;
              gap: 12px;
            }
            .pay-card{
              border-radius: 18px;
              border: 1px solid rgba(232, 230, 224, 0.95);
              background: rgba(255,255,255,0.92);
              box-shadow: 0 14px 34px rgba(26, 29, 38, 0.06);
              padding: 14px 14px;
            }
            .pay-card__top{
              display:flex;
              justify-content: space-between;
              gap: 10px;
              align-items: flex-start;
              margin-bottom: 10px;
            }
            .pay-card__amount{
              flex-shrink: 0;
              font-weight: 950;
              color: var(--secondary);
              background: linear-gradient(135deg, rgba(245, 192, 0, 0.18) 0%, rgba(255,255,255,0.92) 100%);
              border: 1px solid rgba(245, 192, 0, 0.35);
              padding: 6px 10px;
              border-radius: 999px;
              white-space: nowrap;
            }
            .pay-card__notes{
              color: var(--text-secondary);
              font-weight: 800;
              line-height: 1.6;
              padding-top: 10px;
              border-top: 1px dashed rgba(232, 230, 224, 0.95);
              margin-top: 6px;
            }
            .pay-card__actions{
              display:flex;
              justify-content: flex-end;
              gap: 10px;
              margin-top: 12px;
              flex-wrap: wrap;
            }
            .pay-pill{
              display:inline-flex;
              align-items:center;
              justify-content:center;
              padding: 8px 12px;
              border-radius: 999px;
              border: 1px solid rgba(232, 230, 224, 0.95);
              background: rgba(255,255,255,0.92);
              font-weight: 950;
              cursor: pointer;
              font-family: inherit;
            }
            .pay-pill--paid{
              border-color: rgba(37, 211, 102, 0.35);
              background: linear-gradient(135deg, rgba(37, 211, 102, 0.14) 0%, rgba(255,255,255,0.92) 100%);
              color: #0b6b2f;
            }
            .pay-pill--planned{
              border-color: rgba(2, 119, 189, 0.28);
              background: linear-gradient(135deg, rgba(2, 119, 189, 0.12) 0%, rgba(255,255,255,0.92) 100%);
              color: #064d79;
            }
            .pay-del{
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
              padding: 8px 10px;
              border-radius: 12px;
              border: 1.5px solid rgba(229, 115, 115, 0.35);
              background: rgba(255, 241, 241, 0.92);
              color: #c62828;
              cursor: pointer;
              font-weight: 900;
              font-family: inherit;
            }
          `})]})]})})}export{I as default};
