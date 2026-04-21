import{c as I,u as D,n as H,r as t,p as T,v as U,j as a,L as K}from"./index-triUy4pT.js";import{M as $,g as G}from"./MainLayout-CULM5rEt.js";import{g as O}from"./storePinDefaults-BR9yF6Rx.js";import{s as q}from"./storeHours-U_KU_St1.js";import{F as Q}from"./FiltersDropdown-Xf8Ha-mX.js";function S(s,c){const n=v=>v*Math.PI/180,l=n(c[0]-s[0]),h=n(c[1]-s[1]),y=n(s[0]),m=n(c[0]),u=Math.sin(l/2)**2+Math.cos(y)*Math.cos(m)*Math.sin(h/2)**2;return 6371*(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)))}function M(s){const c=Number(s==null?void 0:s.latitude),d=Number(s==null?void 0:s.longitude);return Number.isFinite(c)&&Number.isFinite(d)}const _=12;function W(s){if(s==null)return[];const c=String(s).trim();if(!c)return[];const d=[];for(const n of c.split(",")){const l=Number(String(n).trim());Number.isFinite(l)&&d.push(l)}return Array.from(new Set(d))}const Z=()=>{const[s,c]=I();D();const d=s.get("q")||"",n=d.trim(),l=n.toLowerCase(),{userMapLocation:h,setSearchQuery:y}=H(),m=t.useMemo(()=>W(s.get("category")),[s]),[u,v]=t.useState([]),[k,z]=t.useState([]),[A,L]=t.useState(!0),[E,P]=t.useState(""),[x,C]=t.useState(null),[j,w]=t.useState(1);t.useEffect(()=>{y(n)},[n,y]),t.useEffect(()=>{w(1)},[d]),t.useEffect(()=>{let e=!1;return(async()=>{try{const r=await T();e||z(Array.isArray(r)?r:[])}catch(r){console.error(r),e||z([])}})(),()=>{e=!0}},[]),t.useEffect(()=>{let e=!1;return(async()=>{try{L(!0),P("");let r,i,o=null;(h==null?void 0:h.length)===2?(r=h[0],i=h[1],o=[r,i],e||C(o)):(r=31.5,i=34.4,o=null,e||C(null));const g=await U(r,i),R=Array.isArray(g)?g:(g==null?void 0:g.results)||[];e||v(R)}catch(r){console.error(r),e||(P("تعذر تحميل المتاجر. تحقق من الاتصال بالخادم."),v([]))}finally{e||L(!1)}})(),()=>{e=!0}},[h]);const N=t.useMemo(()=>{let e=Array.isArray(u)?u:[];return m.length>0&&(e=e.filter(r=>m.includes(Number(r.category)))),l?e.filter(r=>{const i=(r.store_name||"").toLowerCase(),o=(r.category_name||"").toLowerCase();return i.includes(l)||o.includes(l)}):e},[u,l,m]),f=t.useMemo(()=>{if(!x)return N;const e=x;return[...N].sort((r,i)=>{if(!M(r))return 1;if(!M(i))return-1;const o=S(e,[Number(r.latitude),Number(r.longitude)]),g=S(e,[Number(i.latitude),Number(i.longitude)]);return o-g})},[N,x]),b=Math.max(1,Math.ceil(f.length/_)),p=Math.min(j,b),F=t.useMemo(()=>{const e=(p-1)*_;return f.slice(e,e+_)},[f,p]);return t.useEffect(()=>{p!==j&&w(p)},[p,j]),a.jsx($,{children:a.jsxs("div",{className:"search-page",children:[a.jsx("header",{className:"search-page-hero",children:a.jsxs("div",{className:"search-page-head",children:[a.jsx("h1",{className:"search-page-title",children:"نتائج البحث"}),n?a.jsxs("p",{className:"search-page-query",children:[a.jsx(G,{size:18,"aria-hidden":!0}),"«",n,"»"]}):a.jsx("p",{className:"search-page-hint",children:"اكتب في شريط البحث أعلاه واضغط Enter أو زر البحث لعرض المتاجر المطابقة."})]})}),a.jsx("div",{className:"search-page-filter",children:a.jsx(Q,{buttonLabel:"فلاتر",title:"فلترة حسب الأقسام",allLabel:"كل الأقسام",requireConfirm:!0,options:(k||[]).map(e=>({id:e.id,label:e.name})),selectedIds:m,onChangeSelectedIds:e=>{const r=new URLSearchParams(s);e&&e.length?r.set("category",e.join(",")):r.delete("category"),c(r,{replace:!0})}})}),E?a.jsx("p",{className:"search-page-error",children:E}):null,A?a.jsx("p",{className:"search-page-loading",children:"جاري تحميل المتاجر…"}):f.length===0?a.jsx("p",{className:"search-page-empty",children:n?"لا توجد متاجر تطابق بحثك. جرّب كلمات أخرى أو تصفح من الصفحة الرئيسية.":"لا توجد نتائج بعد."}):a.jsxs(a.Fragment,{children:[a.jsxs("p",{className:"search-page-count",children:[f.length," متجر"]}),a.jsx("div",{className:"search-page-grid",children:F.map(e=>{const r=O(e,k),i=x&&M(e)?S(x,[Number(e.latitude),Number(e.longitude)]):null,o=q(e.business_hours_weekly)&&e.is_open_now===!0?"مفتوح":q(e.business_hours_weekly)&&e.is_open_now===!1?"مغلق":null;return a.jsxs(K,{to:`/stores/${e.id}`,className:"search-page-card",children:[a.jsxs("div",{className:"search-page-card-main",children:[a.jsxs("div",{className:"search-page-card-text",children:[a.jsx("span",{className:"search-page-card-name",children:e.store_name}),e.category_name?a.jsx("span",{className:"search-page-card-cat",children:e.category_name}):null,a.jsx("span",{className:"search-page-card-dist",children:i!=null?`📍 ${i.toFixed(1)} كم`:"بدون مسافة"})]}),o?a.jsx("span",{className:"search-page-card-status",children:o}):null]}),a.jsx("div",{className:"search-page-card-thumb",children:r.type==="image"?a.jsx("img",{className:"search-page-card-thumb-img",src:r.url,alt:"",loading:"lazy",width:"800",height:"800"}):a.jsx("span",{className:"search-page-card-thumb-emoji",style:{background:r.bg},children:r.emoji})})]},e.id)})}),b>1?a.jsxs("div",{className:"search-page-pager",role:"navigation","aria-label":"تصفح الصفحات",children:[a.jsx("button",{type:"button",className:"search-page-pager-btn",disabled:p<=1,onClick:()=>w(e=>Math.max(1,e-1)),children:"السابق"}),a.jsxs("span",{className:"search-page-pager-meta",children:[p," / ",b]}),a.jsx("button",{type:"button",className:"search-page-pager-btn",disabled:p>=b,onClick:()=>w(e=>Math.min(b,e+1)),children:"التالي"})]}):null]}),a.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .search-page {
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
            padding-bottom: 28px;
          }
          .search-page-hero {
            margin-bottom: 22px;
            padding: clamp(18px, 3vw, 24px) clamp(16px, 2.5vw, 22px);
            border-radius: var(--radius-xl);
            background: linear-gradient(160deg, var(--white) 0%, var(--primary-light) 100%);
            border: 1px solid rgba(255, 214, 10, 0.28);
            box-shadow: var(--shadow-sm);
          }
          .search-page-head {
            margin: 0;
          }
          .search-page-filter{
            display:flex;
            justify-content: flex-start;
            margin: -8px 0 14px;
          }
          /* moved filters UI to FiltersDropdown component */
          .search-page-title {
            margin: 0 0 8px;
            font-size: 1.45rem;
            font-weight: 900;
            color: var(--secondary);
          }
          .search-page-query {
            margin: 0;
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 700;
            color: var(--text-secondary);
            font-size: 0.95rem;
          }
          .search-page-hint {
            margin: 0;
            line-height: 1.6;
            color: var(--text-secondary);
            font-size: 0.92rem;
          }
          .search-page-error {
            color: #c0392b;
            font-weight: 800;
          }
          .search-page-loading,
          .search-page-empty {
            color: var(--text-secondary);
            line-height: 1.65;
          }
          .search-page-count {
            margin: 0 0 12px;
            font-size: 0.88rem;
            font-weight: 800;
            color: var(--text-secondary);
          }
          .search-page-grid {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .search-page-card {
            display: flex;
            align-items: stretch;
            gap: 10px;
            padding: 12px 14px;
            border-radius: var(--radius-lg);
            background: var(--white);
            border: 1px solid var(--border);
            box-shadow: 0 6px 20px rgba(30, 30, 46, 0.06);
            text-decoration: none;
            color: inherit;
            transition: box-shadow 0.2s ease, border-color 0.2s ease;
          }
          .search-page-card:hover {
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: var(--shadow-gold);
          }
          .search-page-card-main {
            flex: 1;
            min-width: 0;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;
          }
          .search-page-card-text {
            display: flex;
            flex-direction: column;
            gap: 4px;
            min-width: 0;
          }
          .search-page-card-name {
            font-weight: 900;
            font-size: 1rem;
            color: var(--secondary);
          }
          .search-page-card-cat {
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--text-secondary);
          }
          .search-page-card-dist {
            font-size: 0.8rem;
            color: var(--text-light);
          }
          .search-page-card-status {
            flex-shrink: 0;
            font-size: 0.72rem;
            font-weight: 800;
            padding: 4px 10px;
            border-radius: 999px;
            background: var(--primary-light);
            color: var(--secondary);
          }
          .search-page-card-thumb {
            flex-shrink: 0;
            width: 52px;
            height: 52px;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid var(--border);
          }
          .search-page-card-thumb-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .search-page-card-thumb-emoji {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
          }
          .search-page-pager {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            margin-top: 22px;
            flex-wrap: wrap;
          }
          .search-page-pager-btn {
            font-family: inherit;
            font-weight: 800;
            font-size: 0.88rem;
            padding: 10px 18px;
            border-radius: 12px;
            border: 1px solid var(--border);
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            cursor: pointer;
            box-shadow: var(--shadow-sm);
          }
          .search-page-pager-btn:disabled {
            opacity: 0.45;
            cursor: not-allowed;
          }
          .search-page-pager-meta {
            font-weight: 800;
            font-size: 0.88rem;
            color: var(--text-secondary);
          }
        `}})]})})};export{Z as default};
