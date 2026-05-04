import{f as e,j as a}from"./index-Csgqv13q.js";import{M as n}from"./MainLayout-DO4qX-Uc.js";import{M as c}from"./message-square-EWSJiQHO.js";const i=e("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),s=e("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),g=()=>{const r=[{icon:a.jsx(s,{size:24}),title:"البريد الإلكتروني",detail:"radargaza@gmail.com",color:"#0984e3",action:{label:"تواصل عبر Gmail",href:"mailto:radargaza@gmail.com?subject=%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%20%D8%B1%D8%A7%D8%AF%D8%A7%D8%B1"}},{icon:a.jsx(i,{size:24}),title:"إنستجرام",detail:"radargaza",color:"#C13584",action:{label:"فتح إنستجرام",href:"https://www.instagram.com/radargaza/",target:"_blank",rel:"noreferrer"}},{icon:a.jsx(c,{size:24}),title:"واتساب الدعم",detail:"+970592377078",color:"#25D366",action:{label:"تواصل عبر واتساب",href:"https://wa.me/970592377078",target:"_blank",rel:"noreferrer",variant:"wa"}}];return a.jsx(n,{children:a.jsxs("div",{className:"contact-page",children:[a.jsx("div",{className:"contact-hero card flex-center",children:a.jsxs("div",{children:[a.jsx("h1",{className:"contact-title",children:"اتصل بنا"}),a.jsx("p",{className:"contact-subtitle",children:"نعمل على مدار الساعة (24/7) للإجابة على استفساراتكم."})]})}),a.jsx("div",{className:"contact-grid",children:r.map((t,o)=>a.jsxs("div",{className:"card contact-info-card",children:[a.jsx("div",{className:"contact-icon",style:{background:`${t.color}15`,color:t.color},children:t.icon}),a.jsx("h3",{className:"contact-info-title",children:t.title}),a.jsx("p",{className:"contact-info-detail",children:t.detail}),t.action?a.jsx("a",{className:`contact-action-btn${t.action.variant==="wa"?" contact-action-btn--wa":""}`,href:t.action.href,target:t.action.target,rel:t.action.rel,"aria-label":t.action.label,title:t.action.label,children:t.action.label}):null]},o))}),a.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .contact-page {
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
            padding-bottom: 28px;
          }
          .contact-hero {
            background: linear-gradient(150deg, var(--white) 0%, var(--primary-light) 55%, rgba(255, 214, 10, 0.18) 100%);
            color: var(--secondary);
            padding: clamp(28px, 5vw, 44px) 24px;
            margin-bottom: 22px;
            text-align: center;
            border-radius: var(--radius-xl);
            border: 1px solid rgba(255, 214, 10, 0.35);
            box-shadow: var(--shadow);
            overflow: hidden;
          }

          .contact-title {
            font-size: clamp(1.5rem, 4vw, 2rem);
            margin-bottom: 8px;
            letter-spacing: -0.03em;
            font-weight: 900;
          }

          .contact-subtitle {
            color: var(--text-secondary);
            font-weight: 600;
            font-size: 0.95rem;
            line-height: 1.55;
            max-width: 480px;
            margin-inline: auto;
          }

          .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
            gap: 18px;
          }

          .contact-info-card {
            padding: 28px;
            text-align: center;
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }

          .contact-info-card:hover {
            transform: translateY(-6px);
            box-shadow: var(--shadow-lg);
          }

          .contact-icon {
            width: 64px;
            height: 64px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 18px;
            box-shadow: var(--shadow-sm);
          }

          .contact-info-title { margin-bottom: 8px; }
          .contact-info-detail { font-weight: 800; font-size: 1.05rem; color: var(--text-primary); }
          .contact-action-btn{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 11px 16px;
            border-radius: 14px;
            font-weight: 900;
            text-decoration: none;
            border: 1.5px solid var(--border);
            background: rgba(255, 255, 255, 0.92);
            color: var(--secondary);
            transition: filter 0.15s ease, transform 0.12s ease, box-shadow 0.15s ease, border-color 0.15s ease;
            box-shadow: 0 8px 24px rgba(26, 29, 38, 0.06);
            width: 100%;
            margin-top: 12px;
          }
          .contact-action-btn:hover{
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 14px 32px rgba(245, 192, 0, 0.14);
          }
          .contact-action-btn:active{ transform: scale(0.99); }
          .contact-action-btn--wa{
            border-color: rgba(37, 211, 102, 0.35);
            background: linear-gradient(135deg, rgba(37, 211, 102, 0.16) 0%, rgba(255, 255, 255, 0.92) 100%);
          }
        `}})]})})};export{g as default};
