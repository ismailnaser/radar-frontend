import React, { useCallback, useEffect, useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { useAlert } from '../../components/AlertProvider';
import { getPrimaryAdminAccounts, createAdminAccount, setAdminAccountActive } from '../../api/data';
import { adminPanelCss } from './adminPanelCss';
import { formatApiError } from '../../utils/apiErrors';

function AdminAccounts() {
  const { showAlert, showConfirm } = useAlert();
  const myUsername = (localStorage.getItem('user_name') || '').trim().toLowerCase();

  const [adminAccounts, setAdminAccounts] = useState([]);
  const [loadingAccounts, setLoadingAccounts] = useState(false);
  const [creatingAccount, setCreatingAccount] = useState(false);
  const [accUsername, setAccUsername] = useState('');
  const [accPhone, setAccPhone] = useState('');
  const [accPassword, setAccPassword] = useState('');
  const [accTier, setAccTier] = useState('secondary');
  const [busyAccountId, setBusyAccountId] = useState(null);

  const loadAdminAccounts = useCallback(async () => {
    setLoadingAccounts(true);
    try {
      const data = await getPrimaryAdminAccounts();
      setAdminAccounts(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
      setAdminAccounts([]);
      await showAlert('تعذر تحميل قائمة المدراء.', 'خطأ');
    } finally {
      setLoadingAccounts(false);
    }
  }, [showAlert]);

  useEffect(() => {
    loadAdminAccounts();
  }, [loadAdminAccounts]);

  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    if (!accUsername.trim() || !accPhone.trim() || accPassword.length < 6) {
      await showAlert('أكمل اسم المستخدم ورقم الهاتف وكلمة مرور لا تقل عن 6 أحرف.', 'تنبيه');
      return;
    }
    setCreatingAccount(true);
    try {
      await createAdminAccount({
        username: accUsername.trim(),
        phone_number: accPhone.trim(),
        password: accPassword,
        tier: accTier,
      });
      await showAlert(
        accTier === 'primary' ? 'تم إنشاء مدير أساسي جديد.' : 'تم إنشاء مدير فرعي.',
        'تم'
      );
      setAccUsername('');
      setAccPhone('');
      setAccPassword('');
      setAccTier('secondary');
      loadAdminAccounts();
    } catch (err) {
      console.error(err);
      await showAlert(formatApiError(err, 'تعذر إنشاء الحساب.'), 'خطأ');
    } finally {
      setCreatingAccount(false);
    }
  };

  const handleToggleSecondary = async (acc) => {
    if (acc.is_primary_admin) return;
    const next = !acc.is_active;
    const word = next ? 'تفعيل' : 'تعطيل';
    const ok = await showConfirm(`${word} دخول هذا المدير الفرعي؟`, 'تأكيد');
    if (!ok) return;
    setBusyAccountId(acc.id);
    try {
      await setAdminAccountActive(acc.id, next);
      await showAlert(next ? 'تم التفعيل.' : 'تم التعطيل.', 'تم');
      loadAdminAccounts();
    } catch (e) {
      console.error(e);
      await showAlert('تعذر تحديث الحساب.', 'خطأ');
    } finally {
      setBusyAccountId(null);
    }
  };

  return (
    <MainLayout>
      <div className="admin-dash">
        <h1>إدارة المدراء</h1>
        <p className="admin-intro">
          إنشاء <strong>مدير فرعي</strong> أو <strong>مدير أساسي</strong> جديد، وتعطيل أو تفعيل دخول المدير الفرعي
          فقط.
        </p>

        <section className="card admin-section admin-primary-only">
          <form className="admin-account-form" onSubmit={handleCreateAdmin}>
            <div className="form-row-grid">
              <label>
                اسم المستخدم
                <input
                  type="text"
                  value={accUsername}
                  onChange={(e) => setAccUsername(e.target.value)}
                  autoComplete="off"
                />
              </label>
              <label>
                رقم الهاتف
                <input
                  type="text"
                  value={accPhone}
                  onChange={(e) => setAccPhone(e.target.value)}
                  autoComplete="off"
                />
              </label>
              <label>
                كلمة المرور
                <input
                  type="password"
                  value={accPassword}
                  onChange={(e) => setAccPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </label>
              <label>
                نوع الحساب
                <select value={accTier} onChange={(e) => setAccTier(e.target.value)}>
                  <option value="secondary">مدير فرعي</option>
                  <option value="primary">مدير أساسي (مثلك)</option>
                </select>
              </label>
            </div>
            <button type="submit" className="btn-ok" disabled={creatingAccount}>
              {creatingAccount ? 'جاري الإنشاء…' : 'إنشاء حساب'}
            </button>
          </form>

          {loadingAccounts ? (
            <p>جاري تحميل المدراء…</p>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-accounts-table">
                <thead>
                  <tr>
                    <th>المستخدم</th>
                    <th>الهاتف</th>
                    <th>النوع</th>
                    <th>الحالة</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {adminAccounts.map((acc) => {
                    const isSelf = acc.username.trim().toLowerCase() === myUsername;
                    const isSecondary = !acc.is_primary_admin;
                    return (
                      <tr key={acc.id}>
                        <td>
                          {acc.username}
                          {isSelf ? <span className="you-badge">أنت</span> : null}
                        </td>
                        <td>{acc.phone_number}</td>
                        <td>
                          <span
                            className={
                              acc.is_primary_admin ? 'tier-badge tier-primary' : 'tier-badge tier-secondary'
                            }
                          >
                            {acc.is_primary_admin ? 'أساسي' : 'فرعي'}
                          </span>
                        </td>
                        <td>{acc.is_active ? 'نشط' : 'معطّل'}</td>
                        <td>
                          {isSecondary ? (
                            <button
                              type="button"
                              className="btn-toggle"
                              disabled={busyAccountId === acc.id || isSelf}
                              onClick={() => handleToggleSecondary(acc)}
                              title={isSelf ? 'لا يمكنك تعطيل حسابك من هنا' : ''}
                            >
                              {acc.is_active ? 'تعطيل الدخول' : 'تفعيل الدخول'}
                            </button>
                          ) : (
                            <span className="muted small">—</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <style dangerouslySetInnerHTML={{ __html: adminPanelCss }} />
      </div>
    </MainLayout>
  );
}

export default AdminAccounts;
