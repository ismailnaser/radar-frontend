import{j as t}from"./index-DVWGhyA2.js";const l=({icon:r,type:i="text",placeholder:e,value:o,onChange:s,required:p=!1,error:n,...a})=>t.jsxs("div",{className:"input-group-container",style:{marginBottom:"12px"},children:[t.jsxs("div",{className:`input-group ${n?"input-group--error":""}`,children:[r&&t.jsx("div",{className:"input-icon",children:r}),t.jsx("input",{type:i,placeholder:e,value:o,onChange:s,required:p,...a})]}),n&&t.jsx("p",{className:"input-error-msg",children:n}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .input-group-container { display: flex; flex-direction: column; width: 100%; }
        .input-group--error input {
          border-color: #e53935 !important;
          background: #fff8f8 !important;
        }
        .input-error-msg {
          color: #c62828;
          font-size: 0.78rem;
          text-align: right;
          margin-top: 6px;
          margin-inline-end: 4px;
          font-weight: 700;
        }
      `}})]});export{l as C};
