import React, { useMemo } from 'react';
import MainLayout from '../components/MainLayout';

const UserGuide = () => {
  const userType = localStorage.getItem('user_type') || 'shopper';
  const isAuthed = !!localStorage.getItem('token');
  const isGuest = localStorage.getItem('isGuest') === 'true';
  const isMember = isAuthed && !isGuest;

  const showShopper = userType === 'shopper' || !isMember;
  const showMerchant = userType === 'merchant';

  const titleSuffix = useMemo(() => {
    if (showMerchant) return '— التاجر';
    if (showShopper) return '— المتسوق';
    return '';
  }, [showMerchant, showShopper]);

  return (
    <MainLayout>
      <div className="guide-page">
        <div className="card guide-hero">
          <h1 className="guide-title">دليل المستخدم {titleSuffix}</h1>
          <p className="guide-sub">
            رادار هو منصة تربط المتسوقين بالمتاجر والخدمات داخل غزة بسرعة وبطريقة سهلة: اكتشف، قارن، احفظ، واطلب.
          </p>
        </div>

        {showShopper ? (
          <section className="card guide-section" aria-label="دليل المتسوق">
            <h2 className="guide-h2">للمتسوق</h2>

            <div className="guide-grid">
              <div className="guide-item">
                <div className="guide-item__title">البحث والاستكشاف</div>
                <ul className="guide-list">
                  <li>ابحث عن متجر/منتج/قسم من شريط البحث.</li>
                  <li>استخدم الفلاتر لاختيار أكثر من قسم في نفس الوقت.</li>
                  <li>تصفح المتاجر من صفحة المتاجر أو من الخريطة.</li>
                </ul>
              </div>

              <div className="guide-item">
                <div className="guide-item__title">الخريطة</div>
                <ul className="guide-list">
                  <li>اعرض المتاجر داخل حدود غزة فقط.</li>
                  <li>استخدم GPS أو تحديد يدوي لموقعك (اختياري).</li>
                  <li>فلترة نقاط الخدمات المجتمعية حسب الأقسام.</li>
                </ul>
              </div>

              <div className="guide-item">
                <div className="guide-item__title">المفضلة والسلال</div>
                <ul className="guide-list">
                  <li>أضف منتجات للمفضلة أو للسلة (للمستخدمين المسجلين فقط).</li>
                  <li>أنشئ أكثر من سلة ورتّب مشترياتك.</li>
                  <li>شارك السلة مع أي شخص عبر رابط مشاركة.</li>
                </ul>
              </div>

              <div className="guide-item">
                <div className="guide-item__title">العروض الممولة</div>
                <ul className="guide-list">
                  <li>العرض الممول قد يكون بسعر خاص لمدة محددة.</li>
                  <li>بعد انتهاء الإعلان يرجع سعر المنتج لسعر المتجر الأصلي (إن كان المنتج موجوداً بالمتجر).</li>
                </ul>
              </div>
            </div>
          </section>
        ) : null}

        {showMerchant ? (
          <section className="card guide-section" aria-label="دليل التاجر">
            <h2 className="guide-h2">للتاجر</h2>

            <div className="guide-grid">
              <div className="guide-item">
                <div className="guide-item__title">إدارة المتجر</div>
                <ul className="guide-list">
                  <li>حدّث معلومات المتجر من إعدادات المتجر.</li>
                  <li>اختر أكثر من قسم لمتجرك (مثل ملابس + كوزمتكس).</li>
                  <li>أضف موقع المتجر على الخريطة ليظهر زر الموقع للزوار.</li>
                </ul>
              </div>

              <div className="guide-item">
                <div className="guide-item__title">المنتجات</div>
                <ul className="guide-list">
                  <li>أضف منتجات جديدة مع صور ومع تفاصيل/ميزات المنتج.</li>
                  <li>عدّل الأسعار بشكل مستمر لضمان دقة الطلبات.</li>
                  <li>إذا نفدت كمية منتج: يمكنك <strong>أرشفة المنتج</strong> حتى لا يظهر للمتسوقين، وعند توفره مجدداً يمكنك <strong>إلغاء الأرشفة</strong>.</li>
                </ul>
              </div>

              <div className="guide-item">
                <div className="guide-item__title">الإعلانات الممولة</div>
                <ul className="guide-list">
                  <li>اطلب إعلان ممول لزيادة الوصول.</li>
                  <li>تابع حالة الإعلان من "إعلاناتي الممولة".</li>
                  <li>إذا أنت غيّرت سعر المنتج داخل الإعلان الممول، فسيظهر للمتسوقين بالسعر الجديد خلال مدة الإعلان فقط (وقد يختلف عن سعر المنتج الأصلي في المتجر).</li>
                </ul>
              </div>

              <div className="guide-item">
                <div className="guide-item__title">الاشتراك والإحصائيات</div>
                <ul className="guide-list">
                  <li>راجع حالة الاشتراك وتجديده من صفحة الاشتراك.</li>
                  <li>تابع إحصائيات المتجر والاهتمام بمنتجاتك.</li>
                </ul>
              </div>
            </div>
          </section>
        ) : null}

        {isMember && (userType === 'admin') ? (
          <div className="card guide-note">
            هذا الدليل مخصص للمستخدم والتاجر فقط. كمدير يمكنك الرجوع للوحة الإدارة من القائمة.
          </div>
        ) : null}
      </div>

      <style>{`
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
      `}</style>
    </MainLayout>
  );
};

export default UserGuide;

