import React from 'react';
import { X, Check, AlertCircle, Info, ShoppingCart, Plus } from 'lucide-react';

const CustomModal = ({ 
  isOpen, 
  onClose, 
  title, 
  message, 
  type = 'info', // 'info', 'confirm', 'prompt', 'select'
  onConfirm, 
  inputValue, 
  setInputValue,
  placeholder = 'أدخل القيمة هنا...',
  options,
  primaryActionLabel,
  onPrimaryAction,
}) => {
  if (!isOpen) return null;
  const list = Array.isArray(options) ? options : [];

  const handleConfirm = () => {
    if (type === 'prompt') {
      if (onConfirm) onConfirm(inputValue);
    } else if (type === 'select') {
      // اختيار عنصر يتم عبر أزرار الخيارات
      if (onConfirm) onConfirm(null);
    } else if (onConfirm) {
      onConfirm(true);
    } else {
      onClose();
    }
  };

  return (
    <div className="modal-overlay flex-center">
      <div className="modal-content card animate-float">
        <div className="modal-header flex-center">
          <div className={`modal-icon flex-center ${type}`}>
            {type === 'info' && <Info size={24} />}
            {type === 'confirm' && <AlertCircle size={24} />}
            {type === 'prompt' && <Check size={24} />}
            {type === 'select' && <ShoppingCart size={24} />}
          </div>
          <h3>{title}</h3>
          <button className="close-btn" onClick={onClose}><X size={20} /></button>
        </div>
        
        <div className="modal-body">
          <p>{message}</p>
          {type === 'prompt' && (
            <div className="input-group" style={{ marginTop: '15px' }}>
              <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder={placeholder}
                autoFocus
              />
            </div>
          )}
          {type === 'select' && (
            <div className="modal-select-list" style={{ marginTop: 14 }}>
              {list.length === 0 ? (
                <div
                  style={{
                    padding: '12px 14px',
                    borderRadius: 12,
                    background: 'var(--surface, #fdfdf9)',
                    border: '1px solid var(--border, #e8e8e8)',
                    color: 'var(--text-secondary, #666)',
                    lineHeight: 1.6,
                    fontWeight: 700,
                  }}
                >
                  لا يوجد لديك أي سلال.
                </div>
              ) : (
                list.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className="btn-secondary"
                    onClick={() => onConfirm && onConfirm(opt.value)}
                    style={{
                      width: '100%',
                      justifyContent: 'space-between',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '12px 14px',
                      borderRadius: 12,
                      fontWeight: 900,
                    }}
                  >
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {opt.label}
                    </span>
                    {opt.badge != null ? (
                      <span style={{ fontWeight: 800, color: 'var(--text-secondary)' }}>{opt.badge}</span>
                    ) : null}
                  </button>
                ))
              )}
            </div>
          )}
        </div>

        <div className="modal-footer flex-center">
          {(type === 'confirm' || type === 'prompt') && (
            <button className="btn-secondary" onClick={onClose}>إلغاء</button>
          )}
          {type === 'select' && (primaryActionLabel || onPrimaryAction) ? (
            <button
              className="btn-primary"
              type="button"
              onClick={onPrimaryAction || handleConfirm}
              style={{ display: 'inline-flex', gap: 8, alignItems: 'center', justifyContent: 'center' }}
            >
              <Plus size={18} />
              {primaryActionLabel || 'سلة جديدة'}
            </button>
          ) : (
            type === 'select' ? null : (
              <button className="btn-primary" onClick={handleConfirm}>
                {type === 'confirm' || type === 'prompt' ? 'تأكيد' : 'حسناً'}
              </button>
            )
          )}
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .modal-overlay.flex-center {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(5px);
            z-index: 2000;
            padding: max(12px, env(safe-area-inset-top, 0px)) 16px max(12px, env(safe-area-inset-bottom, 0px));
            align-items: flex-end;
          }
          @media (min-height: 520px) {
            .modal-overlay.flex-center { align-items: center; }
          }
          .modal-content {
            width: 100%;
            max-width: min(450px, calc(100vw - 24px));
            max-height: min(90vh, calc(100dvh - 32px));
            overflow-y: auto;
            padding: 1.25rem;
            position: relative;
          }
          @media (min-width: 480px) {
            .modal-content { padding: 1.5rem; }
          }
          .modal-header {
            justify-content: space-between;
            margin-bottom: 20px;
            gap: 15px;
          }
          .modal-icon {
            width: 48px;
            height: 48px;
            border-radius: 16px;
            background: var(--surface);
            border: 1px solid var(--border);
          }
          .modal-icon.info { background: #E3F2FD; color: #1E88E5; }
          .modal-icon.confirm { background: rgba(255, 214, 10, 0.22); color: var(--secondary); border: 1px solid rgba(255, 214, 10, 0.45); }
          .modal-icon.prompt { background: #E8F5E9; color: #43A047; }
          .modal-icon.select { background: rgba(245, 192, 0, 0.18); color: var(--secondary); border: 1px solid rgba(245, 192, 0, 0.35); }
          
          .modal-header h3 { flex: 1; text-align: right; margin: 0; }
          .close-btn { background: none; border: none; cursor: pointer; color: #999; }
          
          .modal-body p { line-height: 1.6; color: #555; }

          .modal-select-list {
            display: grid;
            gap: 10px;
            max-height: min(52vh, 420px);
            overflow: auto;
            padding-right: 2px;
          }
          .modal-select-list::-webkit-scrollbar { width: 0; height: 0; }
          .modal-select-list { scrollbar-width: none; }
          
          .modal-footer {
            margin-top: 25px;
            gap: 10px;
            justify-content: flex-end;
            flex-wrap: wrap;
          }
          .modal-footer button { width: auto; min-width: min(100px, 40vw); flex: 1 1 auto; }
          @media (min-width: 400px) {
            .modal-footer button { flex: 0 1 auto; }
          }
          
          .animate-float {
            animation: modalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          @keyframes modalIn {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}} />
      </div>
    </div>
  );
};

export default CustomModal;
