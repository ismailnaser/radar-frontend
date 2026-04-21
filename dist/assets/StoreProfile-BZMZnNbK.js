import{h as ke,u as Se,b as ze,a as Ae,r as u,y as W,a7 as Ce,t as Ie,a3 as Fe,j as r,L as se,S as ae,a4 as Pe,a8 as $e,a9 as qe,w as ne,x as H,z as Me,A as le}from"./index-C-VrR7wq.js";import{M as Be,S as Le,H as Q,k as Te}from"./MainLayout-XBlxfZ8w.js";import{I as de}from"./ImageCarousel-m9EtLjj3.js";import{v as B}from"./productImages-BYfYSUZM.js";import{s as Re}from"./storeHours-U_KU_St1.js";import{f as L}from"./apiErrors-Bccm4O3Y.js";import{c as Ee}from"./cartAccess-DdSevxjw.js";import{A as We}from"./arrow-left-CN5gXIuQ.js";import{L as He}from"./loader-2-Ch8z48OZ.js";import{M as ce}from"./map-pin-duqjxm6X.js";import{M as pe}from"./message-circle-Cvyn1zwU.js";import{S as fe}from"./star-CqLnRp5c.js";import{I as Qe}from"./image-DL82XQOh.js";import{C as De,a as Ue}from"./chevron-up-BTY2_4ju.js";import"./chevron-left-C9nrZvh9.js";function Ve(c){if(c==null||c==="")return"";const l="٠١٢٣٤٥٦٧٨٩",m="۰۱۲۳۴۵۶۷۸۹",n="0123456789";let y="";for(const w of String(c)){let h=l.indexOf(w);if(h>=0){y+=n[h];continue}if(h=m.indexOf(w),h>=0){y+=n[h];continue}y+=w}return y.replace(/\D/g,"")}function Ye(c){let l=Ve(c);return!l||(l.length===10&&l[0]==="0"&&l[1]==="5"?l=`970${l.slice(1)}`:l.length===9&&l[0]==="5"&&(l=`970${l}`),l.length<8)?null:`https://wa.me/${l}`}const ue=(c,l,m)=>{const n=parseInt(String(c),10);return Number.isNaN(n)?l:Math.min(m,Math.max(l,n))},D=c=>{const l=Number(c==null?void 0:c.latitude),m=Number(c==null?void 0:c.longitude);return!(!Number.isFinite(l)||!Number.isFinite(m)||Math.abs(l)<.25&&Math.abs(m)<.25)},cr=()=>{const{storeId:c}=ke(),l=Se(),m=ze(),{showAlert:n,showPrompt:y,showSelect:w}=Ae(),[h,U]=u.useState(!0),[t,T]=u.useState(null),[V,z]=u.useState(""),[Y,R]=u.useState({}),[ge,A]=u.useState({}),[C,I]=u.useState(null),[k,v]=u.useState(null),[F,j]=u.useState({}),[G,S]=u.useState({}),[b,N]=u.useState(!1),[O,K]=u.useState(!1),[Ge,P]=u.useState(null),_=u.useRef(null),[J,X]=u.useState(null),xe=localStorage.getItem("isGuest")==="true",x=!!localStorage.getItem("token")&&!xe,$=Ee(),Z=x&&localStorage.getItem("user_type")==="shopper",me=async e=>{if(!Z){await n("التقييم متاح لحساب المتسوّق فقط (وليس وضع الزائر أو التاجر).","تنبيه");return}const o=c!=null?Number(c):t==null?void 0:t.id;if(o){K(!0);try{const i=await qe(o,e);T(s=>s&&{...s,rating_average:i.rating_average??s.rating_average,rating_count:i.rating_count??s.rating_count,my_rating:e}),await n("شكراً، تم حفظ تقييمك.","تم")}catch(i){await n(L(i,"تعذر إرسال التقييم."),"خطأ")}finally{K(!1)}}},q=u.useCallback(async()=>{var e;if(!x){A({});return}try{const i=(await W())[0];if(!((e=i==null?void 0:i.items)!=null&&e.length)){A({});return}const s={};for(const d of i.items)s[d.product]=d.quantity;A(s)}catch{A({})}},[x]);u.useEffect(()=>{let e=!1;return(async()=>{var o,i,s,d,f;U(!0),z("");try{const a=await Ce(c);if(!e){T(a);const p={},g=a.products||[];for(const _e of g)p[_e.id]=1;R(p)}}catch(a){if(!e){const p=(o=a==null?void 0:a.response)==null?void 0:o.status,g=((s=(i=a==null?void 0:a.response)==null?void 0:i.data)==null?void 0:s.detail)||((f=(d=a==null?void 0:a.response)==null?void 0:d.data)==null?void 0:f.error)||"";p===404&&String(g).includes("تم تعليق المتجر")?z("تم تعليق المتجر إدارياً."):z(p===404&&g?String(g):"تعذر تحميل بيانات المتجر"),T(null)}}finally{e||U(!1)}})(),()=>{e=!0}},[c]),u.useEffect(()=>{var i;const e=(i=m.state)==null?void 0:i.scrollToProductId;if(e==null||e==="")return;const o=window.setTimeout(()=>{const s=document.querySelector(`[data-store-product-id="${String(e)}"]`);s&&typeof s.scrollIntoView=="function"&&(s.scrollIntoView({behavior:"smooth",block:"center"}),X(String(e)),window.setTimeout(()=>X(null),1600))},220);return()=>window.clearTimeout(o)},[m.state,c]),u.useEffect(()=>{q()},[q,c]),u.useEffect(()=>{if(!x||!(t!=null&&t.id)){v(null),j({}),S({});return}let e=!1;return(async()=>{var o;try{const[i,s]=await Promise.all([Ie(),Fe()]);if(e)return;const d={},f={};for(const a of i||[]){const p=a.product??((o=a.product_details)==null?void 0:o.id);p!=null&&(d[p]=a.id),(a.product==null||a.product==="")&&a.sponsored_ad!=null&&(f[a.sponsored_ad]=a.id)}if(j(d),S(f),t.is_owner)v(null);else{const a=(s||[]).find(p=>{var g;return Number(p.store)===Number(t.id)||Number((g=p.store_details)==null?void 0:g.id)===Number(t.id)});v((a==null?void 0:a.id)??null)}}catch{e||(j({}),S({}),v(null))}})(),()=>{e=!0}},[x,t==null?void 0:t.id,t==null?void 0:t.is_owner]);const he=()=>{const e=Number(t==null?void 0:t.latitude),o=Number(t==null?void 0:t.longitude);if(!Number.isFinite(e)||!Number.isFinite(o)){n("لا توجد إحداثيات خريطة محفوظة لهذا المتجر.");return}l("/map",{state:{mapFocus:{lat:e,lng:o,storeId:t.id},mapPreset:{mode:"stores",category:(t==null?void 0:t.category)??null,q:(t==null?void 0:t.store_name)??""}}})},E=e=>e.product?`p-${e.product}`:`ad-${e.id}`,be=async e=>{if(!$){n("ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.");return}I(E(e));try{const o={productId:e.product??null,sponsoredAdId:e.id,quantity:1,note:"",success:"تمت إضافة العرض للسلة."},i=await y("أضف ملاحظة على هذا المنتج داخل السلة (اختياري). اترك الحقل فارغاً إذا لا تريد.","مثال: بدون بصل / توصيل بعد العصر","ملاحظة على المنتج","");o.note=i==null?"":String(i).trim(),_.current=o,P(o);const s=await W(),d=Array.isArray(s)?s:[];if(d.length===0){await M(o,{isFirstCart:!0});return}const f=d.map(p=>({id:String(p.id),label:p.name||`سلة #${p.id}`,value:p.id,badge:Array.isArray(p.items)?p.items.length:0})),a=await w("اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",f,{primaryActionLabel:"سلة جديدة"});if(a==null)return;if(a==="__primary__"){await M();return}await ee({id:a})}catch(o){n(L(o,"تعذرت الإضافة للسلة."),"خطأ")}finally{I(null)}},M=async(e,{isFirstCart:o=!1}={})=>{const i=e??_.current;if(!i){await n("تعذر تحديد المنتج المراد إضافته للسلة. جرّب مرة أخرى.","خطأ");return}const s=await y(o?"لا توجد لديك سلال بعد. اكتب اسماً لسلتك الأولى — يُضاف المنتج إليها مباشرة.":"اكتب اسماً للسلة الجديدة ثم يُضاف المنتج إليها.",o?"مثال: سلة اليوم":"اسم السلة...",o?"إنشاء أول سلة":"سلة جديدة");if(!s||!String(s).trim())return;const d=await Me(String(s).trim());await le(d.id,i.productId??null,i.quantity??1,i.sponsoredAdId??null,i.note??""),await q(),await n(i.success||"تمت الإضافة للسلة.","تم"),P(null),_.current=null},ee=async e=>{const o=_.current;if(!o){await n("تعذر تحديد المنتج المراد إضافته للسلة. جرّب مرة أخرى.","خطأ");return}await le(e.id,o.productId??null,o.quantity??1,o.sponsoredAdId??null,o.note??""),await q(),await n(o.success||"تمت الإضافة للسلة.","تم"),P(null),_.current=null},ye=async e=>{if(!x){n("سجّل الدخول لاستخدام المفضلة. وضع الزائر لا يدعمها.");return}if(!b){N(!0);try{if(!e.product){const i=G[e.id];if(i)await ne(i),S(s=>{const d={...s};return delete d[e.id],d}),n("أُزيل العرض المستقل من المفضلة.");else{const s=await H(null,e.id);S(d=>({...d,[e.id]:s.id})),n("أُضيف عرض الإعلان للمفضلة — يُزال تلقائياً عند انتهاء مدة الإعلان.")}return}const o=await H(e.product,e.id);j(i=>({...i,[e.product]:o.id})),n("أُضيف المنتج للمفضلة.")}catch(o){n(L(o,"تعذرت العملية."),"خطأ")}finally{N(!1)}}},we=async()=>{var e,o,i,s,d;if(!x){n("سجّل الدخول لاستخدام المفضلة.");return}if(!t.is_owner&&!b){N(!0);try{if(k)await Pe(k),v(null),n("أُزيل المحل من المفضلة.");else{const f=await $e(t.id);v(f.id),n("أُضيف المحل للمفضلة.")}}catch(f){const a=((i=(o=(e=f==null?void 0:f.response)==null?void 0:e.data)==null?void 0:o.store)==null?void 0:i[0])||((d=(s=f==null?void 0:f.response)==null?void 0:s.data)==null?void 0:d.detail);n(a?String(a):"تعذرت العملية.")}finally{N(!1)}}},ve=async e=>{if(!x){n("سجّل الدخول لاستخدام المفضلة.");return}if(t.is_owner)return;const o=F[e.id];if(!b){N(!0);try{if(o)await ne(o),j(i=>{const s={...i};return delete s[e.id],s}),n("أُزيل المنتج من المفضلة.");else{const i=await H(e.id);j(s=>({...s,[e.id]:i.id})),n("أُضيف المنتج للمفضلة.")}}catch{n("تعذرت العملية — ربما المنتج مضاف مسبقاً.")}finally{N(!1)}}},re=((t==null?void 0:t.products)||[]).filter(e=>{const o=e.is_archived;return o!==!0&&o!==1&&o!=="true"&&o!=="True"}),te=(e,o)=>{R(i=>({...i,[e]:ue(o,1,9999)}))},oe=(e,o)=>{R(i=>({...i,[e]:ue((i[e]??1)+o,1,9999)}))},ie=t!=null?t.contact_whatsapp_url||Ye(t.contact_whatsapp):null,je=t!=null?Re(t.business_hours_weekly):!1,Ne=async e=>{if(t!=null&&t.is_owner)return;if(!$){n("ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.");return}const o=Y[e.id]??1;I(e.id);try{const i={productId:e.id,sponsoredAdId:null,quantity:o,note:"",success:`تمت إضافة «${e.name}» للسلة.`},s=await y("أضف ملاحظة على هذا المنتج داخل السلة (اختياري). اترك الحقل فارغاً إذا لا تريد.","مثال: بدون بصل / توصيل بعد العصر","ملاحظة على المنتج","");i.note=s==null?"":String(s).trim(),_.current=i,P(i);const d=await W(),f=Array.isArray(d)?d:[];if(f.length===0){await M(i,{isFirstCart:!0});return}const a=f.map(g=>({id:String(g.id),label:g.name||`سلة #${g.id}`,value:g.id,badge:Array.isArray(g.items)?g.items.length:0})),p=await w("اختر السلة التي تريد إضافة المنتج إليها:","إضافة إلى أي سلة؟",a,{primaryActionLabel:"سلة جديدة"});if(p==null)return;if(p==="__primary__"){await M();return}await ee({id:p})}catch(i){n(L(i,"تعذر إضافة المنتج للسلة."),"خطأ")}finally{I(null)}};return r.jsxs(Be,{children:[r.jsxs("div",{style:{maxWidth:1240,marginInline:"auto",paddingBottom:48,paddingInline:"clamp(8px, 2.2vw, 22px)",boxSizing:"border-box"},children:[r.jsxs(se,{to:"/map",className:"flex-center",style:{gap:8,marginBottom:16,color:"var(--text-secondary)",textDecoration:"none",fontWeight:700,width:"fit-content"},children:[r.jsx(We,{size:18}),"رجوع للخريطة"]}),h&&r.jsxs("div",{className:"card flex-center",style:{padding:48,gap:12},children:[r.jsx(He,{className:"spin",size:28}),"جاري التحميل..."]}),!h&&V&&r.jsx("div",{className:"card",style:{color:"#c62828"},children:V}),!h&&t&&r.jsxs(r.Fragment,{children:[r.jsx("header",{className:"card store-profile-hero",children:r.jsxs("div",{className:"store-profile-hero-body",children:[r.jsx("div",{className:"flex-between store-profile-hero-top",children:r.jsx("div",{className:"store-profile-hero-logo",children:t.logo?r.jsx("img",{src:t.logo,alt:"",className:"store-profile-hero-logo-img",loading:"lazy",width:"220",height:"220"}):r.jsx(Le,{size:40,color:"var(--text-secondary)"})})}),r.jsxs("div",{className:"flex-between store-profile-hero-row",children:[r.jsx("h1",{className:"store-profile-title",children:t.store_name}),D(t)||x&&!t.is_owner?r.jsxs("div",{className:"store-profile-hero-actions",children:[D(t)?r.jsx("button",{type:"button",onClick:he,title:"عرض موقع المتجر على الخريطة","aria-label":"عرض على الخريطة",className:"store-profile-icon-btn",children:r.jsx(ce,{size:26,color:"var(--secondary)"})}):null,x&&!t.is_owner?r.jsx("button",{type:"button",onClick:we,disabled:b,title:k?"إزالة من المفضلة":"إضافة للمفضلة","aria-label":"مفضلة المحل",className:`store-profile-icon-btn ${k?"store-profile-icon-btn--fav":""}`,style:{cursor:b?"wait":void 0},children:r.jsx(Q,{size:26,color:"#e91e63",fill:k?"#e91e63":"none"})}):null]}):null]}),r.jsx("div",{className:"store-profile-subtitle",children:t.category_name||"متجر"}),r.jsxs("div",{className:"store-profile-contact",children:[r.jsxs("div",{className:"store-profile-contact-head",children:[r.jsx(pe,{size:18,"aria-hidden":!0}),"تواصل معنا"]}),ie?r.jsxs("a",{href:ie,target:"_blank",rel:"noopener noreferrer",className:"store-profile-whatsapp-btn",children:[r.jsx(pe,{size:20}),"مراسلة عبر واتساب"]}):r.jsxs("div",{children:[r.jsx("p",{className:"store-profile-contact-note",children:"لم يُضف رقم واتساب للتواصل بعد — يظهر الزر تلقائياً عندما يضيفه صاحب المتجر من إعدادات المتجر."}),t.is_owner?r.jsx(se,{to:"/merchant/settings",className:"store-profile-settings-link",children:"فتح إعدادات المتجر لإضافة الرقم"}):null]})]}),Array.isArray(t.store_features)&&t.store_features.filter(Boolean).length>0?r.jsx("div",{className:"store-profile-features",children:t.store_features.filter(Boolean).map((e,o)=>r.jsx("span",{className:"store-feature-chip",children:e},`${o}-${e}`))}):null,r.jsxs("div",{className:"store-profile-box",children:[r.jsxs("div",{className:"store-profile-box-row",children:[r.jsx("span",{className:"store-profile-box-title",children:"مواعيد العمل"}),je?t.is_open_now===!0?r.jsx("span",{className:"store-profile-pill store-profile-pill--open",children:"مفتوح الآن"}):t.is_open_now===!1?r.jsx("span",{className:"store-profile-pill store-profile-pill--closed",children:"مغلق الآن"}):r.jsx("span",{className:"store-profile-pill store-profile-pill--muted",children:"—"}):r.jsx("span",{className:"store-profile-pill store-profile-pill--muted",children:"لا يوجد مواعيد عمل محددة"})]}),(t.business_hours_note||"").trim()?r.jsx("div",{className:"store-profile-note",children:t.business_hours_note.trim()}):null]}),r.jsxs("div",{className:"store-profile-box store-profile-box--rating",children:[r.jsx("div",{className:"store-profile-box-title",children:"تقييم المتجر (من 5 نجوم)"}),t.rating_count>0&&t.rating_average!=null?r.jsxs("div",{dir:"ltr",className:"store-profile-rating-row",children:[r.jsx("span",{className:"store-profile-rating-avg",children:Number(t.rating_average).toFixed(1)}),r.jsx("span",{className:"star-row-readonly","aria-hidden":!0,children:[1,2,3,4,5].map(e=>r.jsx(fe,{size:22,color:"#f5c000",fill:e<=Math.round(Number(t.rating_average))?"#f5c000":"none",strokeWidth:e<=Math.round(Number(t.rating_average))?0:1.5},e))}),r.jsxs("span",{className:"store-profile-rating-count",children:["بناءً على ",t.rating_count," تقييم"]})]}):r.jsx("p",{className:"store-profile-muted",children:"لا يوجد تقييمات بعد."}),Z&&!t.is_owner?r.jsxs("div",{children:[r.jsx("div",{className:"store-profile-rate-hint",children:t.my_rating?"تقييمك الحالي (اضغط نجمة لتغييره)":"قيّم هذا المحل"}),r.jsx("div",{dir:"ltr",className:"store-profile-rate-row",children:[1,2,3,4,5].map(e=>r.jsx("button",{type:"button",disabled:O,onClick:()=>me(e),"aria-label":`تقييم ${e} من 5`,className:"store-profile-star-btn",style:{cursor:O?"wait":void 0},children:r.jsx(fe,{size:30,color:"#f5c000",fill:e<=(t.my_rating||0)?"#f5c000":"none",strokeWidth:e<=(t.my_rating||0)?0:1.5})},e))})]}):t.is_owner?r.jsx("p",{className:"store-profile-muted store-profile-muted--tight",children:"يظهر تقييمك الإجمالي للزوار؛ التقييم من حسابات المتسوّقين فقط."}):x?null:r.jsxs("button",{type:"button",className:"store-profile-rating-login-cta",onClick:()=>l("/login"),children:[r.jsx("span",{className:"store-profile-rating-login-cta-icon","aria-hidden":!0,children:r.jsx(Te,{size:18,strokeWidth:2})}),r.jsx("span",{className:"store-profile-rating-login-cta-label",children:"سجّل دخول كمتسوّق لتتمكن من التقييم"})]})]}),t.description?r.jsx("p",{className:"store-profile-desc",children:t.description}):null,(t.location_address||"").trim()&&D(t)?r.jsxs("div",{className:"store-profile-box",children:[r.jsxs("div",{className:"store-profile-loc-head",children:[r.jsx(ce,{size:18,"aria-hidden":!0}),"الموقع (نصاً)"]}),r.jsx("div",{className:"store-profile-loc-text",children:t.location_address.trim()})]}):null]})}),Array.isArray(t.sponsored_ads)&&t.sponsored_ads.length>0&&r.jsxs("section",{className:"store-profile-sponsored",children:[r.jsx("h2",{className:"store-profile-section-title",children:"عروض وإعلانات"}),r.jsx("div",{className:"store-profile-sponsored-rail",children:t.sponsored_ads.map(e=>r.jsxs("div",{className:"card store-profile-sponsored-card",children:[r.jsxs("div",{className:"store-profile-sponsored-media",children:[B(e).length>0?r.jsx(de,{images:B(e),height:100,borderRadius:12}):r.jsx("div",{className:"store-profile-sponsored-media-fallback","aria-label":"لا توجد صورة للإعلان",children:"إعلان"}),t.is_owner?null:r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",className:`store-profile-sponsored-fab store-profile-sponsored-fab--cart${$?"":" store-profile-sponsored-fab--muted"}`,onClick:o=>{o.stopPropagation(),be(e)},disabled:C===E(e),title:"إضافة إلى السلة","aria-label":"إضافة إلى السلة",style:{cursor:C===E(e)?"wait":"pointer"},children:r.jsx(ae,{size:16,strokeWidth:2,"aria-hidden":!0})}),r.jsx("button",{type:"button",className:`store-profile-sponsored-fab store-profile-sponsored-fab--fav${x?"":" store-profile-sponsored-fab--muted"}`,onClick:o=>{o.stopPropagation(),ye(e)},disabled:b,title:e.product?"مفضلة":"مفضلة — يُزال عند انتهاء الإعلان","aria-label":"مفضلة",style:{cursor:b?"wait":"pointer"},children:r.jsx(Q,{size:16,color:"#e91e63",fill:e.product?F[e.product]?"#e91e63":"none":G[e.id]?"#e91e63":"none","aria-hidden":!0})})]})]}),r.jsx("div",{className:"store-profile-sponsored-title",children:e.title}),Number(e.product_price)>0?r.jsxs("div",{className:"store-profile-sponsored-price-row",children:[e.catalog_product_price!=null&&e.catalog_product_price!==""&&Math.abs(Number(e.catalog_product_price)-Number(e.product_price))>1e-9?r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:"store-profile-sponsored-old",children:[Number(e.catalog_product_price).toFixed(2)," ₪"]}),r.jsx("span",{className:"store-profile-sponsored-badge",children:"سعر العرض"})]}):null,r.jsxs("span",{className:"store-profile-sponsored-now",children:[Number(e.product_price).toFixed(2)," ₪"]})]}):null,r.jsx("div",{className:"store-profile-sponsored-desc",children:e.description}),r.jsx("button",{type:"button",className:"store-profile-open-details-btn",onClick:()=>l(`/stores/${c}/item/sponsored/${e.id}`),children:"عرض التفاصيل"})]},e.id))})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"store-profile-section-title store-profile-section-title--products",children:"المنتجات"}),re.length===0?r.jsxs("div",{className:"card",style:{color:"var(--text-secondary)",lineHeight:1.65},children:[r.jsx("div",{children:"لا توجد منتجات متاحة للمتسوّقين حالياً."}),t.is_owner?r.jsx("div",{style:{marginTop:10,fontSize:"0.9rem"},children:"إن كنت صاحب/ة هذا المتجر: المنتجات «المؤرشفة» من صفحة «منتجاتي» لا تظهر هنا — عطّل الأرشفة ليظهر المنتج للجمهور."}):null]}):r.jsx("div",{className:"store-profile-products-grid",children:re.map(e=>{const o=ge[e.id];return r.jsxs("article",{className:"card store-profile-product-card","data-store-product-id":e.id,"data-flash":J!=null&&String(J)===String(e.id)?"true":"false",children:[r.jsxs("div",{className:"store-profile-product-media",children:[x&&!t.is_owner?r.jsx("button",{type:"button",onClick:()=>ve(e),disabled:b,title:F[e.id]?"إزالة من المفضلة":"إضافة للمفضلة","aria-label":"مفضلة المنتج",className:"store-profile-product-favbtn",style:{cursor:b?"wait":"pointer"},children:r.jsx(Q,{size:18,color:"#e91e63",fill:F[e.id]?"#e91e63":"none"})}):null,B(e).length>0?r.jsx("div",{className:"store-profile-product-media-inner",children:r.jsx(de,{images:B(e),fill:!0,borderRadius:0,className:"store-product-grid-carousel"})}):r.jsx(Qe,{size:32,color:"var(--text-light)"}),r.jsx("div",{className:"store-profile-product-media-overlay",children:r.jsx("div",{className:"store-profile-product-media-name",children:e.name})}),t.is_owner?null:r.jsx("button",{type:"button",className:`store-profile-product-media-cartbtn${$?"":" store-profile-product-media-cartbtn--muted"}`,onClick:()=>Ne(e),disabled:C===e.id,title:"إضافة إلى السلة","aria-label":"إضافة إلى السلة",style:{cursor:C===e.id?"wait":"pointer"},children:r.jsx(ae,{size:18})})]}),r.jsxs("div",{className:"store-profile-product-body",children:[e.description?r.jsx("div",{className:"store-profile-product-desc",children:e.description}):null,Array.isArray(e.product_features)&&e.product_features.filter(Boolean).length>0?r.jsx("div",{className:"store-profile-product-feats",children:e.product_features.map(i=>String(i||"").trim()).filter(Boolean).slice(0,5).map((i,s)=>r.jsx("span",{className:"store-profile-product-feat",title:i,children:i},s))}):null,r.jsxs("div",{className:"store-profile-product-price",children:[e.price," ₪"]}),o!=null&&o>0&&r.jsxs("div",{className:"store-profile-in-cart",children:["في السلة: ",o]}),r.jsx("button",{type:"button",className:"store-profile-open-details-btn",onClick:()=>l(`/stores/${c}/item/product/${e.id}`),children:"عرض التفاصيل"}),r.jsxs("div",{className:"flex-between store-profile-qty-row",children:[r.jsx("button",{type:"button",onClick:()=>oe(e.id,-1),className:"store-profile-qty-btn","aria-label":"نقص الكمية",children:r.jsx(De,{size:18})}),r.jsx("input",{type:"text",inputMode:"numeric",value:Y[e.id]??1,onChange:i=>te(e.id,i.target.value),onBlur:i=>te(e.id,i.target.value||1),className:"store-profile-qty-input"}),r.jsx("button",{type:"button",onClick:()=>oe(e.id,1),className:"store-profile-qty-btn","aria-label":"زيادة الكمية",children:r.jsx(Ue,{size:18})})]})]})]},e.id)})})]})]})]}),r.jsx("style",{children:`
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
        .store-profile-sponsored-rail{
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 6px;
          scrollbar-width: none;
        }
        .store-profile-sponsored-rail::-webkit-scrollbar{ height: 0; }
        .store-profile-sponsored-card{
          min-width: 188px;
          max-width: 228px;
          padding: 10px;
          flex-shrink: 0;
        }
        .store-profile-sponsored-media{
          position: relative;
          margin-bottom: 8px;
          border-radius: 12px;
          overflow: hidden;
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
        .store-profile-sponsored-title{ font-weight: 900; color: var(--secondary); }
        .store-profile-sponsored-price-row{
          margin-top: 6px;
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
        .store-profile-sponsored-desc{
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-top: 4px;
          line-height: 1.55;
        }
        .store-profile-open-details-btn{
          width: 100%;
          margin-top: 10px;
          border: 1px solid var(--border);
          background: var(--white);
          color: var(--secondary);
          border-radius: 10px;
          padding: 9px 12px;
          font-weight: 800;
          cursor: pointer;
          transition: background .15s ease, border-color .15s ease;
        }
        .store-profile-open-details-btn:hover{
          border-color: rgba(255, 204, 0, 0.6);
          background: var(--primary-light);
        }
        .store-profile-products-grid{
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(136px, 100%), 1fr));
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
        .store-profile-product-desc{
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

      `})]})};export{cr as default};
