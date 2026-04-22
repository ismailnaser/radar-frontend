import{a as _,r,aK as L,aL as F,j as e,aM as $,aN as z,aO as E,aP as H}from"./index-0QSndEG2.js";import{M as I}from"./MainLayout-DneWrDvu.js";import{a as O}from"./adminPanelCss-D-Z9XX1t.js";function T({src:i,alt:c}){return i?e.jsx("a",{className:"cat-thumb",href:i,target:"_blank",rel:"noreferrer",title:"فتح الصورة",children:e.jsx("img",{src:i,alt:c||"صورة",loading:"lazy",width:"88",height:"88"})}):e.jsx("span",{className:"muted small",children:"—"})}function J(){const{showAlert:i,showConfirm:c}=_(),[t,m]=r.useState("stores"),[l,n]=r.useState(!1),[u,h]=r.useState([]),[x,g]=r.useState([]),[p,y]=r.useState(""),[b,j]=r.useState(""),[f,v]=r.useState(""),[C,w]=r.useState(0),[N,A]=r.useState(null),d=r.useMemo(()=>t==="stores"?u:x,[t,u,x]),o=r.useCallback(async()=>{n(!0);try{const[a,s]=await Promise.all([L(),F()]);h(Array.isArray(a==null?void 0:a.results)?a.results:Array.isArray(a)?a:[]),g(Array.isArray(s==null?void 0:s.results)?s.results:Array.isArray(s)?s:[])}catch(a){console.error(a),h([]),g([]),await i("تعذر تحميل الأقسام.","خطأ")}finally{n(!1)}},[i]);r.useEffect(()=>{o()},[o]);const S=()=>{y(""),j(""),v(""),w(0),A(null)},k=async()=>{const a=p.trim();if(!a)return i("اكتب اسم القسم.","تنبيه");n(!0);try{t==="stores"?await $({name:a,imageFile:N}):await z({name:a,slug:b.trim(),description_hint:f.trim(),sort_order:Number(C)||0,imageFile:N}),S(),await o(),await i("تمت الإضافة.","تم")}catch(s){console.error(s),await i("تعذر إضافة القسم.","خطأ")}finally{n(!1)}},P=async a=>{if(await c(`حذف القسم: ${a.name}؟`,"تأكيد")){n(!0);try{t==="stores"?await E(a.id):await H(a.id),await o(),await i("تم الحذف.","تم")}catch(M){console.error(M),await i("تعذر الحذف. إن كان القسم مرتبط بنقاط خدمات مجتمعية سيتم تعطيله بدل الحذف.","تنبيه"),await o()}finally{n(!1)}}};return e.jsx(I,{children:e.jsxs("div",{className:"admin-dash",children:[e.jsx("h1",{children:"إدارة الأقسام"}),e.jsx("p",{className:"admin-intro",children:"إضافة/حذف أقسام المتاجر وأقسام الخدمات المجتمعية، مع صورة افتراضية للقسم."}),e.jsxs("section",{className:"card admin-section",style:{marginBottom:16},children:[e.jsxs("div",{className:"admin-section-head",children:[e.jsx("h2",{style:{margin:0},children:"النوع"}),e.jsxs("div",{className:"cat-tabs",role:"tablist","aria-label":"نوع الأقسام",children:[e.jsx("button",{type:"button",className:`cat-tab${t==="stores"?" cat-tab--active":""}`,onClick:()=>m("stores"),children:"أقسام المتاجر"}),e.jsx("button",{type:"button",className:`cat-tab${t==="community"?" cat-tab--active":""}`,onClick:()=>m("community"),children:"أقسام الخدمات المجتمعية"})]})]}),e.jsxs("div",{className:"cat-form",children:[e.jsxs("label",{children:["اسم القسم",e.jsx("input",{value:p,onChange:a=>y(a.target.value),placeholder:"مثال: حلويات"})]}),t==="community"?e.jsxs(e.Fragment,{children:[e.jsxs("label",{children:["slug (اختياري)",e.jsx("input",{value:b,onChange:a=>j(a.target.value),placeholder:"يُنشأ تلقائياً إن تركته"})]}),e.jsxs("label",{style:{gridColumn:"1 / -1"},children:["تلميح/وصف (اختياري)",e.jsx("textarea",{value:f,onChange:a=>v(a.target.value),placeholder:"يظهر عند اقتراح نقطة خدمة"})]}),e.jsxs("label",{children:["ترتيب (اختياري)",e.jsx("input",{type:"number",value:C,onChange:a=>w(a.target.value)})]})]}):null,e.jsxs("label",{style:{gridColumn:"1 / -1"},children:["صورة افتراضية للقسم (اختياري)",e.jsx("input",{type:"file",accept:"image/*",onChange:a=>{var s;return A(((s=a.target.files)==null?void 0:s[0])||null)}}),e.jsx("span",{className:"muted small",children:"PNG/JPG"})]}),e.jsxs("div",{className:"admin-actions",style:{gridColumn:"1 / -1"},children:[e.jsx("button",{type:"button",className:"btn-ok",onClick:k,disabled:l,children:"إضافة قسم"}),e.jsx("button",{type:"button",className:"btn-toggle",onClick:S,disabled:l,children:"مسح الحقول"})]})]})]}),e.jsxs("section",{className:"card admin-section",children:[e.jsxs("div",{className:"admin-section-head",children:[e.jsx("h2",{style:{margin:0},children:"القائمة"}),l?e.jsx("span",{className:"muted small",children:"جاري…"}):e.jsxs("span",{className:"muted small",children:[d.length," قسم"]})]}),e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-accounts-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"الصورة"}),e.jsx("th",{children:"الاسم"}),t==="community"?e.jsx("th",{children:"slug"}):null,t==="community"?e.jsx("th",{children:"نشط"}):null,e.jsx("th",{})]})}),e.jsxs("tbody",{children:[d.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(T,{src:a.image,alt:a.name})}),e.jsxs("td",{children:[e.jsx("strong",{children:a.name}),e.jsxs("span",{className:"muted small",style:{display:"block"},children:["#",a.id]})]}),t==="community"?e.jsx("td",{dir:"ltr",children:a.slug}):null,t==="community"?e.jsx("td",{children:a.is_active?"نعم":"لا"}):null,e.jsx("td",{children:e.jsx("button",{type:"button",className:"btn-no",onClick:()=>P(a),disabled:l,children:"حذف"})})]},a.id)),!l&&d.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:t==="community"?5:4,className:"muted",children:"لا يوجد أقسام."})}):null]})]})})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
            ${O}
            .cat-tabs{ display:flex; gap:10px; flex-wrap:wrap; }
            .cat-tab{
              border:1.5px solid var(--border);
              background: var(--white);
              padding: 9px 12px;
              border-radius: 999px;
              font-weight: 900;
              cursor:pointer;
              font-family: inherit;
              color: var(--secondary);
            }
            .cat-tab--active{
              background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
              border-color: transparent;
              box-shadow: var(--shadow-gold);
            }
            .cat-form{
              display:grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 12px;
              margin-top: 12px;
            }
            .cat-form label{
              display:flex;
              flex-direction:column;
              gap: 6px;
              font-weight: 900;
              color: var(--secondary);
              font-size: 0.9rem;
            }
            .cat-form input, .cat-form textarea{
              padding: 10px 12px;
              border-radius: 12px;
              border: 1.5px solid var(--border);
              background: var(--white);
              font-family: inherit;
            }
            .cat-form textarea{ min-height: 90px; resize: vertical; }
            @media (max-width: 900px){
              .cat-form{ grid-template-columns: 1fr; }
            }
            .cat-thumb{
              display:inline-flex;
              width: 54px;
              height: 54px;
              border-radius: 14px;
              overflow:hidden;
              border: 1px solid rgba(232, 230, 224, 0.95);
              background: rgba(255,255,255,0.92);
              box-shadow: 0 10px 24px rgba(26, 29, 38, 0.06);
            }
            .cat-thumb img{ width:100%; height:100%; object-fit:cover; display:block; }
          `}})]})})}export{J as default};
