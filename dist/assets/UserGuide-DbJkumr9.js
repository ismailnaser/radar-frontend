import{r as n,j as e}from"./index-Cb-e3W_x.js";import{M as t}from"./MainLayout-uiN3L7_W.js";const h=()=>{const i=localStorage.getItem("user_type")||"shopper",r=!!localStorage.getItem("token"),a=localStorage.getItem("isGuest")==="true",d=r&&!a,s=i==="shopper"||!d,l=i==="merchant",c=n.useMemo(()=>l?"— التاجر":s?"— المتسوق":"",[l,s]);return e.jsxs(t,{children:[e.jsxs("div",{className:"guide-page",children:[e.jsxs("div",{className:"card guide-hero",children:[e.jsxs("h1",{className:"guide-title",children:["دليل المستخدم ",c]}),e.jsx("p",{className:"guide-sub",children:"رادار هو منصة تربط المتسوقين بالمتاجر والخدمات داخل غزة بسرعة وبطريقة سهلة: اكتشف، قارن، احفظ، واطلب."})]}),s?e.jsxs("section",{className:"card guide-section","aria-label":"دليل المتسوق",children:[e.jsx("h2",{className:"guide-h2",children:"للمتسوق"}),e.jsxs("div",{className:"guide-grid",children:[e.jsxs("div",{className:"guide-item",children:[e.jsx("div",{className:"guide-item__title",children:"البحث والاستكشاف"}),e.jsxs("ul",{className:"guide-list",children:[e.jsx("li",{children:"ابحث عن متجر/منتج/قسم من شريط البحث."}),e.jsx("li",{children:"استخدم الفلاتر لاختيار أكثر من قسم في نفس الوقت."}),e.jsx("li",{children:"تصفح المتاجر من صفحة المتاجر أو من الخريطة."})]})]}),e.jsxs("div",{className:"guide-item",children:[e.jsx("div",{className:"guide-item__title",children:"الخريطة"}),e.jsxs("ul",{className:"guide-list",children:[e.jsx("li",{children:"اعرض المتاجر داخل حدود غزة فقط."}),e.jsx("li",{children:"استخدم GPS أو تحديد يدوي لموقعك (اختياري)."}),e.jsx("li",{children:"فلترة نقاط الخدمات المجتمعية حسب الأقسام."})]})]}),e.jsxs("div",{className:"guide-item",children:[e.jsx("div",{className:"guide-item__title",children:"المفضلة والسلال"}),e.jsxs("ul",{className:"guide-list",children:[e.jsx("li",{children:"أضف منتجات للمفضلة أو للسلة (للمستخدمين المسجلين فقط)."}),e.jsx("li",{children:"أنشئ أكثر من سلة ورتّب مشترياتك."}),e.jsx("li",{children:"شارك السلة مع أي شخص عبر رابط مشاركة."})]})]}),e.jsxs("div",{className:"guide-item",children:[e.jsx("div",{className:"guide-item__title",children:"العروض الممولة"}),e.jsxs("ul",{className:"guide-list",children:[e.jsx("li",{children:"العرض الممول قد يكون بسعر خاص لمدة محددة."}),e.jsx("li",{children:"بعد انتهاء الإعلان يرجع سعر المنتج لسعر المتجر الأصلي (إن كان المنتج موجوداً بالمتجر)."})]})]})]})]}):null,l?e.jsxs("section",{className:"card guide-section","aria-label":"دليل التاجر",children:[e.jsx("h2",{className:"guide-h2",children:"للتاجر"}),e.jsxs("div",{className:"guide-grid",children:[e.jsxs("div",{className:"guide-item",children:[e.jsx("div",{className:"guide-item__title",children:"إدارة المتجر"}),e.jsxs("ul",{className:"guide-list",children:[e.jsx("li",{children:"حدّث معلومات المتجر من إعدادات المتجر."}),e.jsx("li",{children:"اختر أكثر من قسم لمتجرك (مثل ملابس + كوزمتكس)."}),e.jsx("li",{children:"أضف موقع المتجر على الخريطة ليظهر زر الموقع للزوار."})]})]}),e.jsxs("div",{className:"guide-item",children:[e.jsx("div",{className:"guide-item__title",children:"المنتجات"}),e.jsxs("ul",{className:"guide-list",children:[e.jsx("li",{children:"أضف منتجات جديدة مع صور ومع تفاصيل/ميزات المنتج."}),e.jsx("li",{children:"عدّل الأسعار بشكل مستمر لضمان دقة الطلبات."}),e.jsxs("li",{children:["إذا نفدت كمية منتج: يمكنك ",e.jsx("strong",{children:"أرشفة المنتج"})," حتى لا يظهر للمتسوقين، وعند توفره مجدداً يمكنك ",e.jsx("strong",{children:"إلغاء الأرشفة"}),"."]})]})]}),e.jsxs("div",{className:"guide-item",children:[e.jsx("div",{className:"guide-item__title",children:"الإعلانات الممولة"}),e.jsxs("ul",{className:"guide-list",children:[e.jsx("li",{children:"اطلب إعلان ممول لزيادة الوصول."}),e.jsx("li",{children:'تابع حالة الإعلان من "إعلاناتي الممولة".'}),e.jsx("li",{children:"إذا أنت غيّرت سعر المنتج داخل الإعلان الممول، فسيظهر للمتسوقين بالسعر الجديد خلال مدة الإعلان فقط (وقد يختلف عن سعر المنتج الأصلي في المتجر)."})]})]}),e.jsxs("div",{className:"guide-item",children:[e.jsx("div",{className:"guide-item__title",children:"الاشتراك والإحصائيات"}),e.jsxs("ul",{className:"guide-list",children:[e.jsx("li",{children:"راجع حالة الاشتراك وتجديده من صفحة الاشتراك."}),e.jsx("li",{children:"تابع إحصائيات المتجر والاهتمام بمنتجاتك."})]})]})]})]}):null,d&&i==="admin"?e.jsx("div",{className:"card guide-note",children:"هذا الدليل مخصص للمستخدم والتاجر فقط. كمدير يمكنك الرجوع للوحة الإدارة من القائمة."}):null]}),e.jsx("style",{children:`
        .guide-page{
          max-width: 1240px;
          margin-inline: auto;
          padding-inline: clamp(8px, 2.2vw, 22px);
          padding-bottom: 28px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .guide-hero{
          padding: clamp(18px, 3vw, 26px);
          background: linear-gradient(135deg, rgba(245,192,0,0.14) 0%, rgba(255,255,255,0.95) 55%);
          border: 1px solid rgba(245,192,0,0.35);
        }
        .guide-title{
          margin: 0 0 8px;
          font-weight: 950;
          color: var(--secondary);
          letter-spacing: -0.02em;
          font-size: clamp(1.35rem, 3.6vw, 1.9rem);
        }
        .guide-sub{
          margin: 0;
          color: var(--text-secondary);
          font-weight: 800;
          line-height: 1.65;
          max-width: 900px;
        }
        .guide-section{
          padding: 18px;
        }
        .guide-h2{
          margin: 0 0 12px;
          font-weight: 950;
          color: var(--secondary);
          font-size: 1.1rem;
        }
        .guide-grid{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
          gap: 12px;
        }
        .guide-item{
          border: 1px solid rgba(232, 230, 224, 0.95);
          background: rgba(255,255,255,0.92);
          border-radius: 16px;
          padding: 14px;
          box-shadow: 0 10px 26px rgba(26, 29, 38, 0.05);
        }
        .guide-item__title{
          font-weight: 950;
          color: var(--secondary);
          margin-bottom: 8px;
        }
        .guide-list{
          margin: 0;
          padding-inline-start: 18px;
          color: var(--text-secondary);
          font-weight: 800;
          line-height: 1.75;
        }
        .guide-note{
          padding: 14px 16px;
          color: var(--text-secondary);
          font-weight: 900;
          border: 1px solid rgba(2, 119, 189, 0.22);
          background: linear-gradient(135deg, rgba(230, 239, 232, 0.92) 0%, rgba(255,255,255,0.95) 100%);
        }
      `})]})};export{h as default};
