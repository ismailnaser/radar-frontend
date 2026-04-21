import{a as I,r as N,j as t}from"./index-BRoAb6GP.js";import{f as _}from"./apiErrors-Bccm4O3Y.js";const B="هل تريد تنفيذ هذا الإجراء؟",V=({children:g,onClick:i,type:o="button",variant:h="primary",loading:v=!1,disabled:x=!1,icon:u,style:k={},confirm:e,confirmTitle:l="تأكيد",successMessage:f,successTitle:w="تم",errorFallback:j="تعذرت العملية.",showErrorAlert:E=!0,...C})=>{const{showConfirm:c,showAlert:d}=I(),[F,m]=N.useState(!1),a=v||F,S=()=>e===!1?null:typeof e=="string"&&e.trim()?e.trim():B,A=async n=>{var p;const s=S();if(o==="submit"){const r=(p=n.currentTarget)==null?void 0:p.form,b=()=>{if(r){if(typeof r.checkValidity=="function"&&!r.checkValidity()){r.reportValidity();return}if(typeof r.requestSubmit=="function")r.requestSubmit();else{const y=new Event("submit",{bubbles:!0,cancelable:!0});r.dispatchEvent(y)&&r.submit()}}};if(s){if(n.preventDefault(),!await c(s,l))return;b();return}n.preventDefault(),b();return}if(i&&!(s&&!await c(s,l))){m(!0);try{await Promise.resolve(i(n)),f&&await d(f,w)}catch(r){E&&await d(_(r,j),"خطأ")}finally{m(!1)}}};return t.jsxs("button",{type:o,onClick:A,className:`btn-${h} ${a?"loading":""}`,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",...k},...C,disabled:x||a,children:[a?t.jsx("span",{className:"spinner"}):t.jsxs(t.Fragment,{children:[u&&t.jsx("span",{className:"btn-icon",children:u}),g]}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .spinner {
          width: 22px;
          height: 22px;
          border: 2px solid rgba(26, 29, 38, 0.2);
          border-top-color: var(--secondary);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .btn-primary.loading {
          background: linear-gradient(180deg, var(--primary-muted) 0%, var(--primary) 100%);
          opacity: 0.92;
        }
        .btn-danger { background: #FF5252; color: #fff; border: none; border-radius: var(--radius-pill); }
        .btn-danger:hover { background: #e53935; }
      `}})]})};export{V as C};
