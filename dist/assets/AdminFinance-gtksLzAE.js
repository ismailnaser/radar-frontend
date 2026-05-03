import{a as C,r as i,aG as T,aH as k,j as e}from"./index-Cb-e3W_x.js";import{M as z}from"./MainLayout-uiN3L7_W.js";import{T as w}from"./trash-2-w-CdwiWu.js";function N(n){if(!n)return"—";try{const t=new Date(n);return Number.isNaN(t.getTime())?String(n):t.toLocaleString("ar",{dateStyle:"medium",timeStyle:"short"})}catch{return String(n)}}function $(){const{showAlert:n,showConfirm:t}=C(),[s,h]=i.useState(""),[l,m]=i.useState(""),[d,x]=i.useState(""),[o,g]=i.useState(""),[c,f]=i.useState(""),[b,u]=i.useState(!1),[p,_]=i.useState([]),[j,v]=i.useState({total_count:0,total_amount_ils:"0.00"}),r=i.useCallback(async()=>{u(!0);try{const a=await T({q:s,from:d,to:o,method:c,kind:l});_(Array.isArray(a==null?void 0:a.results)?a.results:[]),v((a==null?void 0:a.meta)||{total_count:0,total_amount_ils:"0.00"})}catch(a){console.error(a),_([]),v({total_count:0,total_amount_ils:"0.00"}),await n("تعذر تحميل التحويلات/الأرباح.","خطأ")}finally{u(!1)}},[s,d,o,c,l,n]),y=i.useCallback(async a=>{if(await(t==null?void 0:t(`هل تريد حذف هذه التحويلة (${a.amount_ils} ₪)؟ هذا الإجراء لا يمكن التراجع عنه.`,"تأكيد الحذف")))try{await k(a.id),await n("تم حذف التحويلة.","تم"),await r()}catch(S){console.error(S),await n("تعذر حذف التحويلة.","خطأ")}},[k,r,n,t]);return i.useEffect(()=>{r()},[r]),e.jsx(z,{children:e.jsxs("div",{className:"admin-dash admin-finance-page",children:[e.jsx("h1",{style:{marginTop:0},children:"الأرباح والتحويلات"}),e.jsx("p",{className:"admin-intro",children:"هذه الصفحة للمدير الأساسي: مراجعة التحويلات/الأرباح من الإعلانات الممولة وتجديد الاشتراكات المقبولة."}),e.jsxs("section",{className:"card admin-section",children:[e.jsx("div",{className:"admin-section-head",style:{alignItems:"flex-start"},children:e.jsxs("div",{children:[e.jsx("h2",{style:{margin:0},children:"الأرباح والتحويلات"}),e.jsxs("p",{className:"muted small",style:{margin:"6px 0 0"},children:["إجمالي التحويلات ضمن الفلتر: ",e.jsx("strong",{dir:"ltr",children:j.total_count??0})," — مجموع المبالغ:"," ",e.jsxs("strong",{dir:"ltr",children:[j.total_amount_ils??"0.00"," ₪"]})]})]})}),e.jsxs("div",{className:"admin-finance-filters",style:{marginBottom:12},children:[e.jsxs("label",{children:["بحث باسم المتجر/اليوزر/الجوال",e.jsx("input",{value:s,onChange:a=>h(a.target.value),placeholder:"مثال: اسم متجر أو 059...",autoComplete:"off"})]}),e.jsxs("label",{children:["مصدر الأرباح",e.jsxs("select",{value:l,onChange:a=>m(a.target.value),children:[e.jsx("option",{value:"",children:"الكل"}),e.jsx("option",{value:"sponsored_ad",children:"الإعلانات الممولة فقط"}),e.jsx("option",{value:"subscription_renewal",children:"الاشتراكات فقط"})]})]}),e.jsxs("label",{children:["من تاريخ",e.jsx("input",{type:"date",value:d,onChange:a=>x(a.target.value)})]}),e.jsxs("label",{children:["إلى تاريخ",e.jsx("input",{type:"date",value:o,onChange:a=>g(a.target.value)})]}),e.jsxs("label",{children:["طريقة التحويل",e.jsxs("select",{value:c,onChange:a=>f(a.target.value),children:[e.jsx("option",{value:"",children:"الكل"}),e.jsx("option",{value:"balipay_wallet",children:"محفظة بال باي"}),e.jsx("option",{value:"bank_palestine",children:"بنك فلسطين"}),e.jsx("option",{value:"other",children:"أخرى"})]})]}),e.jsx("button",{type:"button",className:"btn-ok",onClick:r,disabled:b,children:"تحديث"}),e.jsx("button",{type:"button",className:"btn-toggle",onClick:()=>{h(""),m(""),x(""),g(""),f("")},children:"مسح الفلاتر"})]}),b?e.jsx("p",{children:"جاري التحميل…"}):p.length===0?e.jsx("p",{className:"muted",children:"لا توجد تحويلات ضمن هذه الفلاتر."}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"admin-table-wrap admin-finance-table-wrap",children:e.jsxs("table",{className:"admin-accounts-table admin-finance-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"الإشعار"}),e.jsx("th",{children:"المتجر"}),e.jsx("th",{children:"صاحب المتجر"}),e.jsx("th",{children:"الجوال"}),e.jsx("th",{children:"النوع"}),e.jsx("th",{children:"طريقة التحويل"}),e.jsx("th",{children:"المبلغ"}),e.jsx("th",{children:"تاريخ/وقت التحويل"}),e.jsx("th",{children:"إجراءات"})]})}),e.jsx("tbody",{children:p.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.receipt_image?e.jsx("a",{href:a.receipt_image,target:"_blank",rel:"noreferrer",className:"fin-receipt",children:e.jsx("img",{src:a.receipt_image,alt:"إشعار التحويل",loading:"lazy",width:"260",height:"260"})}):e.jsx("span",{className:"muted small",children:"—"})}),e.jsxs("td",{children:[e.jsx("strong",{children:a.store_name}),e.jsxs("span",{className:"muted small",style:{display:"block"},children:["#",a.store_id]})]}),e.jsx("td",{children:a.merchant_username||"—"}),e.jsx("td",{dir:"ltr",style:{textAlign:"right"},children:a.merchant_phone||"—"}),e.jsx("td",{children:e.jsx("span",{className:"fin-pill fin-pill--kind",children:a.kind_label||a.kind})}),e.jsx("td",{children:e.jsx("span",{className:`fin-pill fin-pill--method fin-pill--${a.payment_method||"other"}`,children:a.payment_method_label||a.payment_method})}),e.jsxs("td",{className:"fin-amount",dir:"ltr",children:[a.amount_ils," ₪"]}),e.jsx("td",{className:"fin-dt",children:N(a.created_at)}),e.jsx("td",{children:e.jsx("button",{type:"button",className:"fin-del",onClick:()=>y(a),title:"حذف التحويلة","aria-label":"حذف التحويلة",children:e.jsx(w,{size:16,strokeWidth:2.25,"aria-hidden":!0})})})]},a.id))})]})}),e.jsx("div",{className:"fin-cards","aria-label":"قائمة التحويلات",children:p.map(a=>e.jsxs("article",{className:"fin-card",children:[e.jsxs("div",{className:"fin-card__top",children:[e.jsxs("div",{className:"fin-card__store",children:[e.jsx("div",{className:"fin-card__storeName",children:a.store_name}),e.jsxs("div",{className:"muted small",children:["#",a.store_id]})]}),e.jsxs("div",{className:"fin-card__amount",dir:"ltr",children:[a.amount_ils," ₪"]})]}),a.receipt_image?e.jsxs("a",{href:a.receipt_image,target:"_blank",rel:"noreferrer",className:"fin-card__receipt",children:[e.jsx("img",{src:a.receipt_image,alt:"إشعار التحويل",loading:"lazy",width:"260",height:"260"}),e.jsx("span",{children:"فتح إشعار التحويل"})]}):null,e.jsxs("div",{className:"fin-card__pills",children:[e.jsx("span",{className:"fin-pill fin-pill--kind",children:a.kind_label||a.kind}),e.jsx("span",{className:`fin-pill fin-pill--method fin-pill--${a.payment_method||"other"}`,children:a.payment_method_label||a.payment_method})]}),e.jsxs("div",{className:"fin-kv",children:[e.jsxs("div",{className:"fin-kv__row",children:[e.jsx("span",{className:"fin-kv__k",children:"صاحب المتجر"}),e.jsx("span",{className:"fin-kv__v",children:a.merchant_username||"—"})]}),e.jsxs("div",{className:"fin-kv__row",children:[e.jsx("span",{className:"fin-kv__k",children:"الجوال"}),e.jsx("span",{className:"fin-kv__v",dir:"ltr",children:a.merchant_phone||"—"})]}),e.jsxs("div",{className:"fin-kv__row",children:[e.jsx("span",{className:"fin-kv__k",children:"التاريخ"}),e.jsx("span",{className:"fin-kv__v",children:N(a.created_at)})]})]}),e.jsx("div",{className:"fin-card__actions",children:e.jsxs("button",{type:"button",className:"fin-del",onClick:()=>y(a),title:"حذف التحويلة","aria-label":"حذف التحويلة",children:[e.jsx(w,{size:16,strokeWidth:2.25,"aria-hidden":!0}),"حذف"]})})]},`m-${a.id}`))})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
              .admin-finance-filters{
                display: grid;
                grid-template-columns: repeat(6, minmax(0, 1fr));
                gap: 10px;
                align-items: end;
              }
              .admin-finance-filters label{
                display: flex;
                flex-direction: column;
                gap: 6px;
                font-weight: 800;
                color: var(--secondary);
                font-size: 0.9rem;
              }
              .admin-finance-filters input,
              .admin-finance-filters select{
                padding: 10px 12px;
                border-radius: 12px;
                border: 1.5px solid var(--border);
                background: var(--white);
                font-family: inherit;
              }
              @media (max-width: 900px){
                .admin-finance-filters{ grid-template-columns: 1fr 1fr; }
              }

              .admin-finance-table th{
                position: sticky;
                top: 0;
                background: var(--surface);
                z-index: 1;
              }
              .admin-finance-table-wrap{
                border-radius: 18px;
                border: 1px solid rgba(232, 230, 224, 0.95);
                background: rgba(255,255,255,0.92);
                box-shadow: 0 14px 34px rgba(26, 29, 38, 0.06);
                overflow: auto;
              }
              .admin-finance-table{
                width: 100%;
                min-width: 1120px;
                border-collapse: separate;
                border-spacing: 0;
              }
              .admin-finance-table th, .admin-finance-table td{
                padding: 14px 14px;
                border-bottom: 1px solid rgba(232, 230, 224, 0.95);
                vertical-align: middle;
              }
              .admin-finance-table thead th{
                background: linear-gradient(180deg, rgba(255, 249, 230, 0.75) 0%, rgba(255,255,255,0.96) 100%);
                font-weight: 950;
                white-space: nowrap;
              }
              .admin-finance-table tbody tr:nth-child(even){
                background: rgba(245, 246, 248, 0.55);
              }
              .admin-finance-table tbody tr:hover{
                background: rgba(255, 204, 0, 0.08);
              }
              .admin-finance-table tbody tr:last-child td{
                border-bottom: none;
              }
              .fin-amount{
                font-weight: 950;
                text-align: right;
                white-space: nowrap;
              }
              .fin-dt{
                white-space: nowrap;
              }
              .fin-receipt{
                display: inline-flex;
                width: 56px;
                height: 56px;
                border-radius: 14px;
                overflow: hidden;
                border: 1px solid rgba(232, 230, 224, 0.95);
                background: rgba(255,255,255,0.92);
                box-shadow: 0 10px 24px rgba(26, 29, 38, 0.06);
              }
              .fin-receipt img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
              }

              /* Mobile cards */
              .fin-cards{ display: none; }
              @media (max-width: 820px){
                .admin-finance-table-wrap{ display: none; }
                .fin-cards{
                  display: grid;
                  grid-template-columns: 1fr;
                  gap: 12px;
                }
                .fin-card{
                  border-radius: 18px;
                  border: 1px solid rgba(232, 230, 224, 0.95);
                  background: rgba(255,255,255,0.92);
                  box-shadow: 0 14px 34px rgba(26, 29, 38, 0.06);
                  padding: 14px 14px;
                }
                .fin-card__top{
                  display: flex;
                  align-items: flex-start;
                  justify-content: space-between;
                  gap: 10px;
                  margin-bottom: 10px;
                }
                .fin-card__storeName{
                  font-weight: 950;
                  color: var(--secondary);
                  line-height: 1.35;
                }
                .fin-card__amount{
                  flex-shrink: 0;
                  font-weight: 950;
                  color: var(--secondary);
                  background: linear-gradient(135deg, rgba(245, 192, 0, 0.18) 0%, rgba(255,255,255,0.92) 100%);
                  border: 1px solid rgba(245, 192, 0, 0.35);
                  padding: 6px 10px;
                  border-radius: 999px;
                  white-space: nowrap;
                }
                .fin-card__receipt{
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  padding: 10px 10px;
                  border-radius: 16px;
                  border: 1px solid rgba(232, 230, 224, 0.95);
                  background: rgba(255,255,255,0.92);
                  text-decoration: none;
                  color: var(--secondary);
                  box-shadow: 0 10px 24px rgba(26, 29, 38, 0.06);
                  margin-bottom: 12px;
                }
                .fin-card__receipt img{
                  width: 54px;
                  height: 54px;
                  border-radius: 14px;
                  object-fit: cover;
                  border: 1px solid rgba(232, 230, 224, 0.95);
                  flex-shrink: 0;
                }
                .fin-card__receipt span{
                  font-weight: 950;
                  color: var(--secondary);
                }
                .fin-card__pills{
                  display: flex;
                  flex-wrap: wrap;
                  gap: 8px;
                  margin-bottom: 12px;
                }
                .fin-kv{
                  display: grid;
                  gap: 8px;
                }
                .fin-kv__row{
                  display: flex;
                  align-items: baseline;
                  justify-content: space-between;
                  gap: 10px;
                  padding-top: 8px;
                  border-top: 1px dashed rgba(232, 230, 224, 0.95);
                }
                .fin-kv__row:first-child{
                  border-top: none;
                  padding-top: 0;
                }
                .fin-kv__k{
                  font-weight: 900;
                  color: var(--text-secondary);
                  font-size: 0.86rem;
                }
                .fin-kv__v{
                  font-weight: 900;
                  color: var(--secondary);
                  text-align: left;
                }
              }

              .fin-pill{
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 4px 10px;
                border-radius: 999px;
                font-weight: 900;
                font-size: 0.8rem;
                line-height: 1.2;
                border: 1px solid rgba(232, 230, 224, 0.95);
                background: rgba(255, 255, 255, 0.92);
                color: var(--secondary);
                white-space: nowrap;
              }
              .fin-pill--kind{
                background: linear-gradient(135deg, rgba(245, 192, 0, 0.18) 0%, rgba(255,255,255,0.92) 100%);
                border-color: rgba(245, 192, 0, 0.35);
              }
              .fin-pill--balipay_wallet{
                border-color: rgba(37, 211, 102, 0.35);
                background: linear-gradient(135deg, rgba(37, 211, 102, 0.14) 0%, rgba(255,255,255,0.92) 100%);
              }
              .fin-pill--bank_palestine{
                border-color: rgba(2, 119, 189, 0.28);
                background: linear-gradient(135deg, rgba(2, 119, 189, 0.12) 0%, rgba(255,255,255,0.92) 100%);
              }
              .fin-pill--other{
                border-color: rgba(99, 110, 114, 0.28);
              }

              .fin-del{
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
                transition: background 0.15s ease, border-color 0.15s ease, transform 0.12s ease;
                white-space: nowrap;
              }
              .fin-del:hover{
                background: rgba(255, 227, 227, 0.95);
                border-color: rgba(198, 40, 40, 0.45);
              }
              .fin-del:active{ transform: scale(0.98); }
              .fin-card__actions{ margin-top: 12px; display: flex; justify-content: flex-end; }
            `}})]})]})})}export{$ as default};
