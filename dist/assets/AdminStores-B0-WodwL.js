import{a as Q,r,q as G,av as J,j as e,aw as K,ax as O,ay as U}from"./index-C-uy7Y56.js";import{M as V}from"./MainLayout-OjiTTNwV.js";import{a as X}from"./adminPanelCss-D-Z9XX1t.js";function Y(i){if(!i)return"—";try{const n=new Date(i);return Number.isNaN(n.getTime())?String(i):n.toLocaleString("ar",{dateStyle:"medium",timeStyle:"short"})}catch{return String(i)}}function D(i){if(!i)return null;const n=new Date(i);if(Number.isNaN(n.getTime()))return null;const d=new Date,p=n.getTime()-d.getTime(),c=Math.ceil(p/(24*60*60*1e3));return c>0?`متبقي ${c} يوم`:c===0?"ينتهي اليوم":`منتهي منذ ${Math.abs(c)} يوم`}function ae(){var T;const{showAlert:i,showConfirm:n}=Q(),[d,p]=r.useState(""),[c,k]=r.useState(""),[l,f]=r.useState(null),[b,C]=r.useState([]),[I,A]=r.useState(!0),[j,g]=r.useState([]),[$,y]=r.useState({total_all_stores:0,total_filtered:0}),[w,B]=r.useState(!1),[_,m]=r.useState(null),[L,M]=r.useState({});r.useEffect(()=>{let t=!1;return(async()=>{A(!0);try{const a=await G();t||C(Array.isArray(a)?a:[])}catch{t||C([])}finally{t||A(!1)}})(),()=>{t=!0}},[]);const u=r.useCallback(async()=>{var t,a;B(!0);try{const s=await J(d,l);s&&Array.isArray(s.results)?(g(s.results),y({total_all_stores:((t=s.meta)==null?void 0:t.total_all_stores)??s.results.length,total_filtered:((a=s.meta)==null?void 0:a.total_filtered)??s.results.length})):Array.isArray(s)?(g(s),y({total_all_stores:s.length,total_filtered:s.length})):(g([]),y({total_all_stores:0,total_filtered:0}))}catch(s){console.error(s),g([]),y({total_all_stores:0,total_filtered:0}),await i("تعذر تحميل قائمة المتاجر. تأكد أنك مدير أساسي.","خطأ")}finally{B(!1)}},[d,l,i]);r.useEffect(()=>{u()},[u]);const z=t=>{t.preventDefault(),p(c.trim())},E=async t=>{const a=!t.is_suspended_by_admin;if(await n(`هل تريد تأكيد: ${a?"تعليق المتجر على الخريطة والعامة":"إلغاء التعليق وإتاحة الظهور ضمن شروط الاشتراك"}؟`,"تأكيد الإجراء")){m(t.id);try{await U(t.id,a),await i(a?"تم تعليق المتجر.":"تم إلغاء التعليق.","تم"),u()}catch(x){console.error(x),await i("تعذر تحديث حالة المتجر.","خطأ")}finally{m(null)}}},P=async t=>{if(await n(`تأكيد تجديد اشتراك متجر «${t.store_name}» لمدة 30 يوم؟`,"تأكيد التجديد")){m(t.id);try{await O(t.id,30),await i("تم تجديد الاشتراك بنجاح لمدة 30 يوم.","تم"),await u()}catch(s){console.error(s),await i("تعذر تجديد الاشتراك لهذا المتجر.","خطأ")}finally{m(null)}}},F=t=>{const a=L[t.id];return Array.isArray(a)?a:Array.isArray(t.categories)&&t.categories.length>0?t.categories:t.category_id!=null?[t.category_id]:[]},R=(t,a)=>{const s=Number(a);!Number.isFinite(s)||s<=0||M(o=>{const x=Array.isArray(o[t])?o[t]:[],W=x.includes(s)?x.filter(q=>q!==s):[...x,s];return{...o,[t]:W}})},H=async t=>{const a=F(t);m(t.id);try{await K(t.id,a),await i("تم تحديث أقسام المتجر بنجاح.","تم"),await u()}catch(s){console.error(s),await i("تعذر تحديث أقسام المتجر.","خطأ")}finally{m(null)}},N=$.total_all_stores??0,h=$.total_filtered??j.length,v=!!d||l!=null,S=[d?`بحث «${d}»`:null,l!=null?`قسم: ${((T=b.find(t=>t.id===l))==null?void 0:T.name)||l}`:null].filter(Boolean).join(" — ");return e.jsx(V,{children:e.jsxs("div",{className:"admin-dash admin-stores-page",children:[e.jsxs("div",{className:"admin-stores-heading-row",children:[e.jsxs("div",{children:[e.jsx("h1",{style:{margin:"0 0 6px"},children:"المتاجر المشتركة"}),e.jsxs("p",{className:"admin-intro",style:{margin:0},children:["عمود ",e.jsx("strong",{children:"القسم"})," لكل متجر، والعدد المرفوع يطابق دائماً فلترة القسم والبحث معاً (ومع «الكل» بدون بحث يظهر إجمالي المتاجر المسجّلة)."]})]}),e.jsxs("div",{className:"admin-stores-total-pill",title:v?`${h} متجراً مطابقاً للفلترة${S?` (${S})`:""} — إجمالي النظام ${N}`:`إجمالي المتاجر المسجّلة: ${h}`,children:[e.jsx("span",{className:"admin-stores-total-num",children:h}),e.jsx("span",{className:"admin-stores-total-label",children:"متجر ضمن الفلتر"}),v&&N!==h?e.jsxs("span",{className:"admin-stores-total-sub",children:["من أصل ",N," في النظام"]}):null]})]}),e.jsx("p",{className:"admin-stores-filter-hint muted",style:{marginBottom:"1rem"},children:v?e.jsxs(e.Fragment,{children:["الفلتر النشط: ",S||"—"," — العداد أعلاه = ",e.jsx("strong",{children:h})," متجراً."]}):e.jsxs(e.Fragment,{children:["لا يوجد فلتر نشط — يُعرض كل المتاجر المسجّلة (",e.jsx("strong",{children:h}),")."]})}),e.jsxs("section",{className:"card admin-section",children:[e.jsxs("div",{className:"map-filters admin-store-filters",style:{marginBottom:"1rem",padding:"12px 14px"},children:[e.jsx("div",{style:{fontWeight:800,marginBottom:8,color:"var(--secondary)"},children:"فلترة حسب القسم"}),e.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.88rem",color:"var(--text-secondary)"},children:"نفس منطق الخريطة: اختر قسماً أو «الكل»، ويُطبَّق مع حقل البحث معاً."}),I?e.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"جاري تحميل الأقسام…"}):e.jsxs("div",{className:"category-chips",children:[e.jsx("button",{type:"button",className:`chip ${l==null?"chip-active":""}`,onClick:()=>f(null),children:"الكل"}),b.map(t=>e.jsx("button",{type:"button",className:`chip ${l===t.id?"chip-active":""}`,onClick:()=>f(t.id),children:t.name},t.id))]})]}),e.jsx("form",{className:"admin-account-form",onSubmit:z,style:{marginBottom:"1rem"},children:e.jsxs("div",{className:"form-row-grid",style:{alignItems:"flex-end"},children:[e.jsxs("label",{style:{flex:1},children:["بحث (يُركَّب مع القسم)",e.jsx("input",{type:"search",value:c,onChange:t=>k(t.target.value),placeholder:"اسم المتجر، المستخدم، الجوال، العنوان التفصيلي…",autoComplete:"off"})]}),e.jsx("button",{type:"submit",className:"btn-ok",children:"تنفيذ البحث"}),e.jsx("button",{type:"button",className:"btn-toggle",onClick:()=>{k(""),p(""),f(null)},children:"مسح الكل"})]})}),w?e.jsx("p",{children:"جاري التحميل…"}):e.jsxs("div",{className:"admin-table-wrap",children:[e.jsxs("table",{className:"admin-accounts-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"المتجر"}),e.jsx("th",{children:"التقييم"}),e.jsx("th",{children:"القسم"}),e.jsx("th",{children:"العنوان التفصيلي"}),e.jsx("th",{children:"صاحب المتجر"}),e.jsx("th",{children:"التواصل"}),e.jsx("th",{children:"الإحداثيات والخريطة"}),e.jsx("th",{children:"ينتهي الاشتراك"}),e.jsx("th",{children:"للعامة"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:j.map(t=>{var a;return e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("strong",{children:t.store_name}),e.jsxs("span",{className:"muted small",style:{display:"block"},children:["#",t.id]})]}),e.jsx("td",{children:t.rating_count>0&&t.rating_average!=null?e.jsxs(e.Fragment,{children:[e.jsx("strong",{dir:"ltr",children:Number(t.rating_average).toFixed(1)}),e.jsxs("span",{className:"muted small",style:{display:"block"},children:[t.rating_count," تقييم"]})]}):e.jsx("span",{className:"muted small",children:"— بدون تقييم"})}),e.jsx("td",{children:e.jsxs("div",{className:"admin-store-category-picker",children:[e.jsx("div",{className:"admin-store-category-list",children:b.map(s=>{const o=F(t).includes(s.id);return e.jsxs("label",{className:`admin-store-cat-item ${o?"is-selected":""}`,children:[e.jsx("input",{type:"checkbox",checked:o,onChange:()=>R(t.id,s.id)}),e.jsx("span",{children:s.name})]},`${t.id}-${s.id}`)})}),e.jsx("button",{type:"button",className:"btn-toggle",disabled:_===t.id,onClick:()=>H(t),style:{marginTop:8},children:"حفظ الأقسام"})]})}),e.jsx("td",{style:{maxWidth:"280px",lineHeight:1.5},children:(a=t.location_address)!=null&&a.trim()?e.jsx("span",{children:t.location_address.trim()}):e.jsx("span",{className:"muted small",children:"— لم يُدخل عنوان نصي"})}),e.jsx("td",{children:t.merchant_username||"—"}),e.jsx("td",{style:{maxWidth:"220px"},children:e.jsxs("div",{className:"admin-store-contact-cell",children:[e.jsxs("div",{dir:"ltr",className:"admin-store-contact-line",children:["📞 ",t.merchant_phone||"غير متوفر"]}),e.jsxs("div",{dir:"ltr",className:"admin-store-contact-line",children:["✉️ ",t.merchant_email||"غير متوفر"]})]})}),e.jsx("td",{children:t.latitude!=null&&t.longitude!=null?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"muted small",dir:"ltr",style:{display:"block"},children:[Number(t.latitude).toFixed(5),", ",Number(t.longitude).toFixed(5)]}),t.map_preview_url?e.jsx("a",{href:t.map_preview_url,target:"_blank",rel:"noreferrer",children:"فتح على الخريطة"}):null]}):e.jsx("span",{className:"muted small",children:"لم يُحدد"})}),e.jsxs("td",{children:[Y(t.subscription_end_date),D(t.subscription_end_date)?e.jsx("span",{className:"muted small",style:{display:"block"},children:D(t.subscription_end_date)}):null,e.jsx("span",{className:"muted small",style:{display:"block"},children:t.subscription_is_active?"علم نشط":"علم غير نشط"}),t.is_suspended_by_admin?e.jsx("span",{className:"tier-badge tier-secondary",style:{marginTop:"0.25rem"},children:"معلّق إدارياً"}):null]}),e.jsx("td",{children:t.is_publicly_visible?e.jsx("span",{className:"tier-badge tier-primary",children:"يظهر"}):e.jsx("span",{className:"tier-badge tier-secondary",children:"مخفي"})}),e.jsxs("td",{children:[e.jsx("button",{type:"button",className:"btn-ok",disabled:_===t.id,onClick:()=>P(t),style:{marginBottom:8},children:"تجديد 30 يوم"}),e.jsx("br",{}),e.jsx("button",{type:"button",className:"btn-toggle",disabled:_===t.id,onClick:()=>E(t),children:t.is_suspended_by_admin?"رفع التعليق":"تعليق المتجر"})]})]},t.id)})})]}),!w&&j.length===0?e.jsx("p",{className:"muted",children:"لا توجد نتائج."}):null]})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:X}}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})})}export{ae as default};
