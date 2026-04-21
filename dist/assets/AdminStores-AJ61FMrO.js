import{a as T,r as n,p as B,at as z,j as e,au as E}from"./index-C8fPbxkd.js";import{M as H}from"./MainLayout-B9xJmvNM.js";import{a as P}from"./adminPanelCss-D-Z9XX1t.js";function R(a){if(!a)return"—";try{const i=new Date(a);return Number.isNaN(i.getTime())?String(a):i.toLocaleString("ar",{dateStyle:"medium",timeStyle:"short"})}catch{return String(a)}}function F(a){if(!a)return null;const i=new Date(a);if(Number.isNaN(i.getTime()))return null;const d=new Date,m=i.getTime()-d.getTime(),o=Math.ceil(m/(24*60*60*1e3));return o>0?`متبقي ${o} يوم`:o===0?"ينتهي اليوم":`منتهي منذ ${Math.abs(o)} يوم`}function J(){var $;const{showAlert:a,showConfirm:i}=T(),[d,m]=n.useState(""),[o,b]=n.useState(""),[r,x]=n.useState(null),[_,N]=n.useState([]),[I,v]=n.useState(!0),[p,h]=n.useState([]),[S,u]=n.useState({total_all_stores:0,total_filtered:0}),[k,A]=n.useState(!1),[w,C]=n.useState(null);n.useEffect(()=>{let t=!1;return(async()=>{v(!0);try{const l=await B();t||N(Array.isArray(l)?l:[])}catch{t||N([])}finally{t||v(!1)}})(),()=>{t=!0}},[]);const g=n.useCallback(async()=>{var t,l;A(!0);try{const s=await z(d,r);s&&Array.isArray(s.results)?(h(s.results),u({total_all_stores:((t=s.meta)==null?void 0:t.total_all_stores)??s.results.length,total_filtered:((l=s.meta)==null?void 0:l.total_filtered)??s.results.length})):Array.isArray(s)?(h(s),u({total_all_stores:s.length,total_filtered:s.length})):(h([]),u({total_all_stores:0,total_filtered:0}))}catch(s){console.error(s),h([]),u({total_all_stores:0,total_filtered:0}),await a("تعذر تحميل قائمة المتاجر. تأكد أنك مدير أساسي.","خطأ")}finally{A(!1)}},[d,r,a]);n.useEffect(()=>{g()},[g]);const D=t=>{t.preventDefault(),m(o.trim())},L=async t=>{const l=!t.is_suspended_by_admin;if(await i(`هل تريد تأكيد: ${l?"تعليق المتجر على الخريطة والعامة":"إلغاء التعليق وإتاحة الظهور ضمن شروط الاشتراك"}؟`,"تأكيد الإجراء")){C(t.id);try{await E(t.id,l),await a(l?"تم تعليق المتجر.":"تم إلغاء التعليق.","تم"),g()}catch(M){console.error(M),await a("تعذر تحديث حالة المتجر.","خطأ")}finally{C(null)}}},y=S.total_all_stores??0,c=S.total_filtered??p.length,f=!!d||r!=null,j=[d?`بحث «${d}»`:null,r!=null?`قسم: ${(($=_.find(t=>t.id===r))==null?void 0:$.name)||r}`:null].filter(Boolean).join(" — ");return e.jsx(H,{children:e.jsxs("div",{className:"admin-dash admin-stores-page",children:[e.jsxs("div",{className:"admin-stores-heading-row",children:[e.jsxs("div",{children:[e.jsx("h1",{style:{margin:"0 0 6px"},children:"المتاجر المشتركة"}),e.jsxs("p",{className:"admin-intro",style:{margin:0},children:["عمود ",e.jsx("strong",{children:"القسم"})," لكل متجر، والعدد المرفوع يطابق دائماً فلترة القسم والبحث معاً (ومع «الكل» بدون بحث يظهر إجمالي المتاجر المسجّلة)."]})]}),e.jsxs("div",{className:"admin-stores-total-pill",title:f?`${c} متجراً مطابقاً للفلترة${j?` (${j})`:""} — إجمالي النظام ${y}`:`إجمالي المتاجر المسجّلة: ${c}`,children:[e.jsx("span",{className:"admin-stores-total-num",children:c}),e.jsx("span",{className:"admin-stores-total-label",children:"متجر ضمن الفلتر"}),f&&y!==c?e.jsxs("span",{className:"admin-stores-total-sub",children:["من أصل ",y," في النظام"]}):null]})]}),e.jsx("p",{className:"admin-stores-filter-hint muted",style:{marginBottom:"1rem"},children:f?e.jsxs(e.Fragment,{children:["الفلتر النشط: ",j||"—"," — العداد أعلاه = ",e.jsx("strong",{children:c})," متجراً."]}):e.jsxs(e.Fragment,{children:["لا يوجد فلتر نشط — يُعرض كل المتاجر المسجّلة (",e.jsx("strong",{children:c}),")."]})}),e.jsxs("section",{className:"card admin-section",children:[e.jsxs("div",{className:"map-filters admin-store-filters",style:{marginBottom:"1rem",padding:"12px 14px"},children:[e.jsx("div",{style:{fontWeight:800,marginBottom:8,color:"var(--secondary)"},children:"فلترة حسب القسم"}),e.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)"},children:"نفس منطق الخريطة: اختر قسماً أو «الكل»، ويُطبَّق مع حقل البحث معاً."}),I?e.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"جاري تحميل الأقسام…"}):e.jsxs("div",{className:"category-chips",children:[e.jsx("button",{type:"button",className:`chip ${r==null?"chip-active":""}`,onClick:()=>x(null),children:"الكل"}),_.map(t=>e.jsx("button",{type:"button",className:`chip ${r===t.id?"chip-active":""}`,onClick:()=>x(t.id),children:t.name},t.id))]})]}),e.jsx("form",{className:"admin-account-form",onSubmit:D,style:{marginBottom:"1rem"},children:e.jsxs("div",{className:"form-row-grid",style:{alignItems:"flex-end"},children:[e.jsxs("label",{style:{flex:1},children:["بحث (يُركَّب مع القسم)",e.jsx("input",{type:"search",value:o,onChange:t=>b(t.target.value),placeholder:"اسم المتجر، المستخدم، الجوال، العنوان التفصيلي…",autoComplete:"off"})]}),e.jsx("button",{type:"submit",className:"btn-ok",children:"تنفيذ البحث"}),e.jsx("button",{type:"button",className:"btn-toggle",onClick:()=>{b(""),m(""),x(null)},children:"مسح الكل"})]})}),k?e.jsx("p",{children:"جاري التحميل…"}):e.jsxs("div",{className:"admin-table-wrap",children:[e.jsxs("table",{className:"admin-accounts-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"المتجر"}),e.jsx("th",{children:"التقييم"}),e.jsx("th",{children:"القسم"}),e.jsx("th",{children:"العنوان التفصيلي"}),e.jsx("th",{children:"صاحب المتجر"}),e.jsx("th",{children:"الجوال"}),e.jsx("th",{children:"الإحداثيات والخريطة"}),e.jsx("th",{children:"ينتهي الاشتراك"}),e.jsx("th",{children:"للعامة"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:p.map(t=>{var l;return e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("strong",{children:t.store_name}),e.jsxs("span",{className:"muted small",style:{display:"block"},children:["#",t.id]})]}),e.jsx("td",{children:t.rating_count>0&&t.rating_average!=null?e.jsxs(e.Fragment,{children:[e.jsx("strong",{dir:"ltr",children:Number(t.rating_average).toFixed(1)}),e.jsxs("span",{className:"muted small",style:{display:"block"},children:[t.rating_count," تقييم"]})]}):e.jsx("span",{className:"muted small",children:"— بدون تقييم"})}),e.jsx("td",{children:t.category_name?e.jsx("span",{className:"admin-store-category-cell",children:t.category_name}):e.jsx("span",{className:"muted small",children:"— بدون قسم"})}),e.jsx("td",{style:{maxWidth:"280px",lineHeight:1.5},children:(l=t.location_address)!=null&&l.trim()?e.jsx("span",{children:t.location_address.trim()}):e.jsx("span",{className:"muted small",children:"— لم يُدخل عنوان نصي"})}),e.jsx("td",{children:t.merchant_username||"—"}),e.jsx("td",{dir:"ltr",style:{textAlign:"right"},children:t.merchant_phone||"—"}),e.jsx("td",{children:t.latitude!=null&&t.longitude!=null?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"muted small",dir:"ltr",style:{display:"block"},children:[Number(t.latitude).toFixed(5),", ",Number(t.longitude).toFixed(5)]}),t.map_preview_url?e.jsx("a",{href:t.map_preview_url,target:"_blank",rel:"noreferrer",children:"فتح على الخريطة"}):null]}):e.jsx("span",{className:"muted small",children:"لم يُحدد"})}),e.jsxs("td",{children:[R(t.subscription_end_date),F(t.subscription_end_date)?e.jsx("span",{className:"muted small",style:{display:"block"},children:F(t.subscription_end_date)}):null,e.jsx("span",{className:"muted small",style:{display:"block"},children:t.subscription_is_active?"علم نشط":"علم غير نشط"}),t.is_suspended_by_admin?e.jsx("span",{className:"tier-badge tier-secondary",style:{marginTop:"0.25rem"},children:"معلّق إدارياً"}):null]}),e.jsx("td",{children:t.is_publicly_visible?e.jsx("span",{className:"tier-badge tier-primary",children:"يظهر"}):e.jsx("span",{className:"tier-badge tier-secondary",children:"مخفي"})}),e.jsx("td",{children:e.jsx("button",{type:"button",className:"btn-toggle",disabled:w===t.id,onClick:()=>L(t),children:t.is_suspended_by_admin?"رفع التعليق":"تعليق المتجر"})})]},t.id)})})]}),!k&&p.length===0?e.jsx("p",{className:"muted",children:"لا توجد نتائج."}):null]})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:P}}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})}export{J as default};
