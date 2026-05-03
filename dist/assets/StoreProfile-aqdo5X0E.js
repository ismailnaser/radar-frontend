import{h as Ee,u as Le,b as Re,a as Te,r as d,A as H,a9 as De,w as We,a5 as He,j as r,L as Qe,S as me,a6 as Ue,aa as Oe,ab as Ve,y as be,z as Q,B as Ye,C as he}from"./index-Cb-e3W_x.js";import{M as Ge,S as Ke,H as U,k as Je}from"./MainLayout-uiN3L7_W.js";import{I as we}from"./ImageCarousel-CFb_e9P0.js";import{v as M}from"./productImages-BYfYSUZM.js";import{s as Xe}from"./storeHours-U_KU_St1.js";import{a as O}from"./storeCategories-CcVhHY8P.js";import{f as E}from"./apiErrors-Bccm4O3Y.js";import{c as Ze}from"./cartAccess-DdSevxjw.js";import{L as er}from"./loader-2-BDTyrYYV.js";import{M as ye}from"./map-pin-DjYr9tEA.js";import{M as ve}from"./message-circle-BLuxijuQ.js";import{S as je}from"./star-jaqS0uco.js";import{I as rr}from"./image-OYGMXdWF.js";import{C as or,a as tr}from"./chevron-up-CoKkHuO5.js";import"./chevron-left-CURlWANN.js";function ir(c){if(c==null||c==="")return"";const p="٠١٢٣٤٥٦٧٨٩",b="۰۱۲۳۴۵۶۷۸۹",n="0123456789";let w="";for(const y of String(c)){let m=p.indexOf(y);if(m>=0){w+=n[m];continue}if(m=b.indexOf(y),m>=0){w+=n[m];continue}w+=y}return w.replace(/\D/g,"")}function sr(c){let p=ir(c);return!p||(p.length===10&&p[0]==="0"&&p[1]==="5"?p=`970${p.slice(1)}`:p.length===9&&p[0]==="5"&&(p=`970${p}`),p.length<8)?null:`https://wa.me/${p}`}const Ne=(c,p,b)=>{const n=parseInt(String(c),10);return Number.isNaN(n)?p:Math.min(b,Math.max(p,n))},V=c=>{const p=Number(c==null?void 0:c.latitude),b=Number(c==null?void 0:c.longitude);return!(!Number.isFinite(p)||!Number.isFinite(b)||Math.abs(p)<.25&&Math.abs(b)<.25)},jr=()=>{var ue,ge,xe;const{storeId:c}=Ee(),p=Le(),b=Re(),{showAlert:n,showPrompt:w,showSelect:y}=Te(),[m,Y]=d.useState(!0),[o,L]=d.useState(null),[G,z]=d.useState(""),[K,R]=d.useState({}),[ke,I]=d.useState({}),[C,A]=d.useState(null),[_,v]=d.useState(null),[F,j]=d.useState({}),[J,S]=d.useState({}),[h,N]=d.useState(!1),[X,Z]=d.useState(!1),[ar,$]=d.useState(null),k=d.useRef(null),[ee,re]=d.useState(null),oe=d.useRef(null),[te,ie]=d.useState(!1),[T,se]=d.useState({}),[D,ae]=d.useState({}),_e=localStorage.getItem("isGuest")==="true",x=!!localStorage.getItem("token")&&!_e,P=Ze(),ne=x&&localStorage.getItem("user_type")==="shopper",Se=async e=>{if(!ne){await n("التقييم متاح لحساب المتسوّق فقط (وليس وضع الزائر أو التاجر).","تنبيه");return}const t=c!=null?Number(c):o==null?void 0:o.id;if(t){Z(!0);try{const i=await Ve(t,e);L(s=>s&&{...s,rating_average:i.rating_average??s.rating_average,rating_count:i.rating_count??s.rating_count,my_rating:e}),await n("شكراً، تم حفظ تقييمك.","تم")}catch(i){await n(E(i,"تعذر إرسال التقييم."),"خطأ")}finally{Z(!1)}}},B=d.useCallback(async()=>{var e;if(!x){I({});return}try{const i=(await H())[0];if(!((e=i==null?void 0:i.items)!=null&&e.length)){I({});return}const s={};for(const l of i.items)s[l.product]=l.quantity;I(s)}catch{I({})}},[x]);d.useEffect(()=>{let e=!1;return(async()=>{var t,i,s,l,u;Y(!0),z("");try{const a=await De(c);if(!e){L(a);const f={},g=a.products||[];for(const Me of g)f[Me.id]=1;R(f)}}catch(a){if(!e){const f=(t=a==null?void 0:a.response)==null?void 0:t.status,g=((s=(i=a==null?void 0:a.response)==null?void 0:i.data)==null?void 0:s.detail)||((u=(l=a==null?void 0:a.response)==null?void 0:l.data)==null?void 0:u.error)||"";f===404&&String(g).includes("تم تعليق المتجر")?z("تم تعليق المتجر إدارياً."):z(f===404&&g?String(g):"تعذر تحميل بيانات المتجر"),L(null)}}finally{e||Y(!1)}})(),()=>{e=!0}},[c]),d.useEffect(()=>{var i;const e=(i=b.state)==null?void 0:i.scrollToProductId;if(e==null||e==="")return;const t=window.setTimeout(()=>{const s=document.querySelector(`[data-store-product-id="${String(e)}"]`);s&&typeof s.scrollIntoView=="function"&&(s.scrollIntoView({behavior:"smooth",block:"center"}),re(String(e)),window.setTimeout(()=>re(null),1600))},220);return()=>window.clearTimeout(t)},[b.state,c]),d.useEffect(()=>{const e=b.hash||"";if(!e||e==="#"||!e.startsWith("#sponsored-ad-")&&!e.startsWith("#product-")||m||!o)return;const t=decodeURIComponent(e.slice(1)),i=()=>{const l=document.getElementById(t);return!l||typeof l.scrollIntoView!="function"?!1:(l.scrollIntoView({behavior:"smooth",block:"center"}),!0)};if(i())return;const s=window.setTimeout(()=>{i()},260);return()=>window.clearTimeout(s)},[b.hash,m,o,c]),d.useEffect(()=>{B()},[B,c]),d.useEffect(()=>{const e=oe.current;if(!e){ie(!1);return}const t=()=>{const s=e.scrollWidth-e.clientWidth>6;ie(s)};t();const i=typeof ResizeObserver<"u"?new ResizeObserver(t):null;return i&&i.observe(e),window.addEventListener("resize",t),()=>{i&&i.disconnect(),window.removeEventListener("resize",t)}},[(ue=o==null?void 0:o.sponsored_ads)==null?void 0:ue.length,m]),d.useEffect(()=>{se({}),ae({})},[o==null?void 0:o.id,(ge=o==null?void 0:o.sponsored_ads)==null?void 0:ge.length,(xe=o==null?void 0:o.products)==null?void 0:xe.length]),d.useEffect(()=>{if(!x||!(o!=null&&o.id)){v(null),j({}),S({});return}let e=!1;return(async()=>{var t;try{const[i,s]=await Promise.all([We(),He()]);if(e)return;const l={},u={};for(const a of i||[]){const f=a.product??((t=a.product_details)==null?void 0:t.id);f!=null&&(l[f]=a.id),(a.product==null||a.product==="")&&a.sponsored_ad!=null&&(u[a.sponsored_ad]=a.id)}if(j(l),S(u),o.is_owner)v(null);else{const a=(s||[]).find(f=>{var g;return Number(f.store)===Number(o.id)||Number((g=f.store_details)==null?void 0:g.id)===Number(o.id)});v((a==null?void 0:a.id)??null)}}catch{e||(j({}),S({}),v(null))}})(),()=>{e=!0}},[x,o==null?void 0:o.id,o==null?void 0:o.is_owner]);const ze=()=>{const e=Number(o==null?void 0:o.latitude),t=Number(o==null?void 0:o.longitude);if(!Number.isFinite(e)||!Number.isFinite(t)){n("لا توجد إحداثيات خريطة محفوظة لهذا المتجر.");return}p("/map",{state:{mapFocus:{lat:e,lng:t,storeId:o.id},mapPreset:{mode:"stores",category:(o==null?void 0:o.category)??null}}})},Ie=e=>{se(t=>({...t,[e]:!t[e]}))},Ce=e=>{ae(t=>({...t,[e]:!t[e]}))},W=e=>e.product?`p-${e.product}`:`ad-${e.id}`,Ae=async e=>{if(!P){n("ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.");return}A(W(e));try{const t={productId:e.product??null,sponsoredAdId:e.id,quantity:1,note:"",success:"تمت إضافة العرض للسلة."},i=await w("أضف ملاحظة على هذا المنتج داخل السلة (اختياري). اترك الحقل فارغاً إذا لا تريد.","مثال: بدون بصل / توصيل بعد العصر","ملاحظة على المنتج","");t.note=i==null?"":String(i).trim(),k.current=t,$(t);const s=await H(),l=Array.isArray(s)?s:[];if(l.length===0){await q(t,{isFirstCart:!0});return}const u=l.map(f=>({id:String(f.id),label:f.name||`سلة #${f.id}`,value:f.id,badge:Array.isArray(f.items)?f.items.length:0})),a=await y("اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",u,{primaryActionLabel:"سلة جديدة"});if(a==null)return;if(a==="__primary__"){await q();return}await le({id:a})}catch(t){n(E(t,"تعذرت الإضافة للسلة."),"خطأ")}finally{A(null)}},q=async(e,{isFirstCart:t=!1}={})=>{const i=e??k.current;if(!i){await n("تعذر تحديد المنتج المراد إضافته للسلة. جرّب مرة أخرى.","خطأ");return}const s=await w(t?"لا توجد لديك سلال بعد. اكتب اسماً لسلتك الأولى — يُضاف المنتج إليها مباشرة.":"اكتب اسماً للسلة الجديدة ثم يُضاف المنتج إليها.",t?"مثال: سلة اليوم":"اسم السلة...",t?"إنشاء أول سلة":"سلة جديدة");if(!s||!String(s).trim())return;const l=await Ye(String(s).trim());await he(l.id,i.productId??null,i.quantity??1,i.sponsoredAdId??null,i.note??""),await B(),await n(i.success||"تمت الإضافة للسلة.","تم"),$(null),k.current=null},le=async e=>{const t=k.current;if(!t){await n("تعذر تحديد المنتج المراد إضافته للسلة. جرّب مرة أخرى.","خطأ");return}await he(e.id,t.productId??null,t.quantity??1,t.sponsoredAdId??null,t.note??""),await B(),await n(t.success||"تمت الإضافة للسلة.","تم"),$(null),k.current=null},Fe=async e=>{if(!x){n("سجّل الدخول لاستخدام المفضلة. وضع الزائر لا يدعمها.");return}if(!h){N(!0);try{if(!e.product){const i=J[e.id];if(i)await be(i),S(s=>{const l={...s};return delete l[e.id],l}),n("أُزيل العرض المستقل من المفضلة.");else{const s=await Q(null,e.id);S(l=>({...l,[e.id]:s.id})),n("أُضيف عرض الإعلان للمفضلة — يُزال تلقائياً عند انتهاء مدة الإعلان.")}return}const t=await Q(e.product,e.id);j(i=>({...i,[e.product]:t.id})),n("أُضيف المنتج للمفضلة.")}catch(t){n(E(t,"تعذرت العملية."),"خطأ")}finally{N(!1)}}},$e=async()=>{var e,t,i,s,l;if(!x){n("سجّل الدخول لاستخدام المفضلة.");return}if(!o.is_owner&&!h){N(!0);try{if(_)await Ue(_),v(null),n("أُزيل المحل من المفضلة.");else{const u=await Oe(o.id);v(u.id),n("أُضيف المحل للمفضلة.")}}catch(u){const a=((i=(t=(e=u==null?void 0:u.response)==null?void 0:e.data)==null?void 0:t.store)==null?void 0:i[0])||((l=(s=u==null?void 0:u.response)==null?void 0:s.data)==null?void 0:l.detail);n(a?String(a):"تعذرت العملية.")}finally{N(!1)}}},Pe=async e=>{if(!x){n("سجّل الدخول لاستخدام المفضلة.");return}if(o.is_owner)return;const t=F[e.id];if(!h){N(!0);try{if(t)await be(t),j(i=>{const s={...i};return delete s[e.id],s}),n("أُزيل المنتج من المفضلة.");else{const i=await Q(e.id);j(s=>({...s,[e.id]:i.id})),n("أُضيف المنتج للمفضلة.")}}catch{n("تعذرت العملية — ربما المنتج مضاف مسبقاً.")}finally{N(!1)}}},de=((o==null?void 0:o.products)||[]).filter(e=>{const t=e.is_archived;return t!==!0&&t!==1&&t!=="true"&&t!=="True"}),pe=(e,t)=>{R(i=>({...i,[e]:Ne(t,1,9999)}))},ce=(e,t)=>{R(i=>({...i,[e]:Ne((i[e]??1)+t,1,9999)}))},fe=o!=null?o.contact_whatsapp_url||sr(o.contact_whatsapp):null,Be=o!=null?Xe(o.business_hours_weekly):!1,qe=async e=>{if(o!=null&&o.is_owner)return;if(!P){n("ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.");return}const t=K[e.id]??1;A(e.id);try{const i={productId:e.id,sponsoredAdId:null,quantity:t,note:"",success:`تمت إضافة «${e.name}» للسلة.`},s=await w("أضف ملاحظة على هذا المنتج داخل السلة (اختياري). اترك الحقل فارغاً إذا لا تريد.","مثال: بدون بصل / توصيل بعد العصر","ملاحظة على المنتج","");i.note=s==null?"":String(s).trim(),k.current=i,$(i);const l=await H(),u=Array.isArray(l)?l:[];if(u.length===0){await q(i,{isFirstCart:!0});return}const a=u.map(g=>({id:String(g.id),label:g.name||`سلة #${g.id}`,value:g.id,badge:Array.isArray(g.items)?g.items.length:0})),f=await y("اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",a,{primaryActionLabel:"سلة جديدة"});if(f==null)return;if(f==="__primary__"){await q();return}await le({id:f})}catch(i){n(E(i,"تعذر إضافة المنتج للسلة."),"خطأ")}finally{A(null)}};return r.jsxs(Ge,{children:[r.jsxs("div",{style:{maxWidth:1240,marginInline:"auto",paddingBottom:48,paddingInline:"clamp(8px, 2.2vw, 22px)",boxSizing:"border-box"},children:[m&&r.jsxs("div",{className:"card flex-center",style:{padding:48,gap:12},children:[r.jsx(er,{className:"spin",size:28}),"جاري التحميل..."]}),!m&&G&&r.jsx("div",{className:"card",style:{color:"#c62828"},children:G}),!m&&o&&r.jsxs(r.Fragment,{children:[r.jsx("header",{className:"card store-profile-hero",children:r.jsxs("div",{className:"store-profile-hero-body",children:[r.jsx("div",{className:"flex-between store-profile-hero-top",children:r.jsx("div",{className:"store-profile-hero-logo",children:o.logo?r.jsx("img",{src:o.logo,alt:"",className:"store-profile-hero-logo-img",loading:"lazy",width:"220",height:"220"}):r.jsx(Ke,{size:40,color:"var(--text-secondary)"})})}),r.jsxs("div",{className:"flex-between store-profile-hero-row",children:[r.jsx("h1",{className:"store-profile-title",children:o.store_name}),V(o)||x&&!o.is_owner?r.jsxs("div",{className:"store-profile-hero-actions",children:[V(o)?r.jsx("button",{type:"button",onClick:ze,title:"عرض موقع المتجر على الخريطة","aria-label":"عرض على الخريطة",className:"store-profile-icon-btn",children:r.jsx(ye,{size:26,color:"var(--secondary)"})}):null,x&&!o.is_owner?r.jsx("button",{type:"button",onClick:$e,disabled:h,title:_?"إزالة من المفضلة":"إضافة للمفضلة","aria-label":"مفضلة المحل",className:`store-profile-icon-btn ${_?"store-profile-icon-btn--fav":""}`,style:{cursor:h?"wait":void 0},children:r.jsx(U,{size:26,color:"#e91e63",fill:_?"#e91e63":"none"})}):null]}):null]}),r.jsx("div",{className:"store-profile-subtitle",children:O(o)}),r.jsxs("div",{className:"store-profile-contact",children:[r.jsxs("div",{className:"store-profile-contact-head",children:[r.jsx(ve,{size:18,"aria-hidden":!0}),"تواصل معنا"]}),fe?r.jsxs("a",{href:fe,target:"_blank",rel:"noopener noreferrer",className:"store-profile-whatsapp-btn",children:[r.jsx(ve,{size:20}),"مراسلة عبر واتساب"]}):r.jsxs("div",{children:[r.jsx("p",{className:"store-profile-contact-note",children:"لم يُضف رقم واتساب للتواصل بعد — يظهر الزر تلقائياً عندما يضيفه صاحب المتجر من إعدادات المتجر."}),o.is_owner?r.jsx(Qe,{to:"/merchant/settings",className:"store-profile-settings-link",children:"فتح إعدادات المتجر لإضافة الرقم"}):null]})]}),Array.isArray(o.store_features)&&o.store_features.filter(Boolean).length>0?r.jsx("div",{className:"store-profile-features",children:o.store_features.filter(Boolean).map((e,t)=>r.jsx("span",{className:"store-feature-chip",children:e},`${t}-${e}`))}):null,r.jsxs("div",{className:"store-profile-box",children:[r.jsxs("div",{className:"store-profile-box-row",children:[r.jsx("span",{className:"store-profile-box-title",children:"مواعيد العمل"}),Be?o.is_open_now===!0?r.jsx("span",{className:"store-profile-pill store-profile-pill--open",children:"مفتوح الآن"}):o.is_open_now===!1?r.jsx("span",{className:"store-profile-pill store-profile-pill--closed",children:"مغلق الآن"}):r.jsx("span",{className:"store-profile-pill store-profile-pill--muted",children:"—"}):r.jsx("span",{className:"store-profile-pill store-profile-pill--muted",children:"لا يوجد مواعيد عمل محددة"})]}),(o.business_hours_note||"").trim()?r.jsx("div",{className:"store-profile-note",children:o.business_hours_note.trim()}):null]}),r.jsxs("div",{className:"store-profile-box store-profile-box--rating",children:[r.jsx("div",{className:"store-profile-box-title",children:"تقييم المتجر (من 5 نجوم)"}),o.rating_count>0&&o.rating_average!=null?r.jsxs("div",{dir:"ltr",className:"store-profile-rating-row",children:[r.jsx("span",{className:"store-profile-rating-avg",children:Number(o.rating_average).toFixed(1)}),r.jsx("span",{className:"star-row-readonly","aria-hidden":!0,children:[1,2,3,4,5].map(e=>r.jsx(je,{size:22,color:"#f5c000",fill:e<=Math.round(Number(o.rating_average))?"#f5c000":"none",strokeWidth:e<=Math.round(Number(o.rating_average))?0:1.5},e))}),r.jsxs("span",{className:"store-profile-rating-count",children:["بناءً على ",o.rating_count," تقييم"]})]}):r.jsx("p",{className:"store-profile-muted",children:"لا يوجد تقييمات بعد."}),ne&&!o.is_owner?r.jsxs("div",{children:[r.jsx("div",{className:"store-profile-rate-hint",children:o.my_rating?"تقييمك الحالي (اضغط نجمة لتغييره)":"قيّم هذا المحل"}),r.jsx("div",{dir:"ltr",className:"store-profile-rate-row",children:[1,2,3,4,5].map(e=>r.jsx("button",{type:"button",disabled:X,onClick:()=>Se(e),"aria-label":`تقييم ${e} من 5`,className:"store-profile-star-btn",style:{cursor:X?"wait":void 0},children:r.jsx(je,{size:30,color:"#f5c000",fill:e<=(o.my_rating||0)?"#f5c000":"none",strokeWidth:e<=(o.my_rating||0)?0:1.5})},e))})]}):o.is_owner?r.jsx("p",{className:"store-profile-muted store-profile-muted--tight",children:"يظهر تقييمك الإجمالي للزوار؛ التقييم من حسابات المتسوّقين فقط."}):x?null:r.jsxs("button",{type:"button",className:"store-profile-rating-login-cta",onClick:()=>p("/login"),children:[r.jsx("span",{className:"store-profile-rating-login-cta-icon","aria-hidden":!0,children:r.jsx(Je,{size:18,strokeWidth:2})}),r.jsx("span",{className:"store-profile-rating-login-cta-label",children:"سجّل دخول كمتسوّق لتتمكن من التقييم"})]})]}),o.description?r.jsx("p",{className:"store-profile-desc",children:o.description}):null,(o.location_address||"").trim()&&V(o)?r.jsxs("div",{className:"store-profile-box",children:[r.jsxs("div",{className:"store-profile-loc-head",children:[r.jsx(ye,{size:18,"aria-hidden":!0}),"الموقع (نصاً)"]}),r.jsx("div",{className:"store-profile-loc-text",children:o.location_address.trim()})]}):null]})}),Array.isArray(o.sponsored_ads)&&o.sponsored_ads.length>0&&r.jsxs("section",{className:"store-profile-sponsored",children:[r.jsx("h2",{className:"store-profile-section-title",children:"عروض وإعلانات"}),r.jsxs("div",{className:`store-profile-sponsored-rail-wrap${te?" store-profile-sponsored-rail-wrap--hint":""}`,children:[r.jsx("div",{className:"store-profile-sponsored-rail",ref:oe,children:o.sponsored_ads.map(e=>r.jsxs("div",{id:`sponsored-ad-${e.id}`,className:"store-profile-sponsored-card",children:[r.jsxs("div",{className:"store-profile-sponsored-media",children:[M(e).length>0?r.jsx(we,{images:M(e),height:100,borderRadius:12}):r.jsx("div",{className:"store-profile-sponsored-media-fallback","aria-label":"لا توجد صورة للإعلان",children:"إعلان"}),o.is_owner?null:r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",className:`store-profile-sponsored-fab store-profile-sponsored-fab--cart${P?"":" store-profile-sponsored-fab--muted"}`,onClick:t=>{t.stopPropagation(),Ae(e)},disabled:C===W(e),title:"إضافة إلى السلة","aria-label":"إضافة إلى السلة",style:{cursor:C===W(e)?"wait":"pointer"},children:r.jsx(me,{size:16,strokeWidth:2,"aria-hidden":!0})}),r.jsx("button",{type:"button",className:`store-profile-sponsored-fab store-profile-sponsored-fab--fav${x?"":" store-profile-sponsored-fab--muted"}`,onClick:t=>{t.stopPropagation(),Fe(e)},disabled:h,title:e.product?"مفضلة":"مفضلة — يُزال عند انتهاء الإعلان","aria-label":"مفضلة",style:{cursor:h?"wait":"pointer"},children:r.jsx(U,{size:16,color:"#e91e63",fill:e.product?F[e.product]?"#e91e63":"none":J[e.id]?"#e91e63":"none","aria-hidden":!0})})]})]}),r.jsxs("div",{className:"store-profile-sponsored-body",children:[r.jsx("div",{className:"store-profile-sponsored-pill",children:"إعلان ممول"}),r.jsx("div",{className:"store-profile-sponsored-title",children:e.title}),r.jsxs("div",{className:"store-profile-sponsored-meta",children:[r.jsx("span",{className:"store-profile-sponsored-store",children:o.store_name}),O(o)?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"store-profile-sponsored-dot","aria-hidden":!0}),r.jsx("span",{children:O(o)})]}):null]}),Number(e.product_price)>0?r.jsxs("div",{className:"store-profile-sponsored-price-row",children:[e.catalog_product_price!=null&&e.catalog_product_price!==""&&Math.abs(Number(e.catalog_product_price)-Number(e.product_price))>1e-9?r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:"store-profile-sponsored-old",children:[Number(e.catalog_product_price).toFixed(2)," ₪"]}),r.jsx("span",{className:"store-profile-sponsored-badge",children:"سعر العرض"})]}):null,r.jsxs("span",{className:"store-profile-sponsored-now",children:[Number(e.product_price).toFixed(2)," ₪"]})]}):null,r.jsxs("div",{className:"store-profile-sponsored-desc-wrap",children:[r.jsx("div",{className:`store-profile-sponsored-desc${T[e.id]?" store-profile-sponsored-desc--expanded":""}`,children:e.description}),String(e.description||"").length>120?r.jsx("button",{type:"button",className:"store-profile-desc-toggle",onClick:()=>Ie(e.id),"aria-expanded":T[e.id]?"true":"false",children:T[e.id]?"عرض أقل":"عرض المزيد"}):null]}),r.jsx("button",{type:"button",className:"store-profile-open-details-btn",onClick:()=>p(`/stores/${c}/item/sponsored/${e.id}`),children:"عرض التفاصيل"})]})]},e.id))}),te?r.jsx("div",{className:"store-profile-sponsored-scroll-hint",children:"اسحب لعرض المزيد"}):null]})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"store-profile-section-title store-profile-section-title--products",children:"المنتجات"}),de.length===0?r.jsxs("div",{className:"card",style:{color:"var(--text-secondary)",lineHeight:1.65},children:[r.jsx("div",{children:"لا توجد منتجات متاحة للمتسوّقين حالياً."}),o.is_owner?r.jsx("div",{style:{marginTop:10,fontSize:"0.9rem"},children:"إن كنت صاحب/ة هذا المتجر: المنتجات «المؤرشفة» من صفحة «منتجاتي» لا تظهر هنا — عطّل الأرشفة ليظهر المنتج للجمهور."}):null]}):r.jsx("div",{className:"store-profile-products-grid",children:de.map(e=>{const t=ke[e.id];return r.jsxs("article",{id:`product-${e.id}`,className:"card store-profile-product-card","data-store-product-id":e.id,"data-flash":ee!=null&&String(ee)===String(e.id)?"true":"false",children:[r.jsxs("div",{className:"store-profile-product-media",children:[x&&!o.is_owner?r.jsx("button",{type:"button",onClick:()=>Pe(e),disabled:h,title:F[e.id]?"إزالة من المفضلة":"إضافة للمفضلة","aria-label":"مفضلة المنتج",className:"store-profile-product-favbtn",style:{cursor:h?"wait":"pointer"},children:r.jsx(U,{size:18,color:"#e91e63",fill:F[e.id]?"#e91e63":"none"})}):null,M(e).length>0?r.jsx("div",{className:"store-profile-product-media-inner",children:r.jsx(we,{images:M(e),fill:!0,borderRadius:0,className:"store-product-grid-carousel"})}):r.jsx(rr,{size:32,color:"var(--text-light)"}),r.jsx("div",{className:"store-profile-product-media-overlay",children:r.jsx("div",{className:"store-profile-product-media-name",children:e.name})}),o.is_owner?null:r.jsx("button",{type:"button",className:`store-profile-product-media-cartbtn${P?"":" store-profile-product-media-cartbtn--muted"}`,onClick:()=>qe(e),disabled:C===e.id,title:"إضافة إلى السلة","aria-label":"إضافة إلى السلة",style:{cursor:C===e.id?"wait":"pointer"},children:r.jsx(me,{size:18})})]}),r.jsxs("div",{className:"store-profile-product-body",children:[e.description?r.jsxs("div",{className:"store-profile-product-desc-wrap",children:[r.jsx("div",{className:`store-profile-product-desc${D[e.id]?" store-profile-product-desc--expanded":""}`,children:e.description}),String(e.description||"").length>120?r.jsx("button",{type:"button",className:"store-profile-desc-toggle",onClick:()=>Ce(e.id),"aria-expanded":D[e.id]?"true":"false",children:D[e.id]?"عرض أقل":"عرض المزيد"}):null]}):null,Array.isArray(e.product_features)&&e.product_features.filter(Boolean).length>0?r.jsx("div",{className:"store-profile-product-feats",children:e.product_features.map(i=>String(i||"").trim()).filter(Boolean).slice(0,5).map((i,s)=>r.jsx("span",{className:"store-profile-product-feat",title:i,children:i},s))}):null,r.jsxs("div",{className:"store-profile-product-price",children:[e.price," ₪"]}),t!=null&&t>0&&r.jsxs("div",{className:"store-profile-in-cart",children:["في السلة: ",t]}),r.jsx("button",{type:"button",className:"store-profile-open-details-btn",onClick:()=>p(`/stores/${c}/item/product/${e.id}`),children:"عرض التفاصيل"}),r.jsxs("div",{className:"flex-between store-profile-qty-row",children:[r.jsx("button",{type:"button",onClick:()=>ce(e.id,-1),className:"store-profile-qty-btn","aria-label":"نقص الكمية",children:r.jsx(or,{size:18})}),r.jsx("input",{type:"text",inputMode:"numeric",value:K[e.id]??1,onChange:i=>pe(e.id,i.target.value),onBlur:i=>pe(e.id,i.target.value||1),className:"store-profile-qty-input"}),r.jsx("button",{type:"button",onClick:()=>ce(e.id,1),className:"store-profile-qty-btn","aria-label":"زيادة الكمية",children:r.jsx(tr,{size:18})})]})]})]},e.id)})})]})]})]}),r.jsx("style",{children:`
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 0.9s linear infinite; }

        .store-profile-hero{
          padding: 0;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .store-profile-hero-body{
          padding: 0 1.25rem 1.25rem;
          margin-top: 0;
        }
        .store-profile-hero-top{ align-items: flex-end; }
        .store-profile-hero-logo{
          width: 150px;
          height: 150px;
          border-radius: 32px;
          border: 4px solid var(--white);
          background: var(--surface);
          overflow: hidden;
          box-shadow: var(--shadow);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .store-profile-hero-logo-img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .store-profile-hero-row{
          margin-top: 14px;
          align-items: flex-start;
          gap: 12px;
        }
        .store-profile-title{
          margin: 0;
          font-size: 1.75rem;
          font-weight: 900;
          flex: 1;
          min-width: 0;
        }
        .store-profile-hero-actions{
          display: flex;
          gap: 8px;
          flex-shrink: 0;
        }
        .store-profile-icon-btn{
          background: var(--surface);
          cursor: pointer;
          padding: 10px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid var(--border);
          transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .store-profile-icon-btn:hover{
          background: var(--primary-light);
          border-color: rgba(245, 192, 0, 0.4);
          box-shadow: var(--shadow-sm);
        }
        .store-profile-icon-btn:disabled{
          opacity: 0.6;
          cursor: wait;
        }
        .store-profile-icon-btn--fav{
          background: rgba(233, 30, 99, 0.10);
        }
        .store-profile-subtitle{
          color: var(--text-secondary);
          margin-top: 4px;
          font-weight: 700;
        }
        /* store-profile-mapcta removed */
        .store-profile-contact{
          margin-top: 14px;
          padding: 12px 14px;
          border-radius: 14px;
          background: var(--surface);
          border: 1px solid var(--border);
        }
        .store-profile-contact-head{
          font-weight: 900;
          margin-bottom: 10px;
          color: var(--secondary);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .store-profile-whatsapp-btn{
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 18px;
          border-radius: 12px;
          font-weight: 900;
          text-decoration: none;
          background: #25D366;
          color: #fff;
          border: none;
          box-shadow: 0 2px 8px rgba(37, 211, 102, 0.35);
        }
        .store-profile-whatsapp-btn:hover{ filter: brightness(1.02); }
        .store-profile-contact-note{
          margin: 0 0 10px;
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        .store-profile-settings-link{
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 900;
          color: var(--secondary);
          text-decoration: underline;
        }
        @media (max-width: 520px){
          .store-profile-title{ font-size: 1.45rem; }
          .store-profile-hero-body{ padding: 0 1rem 1.1rem; }
          .store-profile-hero-logo{
            width: 128px;
            height: 128px;
            border-radius: 28px;
          }
        }

        .store-profile-features{
          margin-top: 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .store-feature-chip{
          font-size: 0.72rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 999px;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text-secondary);
        }

        .store-profile-in-cart{
          font-size: 0.82rem;
          font-weight: 900;
          color: var(--secondary);
          background: var(--primary-light);
          padding: 6px 10px;
          border-radius: 10px;
          width: fit-content;
        }
        .store-profile-qty-row{
          gap: 8px;
          margin-top: 4px;
          direction: ltr;
        }
        .store-profile-qty-btn{
          border: 1px solid var(--border);
          background: var(--white);
          border-radius: 10px;
          padding: 8px 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary);
        }
        .store-profile-qty-btn:hover{ background: var(--primary-light); }
        .store-profile-qty-input{
          flex: 1;
          text-align: center;
          font-weight: 900;
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 8px 6px;
          font-size: 1rem;
          background: var(--white);
          color: var(--secondary);
        }

        .store-profile-box{
          margin-top: 12px;
          padding: 12px 14px;
          border-radius: 12px;
          background: var(--surface);
          border: 1px solid var(--border);
        }
        .store-profile-box--rating{
          margin-top: 14px;
          padding: 14px 16px;
          border-radius: 14px;
        }
        .store-profile-box-row{
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 8px;
        }
        .store-profile-box-title{
          font-weight: 900;
          color: var(--secondary);
        }
        .store-profile-pill{
          font-size: 0.78rem;
          font-weight: 900;
          padding: 3px 10px;
          border-radius: 999px;
        }
        .store-profile-pill--open{ background: rgba(46, 125, 50, 0.12); color: #2e7d32; }
        .store-profile-pill--closed{ background: rgba(198, 40, 40, 0.10); color: #c62828; }
        .store-profile-pill--muted{ background: var(--grey-light); color: var(--text-secondary); }
        .store-profile-note{
          line-height: 1.65;
          white-space: pre-wrap;
          font-size: 0.95rem;
          color: var(--text-primary);
        }
        .store-profile-rating-row{
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }
        .store-profile-rating-avg{
          font-weight: 950;
          font-size: 1.2rem;
          color: var(--secondary);
        }
        .store-profile-rating-count{
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        .store-profile-muted{
          margin: 0 0 10px;
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.65;
        }
        .store-profile-muted--tight{
          margin: 0;
          font-size: 0.88rem;
        }
        .store-profile-rating-login-cta{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          margin-top: 12px;
          padding: 12px 14px;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          font-family: inherit;
          font-weight: 900;
          font-size: 0.9rem;
          line-height: 1.35;
          text-align: center;
          color: var(--secondary);
          background: linear-gradient(135deg, rgba(255, 236, 160, 0.45) 0%, rgba(255, 249, 230, 0.95) 45%, var(--white) 100%);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.9) inset,
            0 4px 16px rgba(245, 192, 0, 0.2);
          transition: transform 0.12s ease, box-shadow 0.2s ease, filter 0.15s ease;
        }
        .store-profile-rating-login-cta:hover{
          filter: brightness(1.02);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.95) inset,
            0 8px 22px rgba(245, 192, 0, 0.28);
        }
        .store-profile-rating-login-cta:active{
          transform: scale(0.99);
        }
        .store-profile-rating-login-cta:focus-visible{
          outline: none;
          box-shadow:
            0 0 0 3px rgba(255, 255, 255, 0.95),
            0 0 0 5px rgba(245, 192, 0, 0.55),
            0 4px 16px rgba(245, 192, 0, 0.22);
        }
        .store-profile-rating-login-cta-icon{
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: var(--secondary);
          box-shadow: var(--shadow-gold);
        }
        .store-profile-rating-login-cta-label{
          flex: 1;
          min-width: 0;
        }
        .store-profile-rate-hint{
          font-weight: 900;
          margin-bottom: 8px;
          font-size: 0.9rem;
          color: var(--secondary);
        }
        .store-profile-rate-row{
          display: inline-flex;
          gap: 6px;
        }
        .store-profile-star-btn{
          padding: 6px;
          border: none;
          background: transparent;
          border-radius: 8px;
          line-height: 0;
          cursor: pointer;
        }
        .store-profile-star-btn:disabled{
          opacity: 0.6;
          cursor: wait;
        }
        .store-profile-desc{
          margin-top: 12px;
          color: var(--text-primary);
          line-height: 1.65;
        }
        .store-profile-loc-head{
          font-weight: 900;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--secondary);
        }
        .store-profile-loc-text{
          line-height: 1.65;
          white-space: pre-wrap;
          color: var(--text-primary);
        }
        .store-profile-linkbtn{
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          color: var(--secondary);
          font-weight: 900;
          text-decoration: underline;
          font: inherit;
        }

        .store-profile-section-title{
          font-size: 1.1rem;
          margin: 0 0 12px;
          font-weight: 950;
          color: var(--secondary);
        }
        .store-profile-section-title--products{
          font-size: 1.15rem;
          margin-bottom: 14px;
        }
        .store-profile-sponsored{ margin-bottom: 22px; }
        .store-profile-sponsored-rail-wrap{
          position: relative;
        }
        .store-profile-sponsored-rail-wrap--hint::before{
          content: '';
          position: absolute;
          inset-inline-start: 0;
          top: 0;
          bottom: 24px;
          width: 28px;
          pointer-events: none;
          background: linear-gradient(90deg, rgba(245,246,248,0.92), rgba(245,246,248,0));
          z-index: 3;
        }
        .store-profile-sponsored-rail{
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 8px;
          scrollbar-width: thin;
          scrollbar-color: var(--primary) var(--primary-light);
          cursor: grab;
        }
        .store-profile-sponsored-rail:active{ cursor: grabbing; }
        .store-profile-sponsored-scroll-hint{
          margin-top: 4px;
          font-size: 0.76rem;
          font-weight: 800;
          color: var(--text-secondary);
          text-align: center;
        }
        .store-profile-sponsored-rail::-webkit-scrollbar{ height: 11px; }
        .store-profile-sponsored-rail::-webkit-scrollbar-track{
          background: var(--primary-light);
          border-radius: 999px;
        }
        .store-profile-sponsored-rail::-webkit-scrollbar-thumb{
          background: linear-gradient(180deg, var(--primary) 0%, var(--primary-hover) 100%);
          border-radius: 999px;
          border: 2px solid var(--primary-light);
        }
        .store-profile-sponsored-rail::-webkit-scrollbar-thumb:hover{
          background: linear-gradient(180deg, var(--primary-muted) 0%, var(--primary) 100%);
        }
        .store-profile-sponsored-card{
          min-width: 210px;
          max-width: 280px;
          border-radius: 16px;
          border: 1px solid rgba(232, 230, 224, 0.95);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 10px 26px rgba(26, 29, 38, 0.05);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }
        .store-profile-sponsored-card:hover{
          border-color: rgba(245, 192, 0, 0.45);
          box-shadow: 0 16px 40px rgba(245, 192, 0, 0.14);
        }
        .store-profile-sponsored-media{
          position: relative;
          order: -1;
          width: 100%;
          aspect-ratio: 4 / 3;
          max-height: 140px;
          margin-bottom: 0;
          border-radius: 0;
          overflow: hidden;
          border-bottom: 1px solid rgba(232, 230, 224, 0.85);
        }
        .store-profile-sponsored-media-fallback{
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 950;
          color: rgba(26, 29, 38, 0.7);
          background: linear-gradient(135deg, rgba(245,192,0,0.22) 0%, rgba(255,255,255,0.92) 55%, rgba(26,29,38,0.06) 100%);
        }
        .store-profile-sponsored-fab{
          position: absolute;
          top: 8px;
          z-index: 4;
          width: 34px;
          height: 34px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          margin: 0;
          cursor: pointer;
          background: rgba(255,255,255,0.94);
          box-shadow: 0 4px 14px rgba(26,29,38,0.14);
          transition: transform 0.12s ease, filter 0.15s ease;
        }
        .store-profile-sponsored-fab--cart{
          inset-inline-start: 8px;
          border: 1px solid rgba(245,192,0,0.5);
          color: var(--secondary);
        }
        .store-profile-sponsored-fab--fav{
          inset-inline-end: 8px;
          border: 1px solid rgba(233, 30, 99, 0.35);
          background: rgba(255,255,255,0.96);
        }
        .store-profile-sponsored-fab:hover:not(:disabled){
          transform: translateY(-1px);
          filter: brightness(1.02);
        }
        .store-profile-sponsored-fab:disabled{
          opacity: 0.65;
          cursor: wait !important;
        }
        .store-profile-sponsored-fab--muted{
          opacity: 0.88;
        }
        .store-profile-sponsored-body{
          padding: 10px 10px 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .store-profile-sponsored-pill{
          align-self: flex-start;
          font-size: .68rem;
          font-weight: 900;
          padding: 3px 8px;
          border-radius: 999px;
          background: rgba(255, 204, 0, 0.88);
          color: #111;
          border: 1px solid rgba(255, 255, 255, 0.35);
        }
        .store-profile-sponsored-title{
          font-weight: 950;
          color: var(--secondary);
          font-size: .88rem;
          line-height: 1.25;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .store-profile-sponsored-meta{
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          font-size: .78rem;
          font-weight: 800;
          color: var(--text-secondary);
        }
        .store-profile-sponsored-store{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          min-width: 0;
          max-width: 100%;
        }
        .store-profile-sponsored-dot{
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: rgba(26, 29, 38, 0.25);
          flex-shrink: 0;
        }
        .store-profile-sponsored-price-row{
          margin-top: 2px;
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 6px 10px;
          font-weight: 900;
        }
        .store-profile-sponsored-old{
          text-decoration: line-through;
          color: var(--text-secondary);
          font-weight: 700;
          font-size: 0.95rem;
        }
        .store-profile-sponsored-badge{
          display: inline-block;
          padding: 2px 8px;
          border-radius: 8px;
          font-size: 0.72rem;
          font-weight: 950;
          color: var(--secondary);
          background: rgba(245,192,0,0.35);
          border: 1px solid rgba(245,192,0,0.45);
        }
        .store-profile-sponsored-now{ color: var(--secondary); }
        .store-profile-sponsored-desc-wrap{
          margin-top: 0;
        }
        .store-profile-sponsored-desc{
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-top: 0;
          line-height: 1.55;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .store-profile-sponsored-desc--expanded{
          display: block;
          -webkit-line-clamp: unset;
          overflow: visible;
        }
        .store-profile-open-details-btn{
          width: 100%;
          margin-top: auto;
          border: 1.5px solid var(--primary);
          background: var(--white);
          color: var(--secondary);
          border-radius: 12px;
          padding: 8px 10px;
          font-weight: 900;
          font-size: 0.76rem;
          cursor: pointer;
          transition: background .15s ease, border-color .15s ease, transform .12s ease;
        }
        .store-profile-open-details-btn:hover{
          border-color: rgba(255, 204, 0, 0.6);
          background: var(--primary-light);
          transform: translateY(-1px);
        }
        .store-profile-products-grid{
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(180px, 100%), 1fr));
          gap: 12px;
        }
        .store-profile-product-card{
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .store-profile-product-card[data-flash="true"]{
          outline: 3px solid rgba(255, 204, 0, 0.75);
          box-shadow: 0 16px 48px rgba(255, 204, 0, 0.18);
        }
        .store-profile-product-favbtn{
          position: absolute;
          top: 8px;
          inset-inline-end: 8px;
          z-index: 4;
          border: none;
          border-radius: 999px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.92);
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          cursor: pointer;
          transition: transform 0.12s ease, filter 0.15s ease;
        }
        .store-profile-product-favbtn:hover{ transform: translateY(-1px); filter: brightness(1.02); }
        .store-profile-product-favbtn:disabled{ opacity: 0.6; cursor: wait; }

        .store-profile-product-media{
          aspect-ratio: 1;
          max-height: 200px;
          background: var(--grey-light);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .store-profile-product-media-overlay{
          position: absolute;
          inset-inline: 0;
          bottom: 0;
          padding: 10px 10px 9px;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.58) 65%, rgba(0,0,0,0.72) 100%);
          color: #fff;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 10px;
          pointer-events: none;
        }
        .store-profile-product-media-cartbtn{
          position: absolute;
          top: 10px;
          inset-inline-start: 10px;
          z-index: 4;
          width: 40px;
          height: 40px;
          border-radius: 14px;
          border: 1px solid rgba(245,192,0,0.45);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 6px 18px rgba(26, 29, 38, 0.14);
          color: var(--secondary);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.12s ease, filter 0.15s ease;
        }
        .store-profile-product-media-cartbtn:hover:not(:disabled){
          transform: translateY(-1px);
          filter: brightness(1.02);
        }
        .store-profile-product-media-cartbtn:active:not(:disabled){
          transform: translateY(0);
        }
        .store-profile-product-media-cartbtn:disabled{
          opacity: 0.65;
        }
        .store-profile-product-media-cartbtn--muted{
          opacity: 0.88;
        }
        .store-profile-product-media:has(.store-profile-product-favbtn) .store-profile-product-media-overlay{
          padding-inline-end: 44px;
        }
        .store-profile-product-media:has(.store-profile-product-media-cartbtn) .store-profile-product-media-overlay{
          padding-inline-start: 48px;
        }
        .store-profile-product-media-name{
          font-weight: 950;
          font-size: 0.92rem;
          line-height: 1.2;
          min-width: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-shadow: 0 2px 10px rgba(0,0,0,0.35);
        }
        .store-profile-product-media-price{
          flex: 0 0 auto;
          font-weight: 950;
          font-size: 0.9rem;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.18);
          border: 1px solid rgba(255,255,255,0.22);
          backdrop-filter: blur(6px);
          text-shadow: 0 2px 10px rgba(0,0,0,0.35);
          white-space: nowrap;
        }
        .store-profile-product-media-inner{
          flex: 1;
          align-self: stretch;
          width: 100%;
          min-height: 0;
          display: flex;
          flex-direction: column;
        }
        .store-profile-product-body{
          padding: 10px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-height: 0;
        }
        .store-profile-product-desc-wrap{
          margin: 0;
        }
        .store-profile-product-desc{
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .store-profile-product-desc--expanded{
          display: block;
          -webkit-line-clamp: unset;
          overflow: visible;
        }
        .store-profile-desc-toggle{
          margin-top: 4px;
          border: none;
          background: transparent;
          color: var(--secondary);
          font-weight: 800;
          font-size: 0.72rem;
          cursor: pointer;
          padding: 0;
        }
        .store-profile-desc-toggle:hover{
          text-decoration: underline;
        }
        .store-profile-product-feats{
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .store-profile-product-feat{
          font-size: 0.78rem;
          font-weight: 900;
          padding: 4px 10px;
          border-radius: 999px;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--secondary);
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .store-profile-product-price{
          font-weight: 950;
          color: var(--secondary);
          margin-top: auto;
        }

      `})]})};export{jr as default};
