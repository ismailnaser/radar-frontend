import{a as q,r,p as Q,at as G,j as e,au as J,av as K}from"./index-DwdOFtKv.js";import{M as O}from"./MainLayout-LB5HW8Va.js";import{a as U}from"./adminPanelCss-D-Z9XX1t.js";function V(i){if(!i)return"—";try{const l=new Date(i);return Number.isNaN(l.getTime())?String(i):l.toLocaleString("ar",{dateStyle:"medium",timeStyle:"short"})}catch{return String(i)}}function I(i){if(!i)return null;const l=new Date(i);if(Number.isNaN(l.getTime()))return null;const d=new Date,u=l.getTime()-d.getTime(),c=Math.ceil(u/(24*60*60*1e3));return c>0?`متبقي ${c} يوم`:c===0?"ينتهي اليوم":`منتهي منذ ${Math.abs(c)} يوم`}function te(){var D;const{showAlert:i,showConfirm:l}=q(),[d,u]=r.useState(""),[c,S]=r.useState(""),[n,f]=r.useState(null),[j,k]=r.useState([]),[L,C]=r.useState(!0),[b,x]=r.useState([]),[A,p]=r.useState({total_all_stores:0,total_filtered:0}),[$,F]=r.useState(!1),[B,g]=r.useState(null),[M,z]=r.useState({});r.useEffect(()=>{let t=!1;return(async()=>{C(!0);try{const a=await Q();t||k(Array.isArray(a)?a:[])}catch{t||k([])}finally{t||C(!1)}})(),()=>{t=!0}},[]);const y=r.useCallback(async()=>{var t,a;F(!0);try{const s=await G(d,n);s&&Array.isArray(s.results)?(x(s.results),p({total_all_stores:((t=s.meta)==null?void 0:t.total_all_stores)??s.results.length,total_filtered:((a=s.meta)==null?void 0:a.total_filtered)??s.results.length})):Array.isArray(s)?(x(s),p({total_all_stores:s.length,total_filtered:s.length})):(x([]),p({total_all_stores:0,total_filtered:0}))}catch(s){console.error(s),x([]),p({total_all_stores:0,total_filtered:0}),await i("تعذر تحميل قائمة المتاجر. تأكد أنك مدير أساسي.","خطأ")}finally{F(!1)}},[d,n,i]);r.useEffect(()=>{y()},[y]);const w=t=>{t.preventDefault(),u(c.trim())},E=async t=>{const a=!t.is_suspended_by_admin;if(await l(`هل تريد تأكيد: ${a?"تعليق المتجر على الخريطة والعامة":"إلغاء التعليق وإتاحة الظهور ضمن شروط الاشتراك"}؟`,"تأكيد الإجراء")){g(t.id);try{await K(t.id,a),await i(a?"تم تعليق المتجر.":"تم إلغاء التعليق.","تم"),y()}catch(h){console.error(h),await i("تعذر تحديث حالة المتجر.","خطأ")}finally{g(null)}}},T=t=>{const a=M[t.id];return Array.isArray(a)?a:Array.isArray(t.categories)&&t.categories.length>0?t.categories:t.category_id!=null?[t.category_id]:[]},P=(t,a)=>{const s=Number(a);!Number.isFinite(s)||s<=0||z(o=>{const h=Array.isArray(o[t])?o[t]:[],H=h.includes(s)?h.filter(W=>W!==s):[...h,s];return{...o,[t]:H}})},R=async t=>{const a=T(t);g(t.id);try{await J(t.id,a),await i("تم تحديث أقسام المتجر بنجاح.","تم"),await y()}catch(s){console.error(s),await i("تعذر تحديث أقسام المتجر.","خطأ")}finally{g(null)}},_=A.total_all_stores??0,m=A.total_filtered??b.length,N=!!d||n!=null,v=[d?`بحث «${d}»`:null,n!=null?`قسم: ${((D=j.find(t=>t.id===n))==null?void 0:D.name)||n}`:null].filter(Boolean).join(" — ");return e.jsx(O,{children:e.jsxs("div",{className:"admin-dash admin-stores-page",children:[e.jsxs("div",{className:"admin-stores-heading-row",children:[e.jsxs("div",{children:[e.jsx("h1",{style:{margin:"0 0 6px"},children:"المتاجر المشتركة"}),e.jsxs("p",{className:"admin-intro",style:{margin:0},children:["عمود ",e.jsx("strong",{children:"القسم"})," لكل متجر، والعدد المرفوع يطابق دائماً فلترة القسم والبحث معاً (ومع «الكل» بدون بحث يظهر إجمالي المتاجر المسجّلة)."]})]}),e.jsxs("div",{className:"admin-stores-total-pill",title:N?`${m} متجراً مطابقاً للفلترة${v?` (${v})`:""} — إجمالي النظام ${_}`:`إجمالي المتاجر المسجّلة: ${m}`,children:[e.jsx("span",{className:"admin-stores-total-num",children:m}),e.jsx("span",{className:"admin-stores-total-label",children:"متجر ضمن الفلتر"}),N&&_!==m?e.jsxs("span",{className:"admin-stores-total-sub",children:["من أصل ",_," في النظام"]}):null]})]}),e.jsx("p",{className:"admin-stores-filter-hint muted",style:{marginBottom:"1rem"},children:N?e.jsxs(e.Fragment,{children:["الفلتر النشط: ",v||"—"," — العداد أعلاه = ",e.jsx("strong",{children:m})," متجراً."]}):e.jsxs(e.Fragment,{children:["لا يوجد فلتر نشط — يُعرض كل المتاجر المسجّلة (",e.jsx("strong",{children:m}),")."]})}),e.jsxs("section",{className:"card admin-section",children:[e.jsxs("div",{className:"map-filters admin-store-filters",style:{marginBottom:"1rem",padding:"12px 14px"},children:[e.jsx("div",{style:{fontWeight:800,marginBottom:8,color:"var(--secondary)"},children:"فلترة حسب القسم"}),e.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)"},children:"نفس منطق الخريطة: اختر قسماً أو «الكل»، ويُطبَّق مع حقل البحث معاً."}),L?e.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"جاري تحميل الأقسام…"}):e.jsxs("div",{className:"category-chips",children:[e.jsx("button",{type:"button",className:`chip ${n==null?"chip-active":""}`,onClick:()=>f(null),children:"الكل"}),j.map(t=>e.jsx("button",{type:"button",className:`chip ${n===t.id?"chip-active":""}`,onClick:()=>f(t.id),children:t.name},t.id))]})]}),e.jsx("form",{className:"admin-account-form",onSubmit:w,style:{marginBottom:"1rem"},children:e.jsxs("div",{className:"form-row-grid",style:{alignItems:"flex-end"},children:[e.jsxs("label",{style:{flex:1},children:["بحث (يُركَّب مع القسم)",e.jsx("input",{type:"search",value:c,onChange:t=>S(t.target.value),placeholder:"اسم المتجر، المستخدم، الجوال، العنوان التفصيلي…",autoComplete:"off"})]}),e.jsx("button",{type:"submit",className:"btn-ok",children:"تنفيذ البحث"}),e.jsx("button",{type:"button",className:"btn-toggle",onClick:()=>{S(""),u(""),f(null)},children:"مسح الكل"})]})}),$?e.jsx("p",{children:"جاري التحميل…"}):e.jsxs("div",{className:"admin-table-wrap",children:[e.jsxs("table",{className:"admin-accounts-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"المتجر"}),e.jsx("th",{children:"التقييم"}),e.jsx("th",{children:"القسم"}),e.jsx("th",{children:"العنوان التفصيلي"}),e.jsx("th",{children:"صاحب المتجر"}),e.jsx("th",{children:"التواصل"}),e.jsx("th",{children:"الإحداثيات والخريطة"}),e.jsx("th",{children:"ينتهي الاشتراك"}),e.jsx("th",{children:"للعامة"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:b.map(t=>{var a;return e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("strong",{children:t.store_name}),e.jsxs("span",{className:"muted small",style:{display:"block"},children:["#",t.id]})]}),e.jsx("td",{children:t.rating_count>0&&t.rating_average!=null?e.jsxs(e.Fragment,{children:[e.jsx("strong",{dir:"ltr",children:Number(t.rating_average).toFixed(1)}),e.jsxs("span",{className:"muted small",style:{display:"block"},children:[t.rating_count," تقييم"]})]}):e.jsx("span",{className:"muted small",children:"— بدون تقييم"})}),e.jsx("td",{children:e.jsxs("div",{className:"admin-store-category-picker",children:[e.jsx("div",{className:"admin-store-category-list",children:j.map(s=>{const o=T(t).includes(s.id);return e.jsxs("label",{className:`admin-store-cat-item ${o?"is-selected":""}`,children:[e.jsx("input",{type:"checkbox",checked:o,onChange:()=>P(t.id,s.id)}),e.jsx("span",{children:s.name})]},`${t.id}-${s.id}`)})}),e.jsx("button",{type:"button",className:"btn-toggle",disabled:B===t.id,onClick:()=>R(t),style:{marginTop:8},children:"حفظ الأقسام"})]})}),e.jsx("td",{style:{maxWidth:"280px",lineHeight:1.5},children:(a=t.location_address)!=null&&a.trim()?e.jsx("span",{children:t.location_address.trim()}):e.jsx("span",{className:"muted small",children:"— لم يُدخل عنوان نصي"})}),e.jsx("td",{children:t.merchant_username||"—"}),e.jsx("td",{style:{maxWidth:"220px"},children:e.jsxs("div",{className:"admin-store-contact-cell",children:[e.jsxs("div",{dir:"ltr",className:"admin-store-contact-line",children:["📞 ",t.merchant_phone||"غير متوفر"]}),e.jsxs("div",{dir:"ltr",className:"admin-store-contact-line",children:["✉️ ",t.merchant_email||"غير متوفر"]})]})}),e.jsx("td",{children:t.latitude!=null&&t.longitude!=null?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"muted small",dir:"ltr",style:{display:"block"},children:[Number(t.latitude).toFixed(5),", ",Number(t.longitude).toFixed(5)]}),t.map_preview_url?e.jsx("a",{href:t.map_preview_url,target:"_blank",rel:"noreferrer",children:"فتح على الخريطة"}):null]}):e.jsx("span",{className:"muted small",children:"لم يُحدد"})}),e.jsxs("td",{children:[V(t.subscription_end_date),I(t.subscription_end_date)?e.jsx("span",{className:"muted small",style:{display:"block"},children:I(t.subscription_end_date)}):null,e.jsx("span",{className:"muted small",style:{display:"block"},children:t.subscription_is_active?"علم نشط":"علم غير نشط"}),t.is_suspended_by_admin?e.jsx("span",{className:"tier-badge tier-secondary",style:{marginTop:"0.25rem"},children:"معلّق إدارياً"}):null]}),e.jsx("td",{children:t.is_publicly_visible?e.jsx("span",{className:"tier-badge tier-primary",children:"يظهر"}):e.jsx("span",{className:"tier-badge tier-secondary",children:"مخفي"})}),e.jsx("td",{children:e.jsx("button",{type:"button",className:"btn-toggle",disabled:B===t.id,onClick:()=>E(t),children:t.is_suspended_by_admin?"رفع التعليق":"تعليق المتجر"})})]},t.id)})})]}),!$&&b.length===0?e.jsx("p",{className:"muted",children:"لا توجد نتائج."}):null]})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:U}}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .admin-stores-heading-row {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 8px;
          }
          .admin-stores-total-pill {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-width: 100px;
            padding: 12px 18px;
            border-radius: 16px;
            background: linear-gradient(145deg, #fde8e8 0%, #fff5f5 100%);
            border: 2px solid #e74c3c;
            box-shadow: 0 4px 14px rgba(231, 76, 60, 0.15);
            text-align: center;
          }
          .admin-stores-total-num {
            font-size: 1.75rem;
            font-weight: 900;
            color: #c0392b;
            line-height: 1.1;
          }
          .admin-stores-total-label {
            font-size: 0.78rem;
            font-weight: 700;
            color: #922b21;
            margin-top: 4px;
          }
          .admin-stores-total-sub {
            font-size: 0.72rem;
            font-weight: 600;
            color: #7b241c;
            margin-top: 6px;
            opacity: 0.9;
          }
          .admin-store-category-cell {
            font-weight: 700;
            color: var(--secondary);
            line-height: 1.4;
          }
          .admin-store-filters .category-chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            max-height: 140px;
            overflow-y: auto;
          }
          .admin-store-filters .chip {
            border: 1.5px solid var(--border);
            background: var(--white);
            color: var(--secondary);
            padding: 6px 12px;
            border-radius: 999px;
            font-weight: 700;
            font-size: 0.85rem;
            cursor: pointer;
            transition: background 0.15s ease, border-color 0.15s ease;
            font-family: inherit;
          }
          .admin-store-filters .chip:hover {
            background: var(--primary-light);
            border-color: var(--primary);
          }
          .admin-store-filters .chip-active {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            border-color: transparent;
            box-shadow: var(--shadow-gold);
          }
          .admin-store-category-picker {
            min-width: 190px;
          }
          .admin-store-contact-cell {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .admin-store-contact-line {
            font-size: 0.83rem;
            font-weight: 700;
            color: var(--text-secondary);
            word-break: break-all;
          }
          .admin-store-category-list {
            max-height: 132px;
            overflow-y: auto;
            padding: 6px;
            border: 1px solid var(--border);
            border-radius: 10px;
            background: #fff;
            display: flex;
            flex-direction: column;
            gap: 6px;
          }
          .admin-store-cat-item {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 0.82rem;
            font-weight: 700;
          }
          .admin-store-cat-item input {
            width: 14px;
            height: 14px;
          }
          .admin-store-cat-item.is-selected span {
            color: var(--secondary);
          }
        `}})]})})}export{te as default};
