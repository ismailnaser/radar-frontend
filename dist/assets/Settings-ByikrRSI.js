import{a as U,b as A,r as n,j as e,L as D,aT as W,aU as H,aV as G}from"./index-3KljEs72.js";import{f as m}from"./apiErrors-Bccm4O3Y.js";import{M as N}from"./MainLayout-BleNp4n1.js";function $(){const{showAlert:t,showConfirm:l}=U(),C=A(),T=localStorage.getItem("isGuest")==="true",M=!!localStorage.getItem("token")&&!T,_=n.useMemo(()=>localStorage.getItem("user_name")||"",[]),[u,p]=n.useState(_),[g,h]=n.useState(!1),E=n.useMemo(()=>localStorage.getItem("user_email")||"",[]),[x,f]=n.useState(E),[b,y]=n.useState(!1),[c,v]=n.useState(""),[i,w]=n.useState(""),[j,S]=n.useState(!1);if(!M)return e.jsx(N,{children:e.jsxs("div",{dir:"rtl",style:{maxWidth:720,margin:"0 auto"},children:[e.jsxs("div",{className:"card",children:[e.jsx("h2",{style:{marginTop:0},children:"الإعدادات"}),e.jsx("div",{style:{color:"var(--text-secondary)",fontWeight:800,lineHeight:1.8},children:"هذه الصفحة متاحة للحسابات المسجّلة فقط."})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:k}})]})});const I=async a=>{a.preventDefault();const r=(u||"").trim();if(!r){t("أدخل اسم المستخدم.","تنبيه");return}if(await l("تأكيد حفظ اسم المستخدم الجديد؟","تأكيد")){h(!0);try{const s=await W(r),o=(s==null?void 0:s.username)||r;localStorage.setItem("user_name",o),p(o),t("تم تحديث اسم المستخدم.","تم")}catch(s){t(m(s,"تعذر تحديث اسم المستخدم. حاول لاحقاً."),"خطأ")}finally{h(!1)}}},P=async a=>{if(a.preventDefault(),!c){t("أدخل كلمة المرور الحالية.","تنبيه");return}if(!i||i.length<8){t("كلمة المرور الجديدة يجب أن تكون 8 أحرف على الأقل.","تنبيه");return}if(await l("تأكيد تغيير كلمة المرور؟","تأكيد")){S(!0);try{await H({current_password:c,new_password:i}),v(""),w(""),t("تم تغيير كلمة المرور بنجاح.","تم")}catch(d){t(m(d,"تعذر تغيير كلمة المرور. تحقق من البيانات وحاول لاحقاً."),"خطأ")}finally{S(!1)}}},L=async a=>{a.preventDefault();const r=(x||"").trim().toLowerCase();if(!r||!r.includes("@")){t("أدخل بريد إلكتروني صحيح.","تنبيه");return}if(await l("تأكيد حفظ البريد الإلكتروني؟","تأكيد")){y(!0);try{const s=await G(r),o=((s==null?void 0:s.email)||r||"").trim().toLowerCase();localStorage.setItem("user_email",o),f(o),t("تم تحديث البريد الإلكتروني.","تم")}catch(s){t(m(s,"تعذر تحديث البريد الإلكتروني. حاول لاحقاً."),"خطأ")}finally{y(!1)}}};return e.jsx(N,{children:e.jsxs("div",{dir:"rtl",style:{maxWidth:860,margin:"0 auto"},children:[e.jsxs("div",{className:"settings-wrap",children:[e.jsxs("div",{className:"card",children:[e.jsx("h2",{style:{marginTop:0},children:"الإعدادات"}),e.jsx("div",{className:"muted",children:"يمكنك هنا تحديث اسم المستخدم والبريد الإلكتروني وكلمة المرور."})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{style:{marginTop:0},children:"تغيير اسم المستخدم"}),e.jsxs("form",{onSubmit:I,className:"form",children:[e.jsx("label",{className:"lbl",children:"اسم المستخدم"}),e.jsx("input",{className:"inp",value:u,onChange:a=>p(a.target.value),placeholder:"اسم المستخدم الجديد",autoComplete:"username"}),e.jsx("button",{className:"btn",type:"submit",disabled:g,children:g?"جاري الحفظ…":"حفظ"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{style:{marginTop:0},children:"البريد الإلكتروني"}),e.jsxs("form",{onSubmit:L,className:"form",children:[e.jsx("label",{className:"lbl",children:"البريد الإلكتروني"}),e.jsx("input",{className:"inp",value:x,onChange:a=>f(a.target.value),placeholder:"example@email.com",autoComplete:"email",inputMode:"email"}),e.jsx("button",{className:"btn",type:"submit",disabled:b,children:b?"جاري الحفظ…":"حفظ"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{style:{marginTop:0},children:"تغيير كلمة المرور"}),e.jsxs("form",{onSubmit:P,className:"form",children:[e.jsx("label",{className:"lbl",children:"كلمة المرور الحالية"}),e.jsx("input",{className:"inp",type:"password",value:c,onChange:a=>v(a.target.value),autoComplete:"current-password"}),e.jsx("label",{className:"lbl",children:"كلمة المرور الجديدة"}),e.jsx("input",{className:"inp",type:"password",value:i,onChange:a=>w(a.target.value),autoComplete:"new-password"}),e.jsx("div",{style:{marginTop:-2,marginBottom:2,textAlign:"right"},children:e.jsx(D,{to:`/forgot-password?next=${encodeURIComponent(C.pathname||"/settings")}`,style:{fontWeight:900,color:"var(--secondary)",textDecoration:"none",opacity:.92},children:"نسيت كلمة المرور؟"})}),e.jsx("button",{className:"btn",type:"submit",disabled:j,children:j?"جاري الحفظ…":"تغيير كلمة المرور"})]})]})]})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:k}})]})})}const k=`
.settings-wrap{ display:flex; flex-direction:column; gap:12px; }
.grid{ display:grid; grid-template-columns: 1fr 1fr; gap:12px; }
@media (max-width: 900px){ .grid{ grid-template-columns: 1fr; } }

.card{
  background: rgba(255,255,255,0.92);
  border: 1px solid rgba(232, 230, 224, 0.95);
  border-radius: 18px;
  box-shadow: 0 10px 26px rgba(26, 29, 38, 0.06);
  padding: 14px;
}
.muted{ color: var(--text-secondary); font-weight: 800; opacity: 0.8; line-height: 1.7; }
.form{ display:flex; flex-direction:column; gap:10px; margin-top: 10px; }
.lbl{ font-weight: 900; color: var(--secondary); font-size: 0.9rem; }
.inp{
  height: 46px;
  border-radius: 14px;
  border: 1px solid rgba(232, 230, 224, 0.95);
  padding: 0 12px;
  font-family: inherit;
  outline: none;
  background: rgba(255,255,255,0.95);
}
.inp:focus{
  border-color: rgba(245, 192, 0, 0.55);
  box-shadow: 0 0 0 4px rgba(245, 192, 0, 0.16);
}
.btn{
  height: 46px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: 950;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
  color: var(--secondary);
  box-shadow: var(--shadow-gold);
}
.btn:disabled{ opacity: 0.75; cursor: wait; }
`;export{$ as default};
