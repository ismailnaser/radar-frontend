import React, { useEffect, useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { Plus, Pencil, Archive, Trash2, Image as ImageIcon, Megaphone, Download, Upload, Info } from 'lucide-react';
import ImageCarousel from '../../components/ImageCarousel';
import { visualImageUrls } from '../../utils/productImages';
import { 
  deleteMerchantProduct, 
  getMerchantProducts, 
  updateMerchantProduct, 
  exportMerchantProductsExcel, 
  importMerchantProductsExcel 
} from '../../api/data';
import { Link } from 'react-router-dom';
import { useAlert } from '../../components/AlertProvider';

const MerchantProducts = () => {
  const { showAlert, showConfirm } = useAlert();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [importing, setImporting] = useState(false);

  const refresh = async () => {
    setLoading(true);
    try {
      const data = await getMerchantProducts();
      setProducts(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { refresh(); }, []);

  const toggleArchive = async (p) => {
    await updateMerchantProduct(p.id, { is_archived: !p.is_archived });
    await refresh();
  };

  const remove = async (p) => {
    const ok = await showConfirm('متأكد بدك تحذف المنتج نهائياً؟', 'تأكيد الحذف');
    if (!ok) return;
    await deleteMerchantProduct(p.id);
    await refresh();
  };

  const handleExport = async () => {
    try {
      const blob = await exportMerchantProductsExcel();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `منتجات_رادار_${new Date().toLocaleDateString('ar-EG').replace(/\//g, '-')}.xlsx`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      void showAlert('فشل تصدير الملف. حاول مرة أخرى.', 'خطأ');
    }
  };

  const handleImport = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setImporting(true);
    try {
      const res = await importMerchantProductsExcel(file);
      await showAlert(res.message, 'تم الاستيراد');
      if (res.skipped?.length || res.errors?.length) {
        console.warn('Import issues:', res);
      }
      await refresh();
    } catch (err) {
      const msg = err.response?.data?.error || 'فشل استيراد الملف. تأكد من الصيغة والبيانات.';
      await showAlert(msg, 'خطأ');
    } finally {
      setImporting(false);
      e.target.value = ''; // Reset input
    }
  };

  const showImportHelp = () => {
    showAlert(
      'يجب أن يكون ملف Excel بالصيغة التالية:\n' +
      '1. العمود الأول: اسم المنتج (مطلوب)\n' +
      '2. العمود الثاني: السعر (رقم)\n' +
      '3. العمود الثالث: وصف المنتج\n' +
      '4. العمود الرابع: تفاصيل المنتج (افصل بينها بـ |)\n\n' +
      'تأكد من البدء من الصف الثاني (الصف الأول للعناوين).',
      'تعليمات الاستيراد'
    );
  };

  return (
    <MainLayout>
      <div className="merchant-products">
        <div className="flex-between" style={{ marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
          <h1 style={{ fontSize: '1.8rem', margin: 0 }}>منتجاتي</h1>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button 
              onClick={handleExport} 
              className="btn-secondary" 
              style={{ width: 'auto', display: 'inline-flex', gap: 8, alignItems: 'center', background: 'var(--white)', color: 'var(--secondary)', border: '1px solid var(--border)' }}
            >
              <Download size={18} />
              تصدير إكسل
            </button>
            <div style={{ position: 'relative' }}>
              <button 
                disabled={importing}
                className="btn-secondary" 
                style={{ width: 'auto', display: 'inline-flex', gap: 8, alignItems: 'center', background: 'var(--white)', color: 'var(--secondary)', border: '1px solid var(--border)' }}
                onClick={() => document.getElementById('excel-import-input').click()}
              >
                <Upload size={18} />
                {importing ? 'جاري الاستيراد...' : 'استيراد إكسل'}
              </button>
              <input 
                id="excel-import-input"
                type="file" 
                accept=".xlsx, .xls" 
                style={{ display: 'none' }} 
                onChange={handleImport} 
              />
            </div>
            <Link to="/merchant/products/new" className="btn-primary" style={{ width: 'auto', display: 'inline-flex', gap: 10, alignItems: 'center' }}>
              <Plus size={18} />
              إضافة منتج
            </Link>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
          <div
            className="card"
            style={{
              flex: 1,
              padding: '12px 16px',
              background: 'var(--primary-light)',
              borderColor: 'rgba(245,192,0,0.45)',
              fontSize: '0.92rem',
              lineHeight: 1.55,
              color: 'var(--text-primary)',
            }}
          >
            <strong>مهم:</strong> المنتجات ذات الحالة «مؤرشف» لا تظهر في صفحة المتجر للمتسوّقين. اضغط أيقونة الأرشيف بجانب المنتج لتغيير حالته.
          </div>
          <button 
            onClick={showImportHelp}
            className="iconBtn" 
            title="تعليمات الاستيراد"
            style={{ background: 'var(--white)', border: '1px solid var(--border)', flexShrink: 0 }}
          >
            <Info size={20} />
          </button>
        </div>

        <div className="card merchant-products-table" style={{ padding: 0, overflow: 'hidden' }}>
          {loading ? (
            <div style={{ padding: 18 }}>جاري التحميل...</div>
          ) : products.length === 0 ? (
            <div style={{ padding: 18 }}>لا يوجد منتجات بعد.</div>
          ) : (
            <div className="table">
              <div className="row head">
                <div>المنتج</div>
                <div>السعر</div>
                <div>الحالة</div>
                <div>إجراءات</div>
              </div>
              {products.map((p) => (
                <div className="row product-row" key={p.id}>
                  <div className="cell productCell">
                    <div className="product-thumb-wrap">
                      {visualImageUrls(p).length > 0 ? (
                        <ImageCarousel images={visualImageUrls(p)} alt={p.name} height={76} borderRadius={14} />
                      ) : (
                        <div className="thumb thumb-empty">
                          <ImageIcon size={18} />
                        </div>
                      )}
                    </div>
                    <div className="product-text">
                      <div className="product-name">{p.name}</div>
                      <div className="product-desc">{p.description || '—'}</div>
                    </div>
                  </div>
                  <div className="product-row-meta">
                    <div className="cell cell-price" data-label="السعر">
                      <span className="price-value">{p.price} ₪</span>
                    </div>
                    <div className="cell cell-status" data-label="الحالة">
                      <span className="badge" style={{ background: p.is_archived ? '#eee' : 'var(--primary)', color: 'var(--secondary)' }}>
                        {p.is_archived ? 'مؤرشف' : 'نشط'}
                      </span>
                      {p.is_archived && (
                        <div className="archived-hint">مخفي عن صفحة المتجر</div>
                      )}
                    </div>
                  </div>
                  <div className="cell actions" data-label="إجراءات">
                    <Link to={`/merchant/products/${p.id}/edit`} className="iconBtn" title="تعديل">
                      <Pencil size={18} />
                    </Link>
                    {!p.is_archived ? (
                      <Link
                        to="/merchant/ads"
                        state={{
                          prefillFromProduct: {
                            id: p.id,
                            name: p.name || '',
                            description: (p.description || '').trim(),
                            price: p.price,
                            image: p.image || null,
                            images: visualImageUrls(p),
                          },
                        }}
                        className="iconBtn"
                        title="إعلان ممول لهذا المنتج"
                        aria-label="إعلان ممول لهذا المنتج"
                      >
                        <Megaphone size={18} />
                      </Link>
                    ) : null}
                    <button type="button" className="iconBtn" onClick={() => toggleArchive(p)} title={p.is_archived ? 'إلغاء الأرشفة' : 'أرشفة'}>
                      <Archive size={18} />
                    </button>
                    <button type="button" className="iconBtn danger" onClick={() => remove(p)} title="حذف">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .merchant-products{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .merchant-products .table {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          .merchant-products .product-row-meta { display: contents; }
          .merchant-products .row {
            display: grid;
            grid-template-columns: minmax(220px, 1.7fr) minmax(90px, 0.6fr) minmax(100px, 0.7fr) minmax(150px, 0.9fr);
            gap: 12px;
            padding: 14px 16px;
            align-items: center;
            border-top: 1px solid var(--border);
          }
          .merchant-products .row.head { background: var(--surface); font-weight: 900; border-top: none; }
          .merchant-products .row.head > div { color: var(--text-secondary); }
          .merchant-products .productCell { display: flex; gap: 12px; align-items: center; min-width: 0; }
          .merchant-products .product-text { min-width: 0; }
          .merchant-products .product-name { font-weight: 900; color: var(--text-primary); }
          .merchant-products .product-desc {
            color: var(--text-secondary);
            font-size: 0.9rem;
            line-height: 1.45;
            margin-top: 4px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .merchant-products .product-thumb-wrap {
            flex-shrink: 0;
            width: 108px;
            max-width: 36vw;
          }
          .merchant-products .thumb-empty {
            height: 88px;
            border-radius: 14px;
            background: var(--primary-light);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border: 1px solid rgba(245,192,0,0.25);
          }
          .merchant-products .cell-price,
          .merchant-products .cell-status {
            justify-self: center;
          }
          .merchant-products .price-value {
            font-weight: 900;
            font-variant-numeric: tabular-nums;
            white-space: nowrap;
          }
          .merchant-products .cell-status { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
          .merchant-products .archived-hint { font-size: 0.78rem; color: #c0392b; margin-top: 4px; font-weight: 700; line-height: 1.35; }
          .merchant-products .actions {
            display: flex;
            gap: 10px;
            justify-content: flex-start;
            flex-wrap: wrap;
            min-width: 0;
          }
          .merchant-products .iconBtn {
            border: 1px solid var(--border);
            background: var(--white);
            padding: 8px;
            border-radius: 12px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--secondary);
          }
          .merchant-products .iconBtn:hover { background: var(--primary-light); }
          .merchant-products .iconBtn.danger { color: #c0392b; }

          @media (max-width: 900px) {
            .merchant-products .row.head { display: none; }
            .merchant-products .merchant-products-table {
              border-radius: 16px;
            }
            .merchant-products .table {
              background: var(--surface);
              padding: 10px 8px 14px;
              gap: 0;
              border-radius: 0 0 var(--radius-lg) var(--radius-lg);
            }
            .merchant-products .row.product-row {
              display: flex;
              flex-direction: column;
              align-items: stretch;
              gap: 14px;
              padding: 16px 14px;
              margin: 0 4px 12px;
              border: 1px solid var(--border);
              border-radius: 14px;
              background: var(--white);
              box-shadow: var(--shadow-sm);
              border-top: 1px solid var(--border);
            }
            .merchant-products .row.product-row:last-child { margin-bottom: 4px; }
            .merchant-products .product-row-meta {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 12px 14px;
              align-items: start;
              width: 100%;
            }
            .merchant-products .cell-price,
            .merchant-products .cell-status {
              justify-self: stretch;
              background: var(--surface);
              border: 1px solid var(--border);
              border-radius: 12px;
              padding: 10px 12px;
            }
            .merchant-products .cell-status { align-items: flex-start; }
            .merchant-products .productCell { align-items: flex-start; }
            .merchant-products .product-thumb-wrap { width: 120px; max-width: 55vw; }
            .merchant-products .thumb-empty { height: 100px; border-radius: 16px; }
            .merchant-products .cell[data-label]::before {
              content: attr(data-label);
              display: block;
              font-size: 0.72rem;
              font-weight: 800;
              color: var(--text-secondary);
              margin-bottom: 6px;
              text-transform: none;
              letter-spacing: 0.02em;
            }
            .merchant-products .actions {
              justify-content: flex-end;
              padding-top: 8px;
              border-top: 1px dashed var(--border);
            }
            .merchant-products .iconBtn { min-width: 44px; min-height: 44px; padding: 10px; }
          }

          @media (max-width: 380px) {
            .merchant-products .product-row-meta { grid-template-columns: 1fr; }
          }
        `}} />
      </div>
    </MainLayout>
  );
};

export default MerchantProducts;

