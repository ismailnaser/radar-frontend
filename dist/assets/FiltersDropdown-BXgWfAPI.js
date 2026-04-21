import{f as O,r as i,j as e,ae as Q,af as W}from"./index-CPb1Gn6I.js";const B=O("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);function E(b){return String(b||"").trim().toLowerCase()}function T({buttonLabel:b="فلاتر",allLabel:g="الكل",title:v="اختر الفلاتر",options:o=[],selectedIds:s=[],onChangeSelectedIds:a,maxHeight:L=320,requireConfirm:d=!0,confirmLabel:$="تأكيد",cancelLabel:M="إلغاء",className:k="",buttonClassName:j=""}){const[p,f]=i.useState(!1),[_,R]=i.useState(""),h=i.useRef(null),m=i.useRef(null),[y,x]=i.useState([]),N=d?y:s,l=i.useMemo(()=>new Set((N||[]).map(t=>Number(t))),[N]),z=i.useMemo(()=>{const r=E(_);return r?(o||[]).filter(t=>E(t.label).includes(r)):o||[]},[o,_]),D=i.useMemo(()=>{const r=new Map((o||[]).map(n=>[Number(n.id),n.label]));return Array.from(l).map(n=>r.get(Number(n))).filter(Boolean).join("، ")||g},[o,l,g]);i.useEffect(()=>{if(!p)return;d&&x(Array.isArray(s)?s:[]);const r=t=>{h.current&&h.current.contains(t.target)||m.current&&m.current.contains(t.target)||f(!1)};return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r,{passive:!0}),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r)}},[p]);const u=l.size,F=r=>{const t=Number(r);if(!Number.isFinite(t))return;const c=new Set(l);c.has(t)?c.delete(t):c.add(t);const n=Array.from(c);if(d){x(n);return}typeof a=="function"&&a(n)},A=()=>{if(d){x([]);return}a==null||a([])},H=()=>{d&&(a==null||a(Array.isArray(y)?y:[]),f(!1))},w=()=>{d&&x(Array.isArray(s)?s:[]),f(!1)};return e.jsxs("div",{className:`filters-dd${k?` ${k}`:""}`,ref:h,children:[e.jsx("div",{className:"filters-dd__btnwrap",children:e.jsxs("button",{type:"button",className:`filters-dd__btn${j?` ${j}`:""}`,onClick:()=>f(r=>!r),"aria-haspopup":"dialog","aria-expanded":p,children:[e.jsx(B,{size:18,strokeWidth:2,"aria-hidden":!0}),e.jsx("span",{children:b}),u>0?e.jsx("span",{className:"filters-dd__badge",children:u}):null]})}),p&&typeof document<"u"?Q.createPortal(e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"filters-dd__backdrop","aria-label":"إغلاق الفلاتر",onClick:w}),e.jsxs("div",{className:"filters-dd__panel",role:"dialog","aria-label":v,ref:m,children:[e.jsxs("div",{className:"filters-dd__head",children:[e.jsx("strong",{className:"filters-dd__title",children:v}),e.jsx("button",{type:"button",className:"filters-dd__close",onClick:w,"aria-label":"إغلاق",children:e.jsx(W,{size:18,strokeWidth:2,"aria-hidden":!0})})]}),e.jsx("div",{className:"filters-dd__search",children:e.jsx("input",{type:"search",value:_,onChange:r=>R(r.target.value),placeholder:"ابحث داخل الفلاتر…",className:"filters-dd__search-input"})}),e.jsxs("div",{className:"filters-dd__actions",children:[e.jsx("button",{type:"button",className:`filters-dd__chip${u===0?" filters-dd__chip--on":""}`,onClick:A,children:g}),u>0?e.jsx("button",{type:"button",className:"filters-dd__chip filters-dd__chip--danger",onClick:A,children:"مسح"}):null]}),e.jsxs("div",{className:"filters-dd__picked","aria-label":"الفلاتر المختارة",children:["المحدد: ",D]}),e.jsxs("div",{className:"filters-dd__list",style:{maxHeight:L},children:[z.map(r=>{const t=l.has(Number(r.id));return e.jsxs("label",{className:`filters-dd__row${t?" filters-dd__row--on":""}`,children:[e.jsx("input",{type:"checkbox",checked:t,onChange:()=>F(r.id)}),e.jsx("span",{children:r.label})]},r.id)}),z.length===0?e.jsx("div",{className:"filters-dd__empty",children:"لا توجد نتائج."}):null]}),d?e.jsxs("div",{className:"filters-dd__footer",children:[e.jsx("button",{type:"button",className:"filters-dd__footer-btn filters-dd__footer-btn--ghost",onClick:w,children:M}),e.jsx("button",{type:"button",className:"filters-dd__footer-btn filters-dd__footer-btn--primary",onClick:H,children:$})]}):null]})]}),document.body):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .filters-dd{ position: relative; display:inline-flex; }
        .filters-dd__btnwrap{ display:flex; flex-direction: column; gap: 4px; align-items: flex-start; }
        .filters-dd__btn{
          display:inline-flex; align-items:center; gap:8px;
          border-radius: 999px;
          padding: 10px 12px;
          border: 1px solid rgba(232, 230, 224, 0.95);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 2px 12px rgba(26, 29, 38, 0.06);
          font-weight: 900;
          font-family: inherit;
          cursor: pointer;
          color: var(--secondary);
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        .filters-dd__summary{
          max-width: min(420px, 88vw);
          font-size: 0.74rem;
          font-weight: 800;
          color: rgba(26, 29, 38, 0.62);
          line-height: 1.35;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-inline: 6px;
        }
        .filters-dd__summary--all{
          color: rgba(26, 29, 38, 0.5);
        }
        .filters-dd__badge{
          min-width: 22px; height: 22px; padding: 0 6px;
          border-radius: 999px;
          background: linear-gradient(180deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: var(--secondary);
          display:inline-flex; align-items:center; justify-content:center;
          font-size: 0.78rem;
          box-shadow: var(--shadow-gold);
        }
        .filters-dd__backdrop{
          position: fixed;
          inset: 0;
          border: none;
          background: rgba(0,0,0,0.22);
          z-index: 12000;
          cursor: default;
        }
        .filters-dd__panel{
          position: fixed;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: min(420px, 92vw);
          max-height: min(72vh, 560px);
          border-radius: 18px;
          background: rgba(255,255,255,0.98);
          border: 1px solid rgba(232, 230, 224, 0.95);
          box-shadow: 0 18px 46px rgba(26, 29, 38, 0.18);
          z-index: 12001;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .filters-dd__head{
          display:flex; align-items:center; justify-content: space-between; gap: 10px;
          padding: 10px 12px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          background: linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.86) 100%);
          flex: 0 0 auto;
        }
        .filters-dd__title{ font-weight: 950; color: var(--secondary); }
        .filters-dd__close{
          border:none; background:transparent; cursor:pointer;
          width: 36px; height: 36px; border-radius: 12px;
          display:inline-flex; align-items:center; justify-content:center;
          color: var(--text-secondary);
        }
        .filters-dd__close:hover{ background: rgba(26,29,38,0.06); }
        .filters-dd__search{ padding: 10px 12px; }
        .filters-dd__search{ flex: 0 0 auto; }
        .filters-dd__search-input{
          width: 100%;
          border: 1.5px solid rgba(232, 230, 224, 0.95);
          background: rgba(255,255,255,0.92);
          border-radius: 12px;
          padding: 10px 12px;
          font-weight: 800;
          outline: none;
        }
        .filters-dd__actions{
          padding: 0 12px 10px;
          display:flex; flex-wrap: wrap; gap: 8px; align-items:center;
        }
        .filters-dd__actions{ flex: 0 0 auto; }
        .filters-dd__picked{
          padding: 0 12px 10px;
          font-size: 0.78rem;
          font-weight: 850;
          color: rgba(26, 29, 38, 0.62);
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .filters-dd__picked{ flex: 0 0 auto; }
        .filters-dd__chip{
          border: 1.5px solid rgba(232, 230, 224, 0.95);
          background: rgba(255,255,255,0.92);
          color: var(--secondary);
          font-weight: 900;
          padding: 8px 12px;
          border-radius: 999px;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.84rem;
        }
        .filters-dd__chip--on{
          background: linear-gradient(180deg, var(--primary) 0%, var(--primary-hover) 100%);
          border-color: transparent;
          box-shadow: var(--shadow-gold);
        }
        .filters-dd__chip--danger{
          color: #c0392b;
          border-color: rgba(192,57,43,0.35);
          background: rgba(255,255,255,0.92);
        }
        .filters-dd__list{
          padding: 6px 12px 12px;
          overflow: auto;
          flex: 1 1 auto;
          min-height: 0;
        }
        .filters-dd__footer{
          padding: 10px 12px;
          border-top: 1px solid rgba(0,0,0,0.08);
          display:flex;
          gap: 10px;
          justify-content: flex-end;
          background: linear-gradient(180deg, rgba(255,255,255,0.86) 0%, rgba(255,255,255,0.96) 100%);
          flex: 0 0 auto;
        }
        .filters-dd__footer-btn{
          border-radius: 999px;
          padding: 10px 14px;
          font-weight: 950;
          font-family: inherit;
          cursor: pointer;
          border: 1.5px solid rgba(232, 230, 224, 0.95);
          background: rgba(255,255,255,0.92);
          color: var(--secondary);
        }
        .filters-dd__footer-btn--primary{
          background: linear-gradient(180deg, var(--primary) 0%, var(--primary-hover) 100%);
          border-color: transparent;
          box-shadow: var(--shadow-gold);
        }
        .filters-dd__footer-btn--ghost{
          background: rgba(255,255,255,0.92);
        }
        .filters-dd__row{
          display:flex;
          align-items:center;
          gap: 10px;
          padding: 10px 10px;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 850;
          color: var(--secondary);
        }
        .filters-dd__row input{ width: 16px; height: 16px; }
        .filters-dd__row:hover{ background: rgba(26,29,38,0.05); }
        .filters-dd__row--on{ background: rgba(245, 192, 0, 0.14); }
        .filters-dd__empty{ padding: 10px 10px; color: var(--text-secondary); font-weight: 800; }

        /* Important: keep footer from overlapping scrollable list */
      `}})]})}export{T as F};
