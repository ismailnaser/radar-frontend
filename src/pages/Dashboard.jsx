import React, { useState, useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import { Package, Plus, BarChart3, Clock, Settings, Megaphone } from 'lucide-react';
import { getMerchantStats, getMerchantProducts } from '../api/data';
import GuestAccessPrompt from '../components/GuestAccessPrompt';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [statsData, setStatsData] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isGuest, setIsGuest] = useState(localStorage.getItem('isGuest') === 'true');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [stats, prods] = await Promise.all([
          getMerchantStats(),
          getMerchantProducts()
        ]);
        setStatsData(stats);
        setProducts(prods);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const stats = [
    { label: 'زوار الصفحة', value: statsData?.visitor_count || '0', icon: <BarChart3 size={24} color="#FFCC00" /> },
    { label: 'الأكثر إضافة للسلة', value: statsData?.top_products?.[0]?.product__name || 'قريباً', icon: <Package size={24} color="#FFCC00" /> },
    { label: 'الاشتراك المتبقي', value: '30 يوم', icon: <Clock size={24} color="#FFCC00" /> },
  ];

  return (
    <MainLayout>
      <div className="dashboard-container">
        {isGuest ? (
          <GuestAccessPrompt 
            title="لوحة التحكم خاصة بالتجار فقط" 
            message="يجب عليك إنشاء حساب تاجر لتتمكن من إضافة المنتجات، متابعة الإحصائيات، وطلب الإعلانات الممولة لمكانك."
          />
        ) : (
          <>
            <h1>لوحة تحكم التاجر</h1>
            
            {/* Stats Grid */}
            <div className="stats-grid">
              {stats.map((stat, i) => (
                <div key={i} className="stat-card card flex-center" style={{ justifyContent: 'space-between' }}>
                   <div className="stat-info">
                      <p>{stat.label}</p>
                      <h3>{stat.value}</h3>
                   </div>
                   <div className="stat-icon-box">{stat.icon}</div>
                </div>
              ))}
            </div>

            {/* Dashboard Actions */}
            <div className="dashboard-content card">
               <div className="tabs flex-center">
                  <button className={`tab-btn ${activeTab === 'products' ? 'active' : ''}`} onClick={() => setActiveTab('products')}>منتجاتي</button>
                  <button className={`tab-btn ${activeTab === 'ads' ? 'active' : ''}`} onClick={() => setActiveTab('ads')}>طلب إعلان ممول</button>
                  <button className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>إعدادات المتجر</button>
               </div>

               <div className="tab-pane">
                  {activeTab === 'products' && (
                    <div className="products-pane">
                       <button className="btn-primary" style={{ width: 'auto', marginBottom: '20px' }}>
                          <Plus size={20} /> إضافة منتج جديد
                       </button>
                       <div className="products-table">
                          {loading ? (
                            <p>جاري تحميل المنتجات...</p>
                          ) : products.length > 0 ? (
                            <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))', gap: '15px' }}>
                               {products.map(product => (
                                 <div key={product.id} className="card product-item" style={{ padding: '10px', textAlign: 'center' }}>
                                    <h4>{product.name}</h4>
                                    <p style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>{product.price} ₪</p>
                                 </div>
                               ))}
                            </div>
                          ) : (
                            <p>لا توجد منتجات حالياً. ابدأ بإضافة أول منتج لمتجرك!</p>
                          )}
                       </div>
                    </div>
                  )}

                  {activeTab === 'ads' && (
                    <div className="ads-pane">
                       <h3>اطلب إعلان ممول</h3>
                       <p>اجعل متجرك يظهر في الواجهة الرئيسية بجانب المتاجر الكبرى.</p>
                       <form style={{ marginTop: '20px' }} onSubmit={(e) => e.preventDefault()}>
                          <div className="input-group"><input type="text" placeholder="عنوان الإعلان" /></div>
                          <div className="input-group"><textarea placeholder="وصف الإعلان" style={{ width: '100%', padding: '10px', borderRadius: '12px', border: '1px solid #eee' }}></textarea></div>
                          <button className="btn-primary" type="button"><Megaphone size={20} /> طلب الإعلان الآن</button>
                       </form>
                    </div>
                  )}
               </div>
            </div>
          </>
        )}

        <style dangerouslySetInnerHTML={{ __html: `
          .dashboard-container h1 { margin-bottom: 25px; font-size: 1.8rem; }
          .dashboard-container {
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr)); gap: clamp(14px, 3vw, 20px); margin-bottom: 30px; }
          .stat-card { padding: 1.5rem; text-align: right; }
          .stat-info p { color: #666; font-size: 0.9rem; }
          .stat-info h3 { margin-top: 5px; font-size: 1.5rem; color: var(--secondary); }
          .stat-icon-box { background: #FFF9E6; padding: 12px; border-radius: 15px; }

          .tabs { border-bottom: 1px solid #eee; margin-bottom: 20px; gap: 12px 20px; justify-content: flex-start; flex-wrap: wrap; }
          .tab-btn { background: none; border: none; padding: 10px 5px; font-size: clamp(0.95rem, 2.8vw, 1.1rem); cursor: pointer; color: #777; border-bottom: 3px solid transparent; }
          .tab-btn.active { color: var(--secondary); border-color: var(--primary); font-weight: bold; }
          
          .product-item h4 { margin-bottom: 5px; }
        `}} />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
