import{f as j,r as t,j as a,S as w,L as m,B as k,D as N}from"./index-XZ1LCLwc.js";import{e as z,H as _,P as p,M,b as S}from"./MainLayout-DFUtA0Jr.js";import{C as F}from"./clock-D2auy-pO.js";const C=j("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),H=()=>{const[s,x]=t.useState(null),[n,g]=t.useState(null),[r,u]=t.useState(!0),b=localStorage.getItem("user_name")||"تاجرنا";t.useEffect(()=>{(async()=>{try{const[d,o]=await Promise.all([k(),N()]);x(d),g(o)}finally{u(!1)}})()},[]);const h=t.useMemo(()=>{if(!(n!=null&&n.end_date))return null;const e=new Date(n.end_date).getTime(),d=Date.now(),o=Math.ceil((e-d)/(1e3*60*60*24));return Number.isFinite(o)?o:null},[n]),i=(s==null?void 0:s.product_insights)??[],l=(s==null?void 0:s.summary)??{},{maxCart:v,maxFav:f}=t.useMemo(()=>i.length?{maxCart:Math.max(1,...i.map(e=>e.in_carts_quantity)),maxFav:Math.max(1,...i.map(e=>e.favorites_count))}:{maxCart:1,maxFav:1},[i]),y=[{label:"زيارات متجرك اليوم",value:r?"…":(s==null?void 0:s.visitor_count)??0,hint:"عدد فتحات صفحة المتجر",icon:a.jsx(z,{size:22,strokeWidth:2.2})},{label:"وحدات في سلال الزبائن",value:r?"…":l.total_units_in_carts??0,hint:"مجموع الكميات المضافة لسلال المشتريات",icon:a.jsx(w,{size:22,strokeWidth:2.2})},{label:"تسجيلات مفضلة على منتجاتك",value:r?"…":l.total_favorite_marks??0,hint:"عدد مرات أضيف فيها منتج للمفضلة",icon:a.jsx(_,{size:22,strokeWidth:2.2})},{label:"منتجاتك النشطة",value:r?"…":l.active_products??0,hint:"غير مؤرشفة وظاهرة للزبائن",icon:a.jsx(p,{size:22,strokeWidth:2.2})}],c=h==null?null:Math.max(h,0);return a.jsx(M,{children:a.jsxs("div",{className:"merchant-dashboard",children:[a.jsxs("header",{className:"mdash-hero card",children:[a.jsxs("div",{className:"mdash-hero-text",children:[a.jsxs("p",{className:"mdash-kicker",children:[a.jsx(S,{size:16})," مرحباً ",b]}),a.jsx("h1",{children:"لوحة تحكم متجرك"}),a.jsxs("p",{className:"mdash-lead",children:["لمحة سريعة عن اهتمام الزبائن بمنتجاتك — ",a.jsx("strong",{children:"السلة"})," تعكس رغبة الشراء، و",a.jsx("strong",{children:"المفضلة"})," ","تعكس الاهتمام. راقب البسيط واتخذ قرارات أوضح."]})]}),a.jsxs("div",{className:"mdash-hero-stat",children:[a.jsx("div",{className:"mdash-mini-label",children:"الاشتراك"}),a.jsx("div",{className:"mdash-mini-value",children:r?"…":c==null?"—":`${c} يوم`}),a.jsx(F,{size:18,className:"mdash-hero-clock"})]})]}),a.jsx("section",{className:"mdash-kpis",children:y.map((e,d)=>a.jsxs("div",{className:"card mdash-kpi",children:[a.jsxs("div",{className:"mdash-kpi-top",children:[a.jsx("div",{className:"mdash-kpi-icon",children:e.icon}),a.jsx("div",{className:"mdash-kpi-label",children:e.label})]}),a.jsx("div",{className:"mdash-kpi-value",children:e.value}),a.jsx("p",{className:"mdash-kpi-hint",children:e.hint})]},d))}),a.jsxs("section",{className:"card mdash-insights",children:[a.jsxs("div",{className:"mdash-insights-head",children:[a.jsxs("div",{children:[a.jsxs("h2",{children:[a.jsx(C,{size:22,className:"inline-icon"})," تحليلات المنتجات"]}),a.jsx("p",{className:"mdash-insights-sub",children:"ترتيب حسب إجمالي الكمية في السلال ثم المفضلة — بيانات من نشاط المتسوقين الحقيقي."})]}),a.jsx(m,{to:"/merchant/products",className:"mdash-link-products",children:"إدارة المنتجات"})]}),r?a.jsx("p",{className:"mdash-muted",children:"جاري التحميل…"}):i.length===0?a.jsxs("div",{className:"mdash-empty",children:[a.jsx(p,{size:40,strokeWidth:1.5}),a.jsx("p",{children:"لا توجد منتجات نشطة بعد، أو لم يُسجَّل نشاط على السلة والمفضلة."}),a.jsx(m,{to:"/merchant/products/new",className:"mdash-btn-outline",children:"إضافة منتج"})]}):a.jsx("div",{className:"mdash-table-wrap",children:a.jsxs("table",{className:"mdash-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"المنتج"}),a.jsx("th",{children:"في السلال (الكمية)"}),a.jsx("th",{children:"المفضلة"})]})}),a.jsx("tbody",{children:i.map(e=>a.jsxs("tr",{children:[a.jsx("td",{className:"mdash-td-name",children:e.name}),a.jsx("td",{children:a.jsxs("div",{className:"mdash-bar-cell",children:[a.jsx("div",{className:"mdash-bar-fill mdash-bar-cart",style:{width:`${Math.round(e.in_carts_quantity/v*100)}%`}}),a.jsx("span",{className:"mdash-bar-num",children:e.in_carts_quantity})]})}),a.jsx("td",{children:a.jsxs("div",{className:"mdash-bar-cell",children:[a.jsx("div",{className:"mdash-bar-fill mdash-bar-fav",style:{width:`${Math.round(e.favorites_count/f*100)}%`}}),a.jsx("span",{className:"mdash-bar-num",children:e.favorites_count})]})})]},e.id))})]})})]}),a.jsxs("section",{className:"card mdash-tip",children:[a.jsx("h3",{children:"ملاحظة سريعة"}),a.jsxs("p",{children:["من ",a.jsx("strong",{children:"القائمة الجانبية"})," تدير المنتجات، الإعلانات الممولة، والاشتراك. كلما زاد ظهور منتجاتك جودةً ووضوحاً، غالباً تتحسن أرقام السلة والمفضلة."]})]}),a.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .merchant-dashboard {
            max-width: 1240px;
            margin-inline: auto;
            padding-bottom: 32px;
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
          }
          .mdash-hero {
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            justify-content: space-between;
            gap: 20px;
            padding: 22px 24px;
            margin-bottom: 20px;
            background: linear-gradient(135deg, rgba(245, 192, 0, 0.14) 0%, var(--surface) 45%, var(--white) 100%);
            border: 1.5px solid rgba(245, 192, 0, 0.35);
            border-radius: 16px;
          }
          .mdash-hero-text { flex: 1; min-width: 240px; }
          .mdash-kicker {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin: 0 0 8px;
            font-size: 0.85rem;
            font-weight: 800;
            color: var(--secondary);
            opacity: 0.9;
          }
          .merchant-dashboard h1 {
            margin: 0 0 10px;
            font-size: clamp(1.35rem, 2.5vw, 1.85rem);
            color: var(--secondary);
          }
          .mdash-lead {
            margin: 0;
            color: var(--text-secondary);
            line-height: 1.75;
            font-size: 0.95rem;
            max-width: 640px;
          }
          .mdash-hero-stat {
            align-self: center;
            min-width: 140px;
            padding: 16px 20px;
            border-radius: 14px;
            background: var(--white);
            border: 1px solid var(--border);
            box-shadow: var(--shadow-sm);
            position: relative;
            text-align: center;
          }
          .mdash-mini-label { font-size: 0.78rem; font-weight: 700; color: var(--text-secondary); }
          .mdash-mini-value { font-size: 1.65rem; font-weight: 900; color: var(--secondary); margin-top: 4px; }
          .mdash-hero-clock {
            position: absolute;
            top: 12px;
            left: 12px;
            color: var(--primary-hover);
            opacity: 0.7;
          }

          .mdash-kpis {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
            gap: 14px;
            margin-bottom: 20px;
          }
          .mdash-kpi {
            padding: 18px;
            border-radius: 14px;
            transition: box-shadow 0.15s ease, transform 0.15s ease;
          }
          .mdash-kpi:hover {
            box-shadow: var(--shadow-gold);
            transform: translateY(-2px);
          }
          .mdash-kpi-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
          }
          .mdash-kpi-icon {
            background: linear-gradient(135deg, #FFF9E6 0%, #FFEFC2 100%);
            border-radius: 12px;
            padding: 10px;
            display: flex;
            color: var(--secondary);
          }
          .mdash-kpi-label {
            font-weight: 800;
            color: var(--secondary);
            font-size: 0.92rem;
            line-height: 1.35;
            text-align: end;
            flex: 1;
          }
          .mdash-kpi-value {
            margin-top: 12px;
            font-size: 1.75rem;
            font-weight: 900;
            color: var(--secondary);
            font-variant-numeric: tabular-nums;
          }
          .mdash-kpi-hint {
            margin: 8px 0 0;
            font-size: 0.78rem;
            color: var(--text-secondary);
            line-height: 1.45;
          }

          .mdash-insights { padding: 22px 24px; border-radius: 16px; }
          .mdash-insights-head {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 18px;
          }
          .mdash-insights-head h2 {
            margin: 0 0 6px;
            font-size: 1.2rem;
            color: var(--secondary);
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .inline-icon { flex-shrink: 0; opacity: 0.9; }
          .mdash-insights-sub {
            margin: 0;
            font-size: 0.88rem;
            color: var(--text-secondary);
            line-height: 1.6;
            max-width: 560px;
          }
          .mdash-link-products {
            display: inline-flex;
            align-items: center;
            padding: 10px 16px;
            border-radius: 12px;
            font-weight: 800;
            font-size: 0.88rem;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            text-decoration: none;
            white-space: nowrap;
            box-shadow: var(--shadow-sm);
          }
          .mdash-link-products:hover { opacity: 0.95; }

          .mdash-table-wrap {
            overflow-x: auto;
            max-height: 420px;
            overflow-y: auto;
            border: 1px solid var(--border);
            border-radius: 12px;
          }
          .mdash-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.9rem;
          }
          .mdash-table th {
            position: sticky;
            top: 0;
            background: var(--surface);
            text-align: right;
            padding: 12px 14px;
            font-weight: 800;
            color: var(--secondary);
            border-bottom: 2px solid var(--border);
            z-index: 1;
          }
          .mdash-table td {
            padding: 12px 14px;
            border-bottom: 1px solid var(--border);
            vertical-align: middle;
          }
          .mdash-td-name { font-weight: 700; color: var(--text-primary); max-width: 220px; }

          .mdash-bar-cell {
            position: relative;
            height: 28px;
            background: var(--grey-light);
            border-radius: 8px;
            overflow: hidden;
            min-width: 120px;
          }
          .mdash-bar-fill {
            position: absolute;
            inset: 0 auto 0 0;
            height: 100%;
            border-radius: 8px;
            min-width: 0;
            transition: width 0.35s ease;
          }
          .mdash-bar-cart {
            background: linear-gradient(90deg, rgba(245, 192, 0, 0.55) 0%, rgba(245, 192, 0, 0.9) 100%);
          }
          .mdash-bar-fav {
            background: linear-gradient(90deg, rgba(255, 82, 82, 0.35) 0%, rgba(255, 82, 82, 0.65) 100%);
          }
          .mdash-bar-num {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            height: 100%;
            padding: 0 10px;
            font-weight: 800;
            font-size: 0.82rem;
            color: var(--secondary);
            font-variant-numeric: tabular-nums;
          }

          .mdash-empty {
            text-align: center;
            padding: 36px 20px;
            color: var(--text-secondary);
          }
          .mdash-empty p { margin: 14px 0 18px; line-height: 1.65; }
          .mdash-btn-outline {
            display: inline-block;
            padding: 10px 18px;
            border-radius: 12px;
            border: 2px solid var(--primary);
            color: var(--secondary);
            font-weight: 800;
            text-decoration: none;
            font-size: 0.9rem;
          }

          .mdash-tip {
            margin-top: 18px;
            padding: 18px 20px;
            border-radius: 14px;
            background: linear-gradient(180deg, var(--surface) 0%, var(--white) 100%);
            border: 1px solid var(--border);
          }
          .mdash-tip h3 { margin: 0 0 8px; font-size: 1.05rem; color: var(--secondary); }
          .mdash-tip p {
            margin: 0;
            color: var(--text-secondary);
            line-height: 1.75;
            font-size: 0.92rem;
          }
          .mdash-muted { color: var(--text-secondary); }
        `}})]})})};export{H as default};
