import React, { useMemo, useState } from 'react';
import { changeMyPassword, changeMyUsername } from '../api/data';
import { formatApiError } from '../utils/apiErrors';
import { useAlert } from '../components/AlertProvider';
import MainLayout from '../components/MainLayout';

export default function Settings() {
  const { showAlert, showConfirm } = useAlert();
  const isGuest = localStorage.getItem('isGuest') === 'true';
  const hasToken = !!localStorage.getItem('token');
  const isAuthenticated = hasToken && !isGuest;

  const initialUsername = useMemo(() => localStorage.getItem('user_name') || '', []);
  const [username, setUsername] = useState(initialUsername);
  const [usernameSaving, setUsernameSaving] = useState(false);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordSaving, setPasswordSaving] = useState(false);

  if (!isAuthenticated) {
    return (
      <MainLayout>
        <div dir="rtl" style={{ maxWidth: 720, margin: '0 auto' }}>
          <div className="card">
            <h2 style={{ marginTop: 0 }}>الإعدادات</h2>
            <div style={{ color: 'var(--text-secondary)', fontWeight: 800, lineHeight: 1.8 }}>
              هذه الصفحة متاحة للحسابات المسجّلة فقط.
            </div>
          </div>
          <style dangerouslySetInnerHTML={{ __html: baseStyles }} />
        </div>
      </MainLayout>
    );
  }

  const onSaveUsername = async (e) => {
    e.preventDefault();
    const v = (username || '').trim();
    if (!v) {
      showAlert('أدخل اسم المستخدم.', 'تنبيه');
      return;
    }
    const okName = await showConfirm('تأكيد حفظ اسم المستخدم الجديد؟', 'تأكيد');
    if (!okName) return;
    setUsernameSaving(true);
    try {
      const res = await changeMyUsername(v);
      const newU = res?.username || v;
      localStorage.setItem('user_name', newU);
      setUsername(newU);
      showAlert('تم تحديث اسم المستخدم.', 'تم');
    } catch (err) {
      showAlert(formatApiError(err, 'تعذر تحديث اسم المستخدم. حاول لاحقاً.'), 'خطأ');
    } finally {
      setUsernameSaving(false);
    }
  };

  const onSavePassword = async (e) => {
    e.preventDefault();
    if (!currentPassword) {
      showAlert('أدخل كلمة المرور الحالية.', 'تنبيه');
      return;
    }
    if (!newPassword || newPassword.length < 8) {
      showAlert('كلمة المرور الجديدة يجب أن تكون 8 أحرف على الأقل.', 'تنبيه');
      return;
    }
    const okPass = await showConfirm('تأكيد تغيير كلمة المرور؟', 'تأكيد');
    if (!okPass) return;
    setPasswordSaving(true);
    try {
      await changeMyPassword({ current_password: currentPassword, new_password: newPassword });
      setCurrentPassword('');
      setNewPassword('');
      showAlert('تم تغيير كلمة المرور بنجاح.', 'تم');
    } catch (err) {
      showAlert(formatApiError(err, 'تعذر تغيير كلمة المرور. تحقق من البيانات وحاول لاحقاً.'), 'خطأ');
    } finally {
      setPasswordSaving(false);
    }
  };

  return (
    <MainLayout>
    <div dir="rtl" style={{ maxWidth: 860, margin: '0 auto' }}>
      <div className="settings-wrap">
        <div className="card">
          <h2 style={{ marginTop: 0 }}>الإعدادات</h2>
          <div className="muted">
            يمكنك هنا تحديث اسم المستخدم وكلمة المرور.
          </div>
        </div>

        <div className="grid">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>تغيير اسم المستخدم</h3>
            <form onSubmit={onSaveUsername} className="form">
              <label className="lbl">اسم المستخدم</label>
              <input
                className="inp"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="اسم المستخدم الجديد"
                autoComplete="username"
              />
              <button className="btn" type="submit" disabled={usernameSaving}>
                {usernameSaving ? 'جاري الحفظ…' : 'حفظ'}
              </button>
            </form>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>تغيير كلمة المرور</h3>
            <form onSubmit={onSavePassword} className="form">
              <label className="lbl">كلمة المرور الحالية</label>
              <input
                className="inp"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                autoComplete="current-password"
              />
              <label className="lbl">كلمة المرور الجديدة</label>
              <input
                className="inp"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                autoComplete="new-password"
              />
              <button className="btn" type="submit" disabled={passwordSaving}>
                {passwordSaving ? 'جاري الحفظ…' : 'تغيير كلمة المرور'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: baseStyles }} />
    </div>
    </MainLayout>
  );
}

const baseStyles = `
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
`;

