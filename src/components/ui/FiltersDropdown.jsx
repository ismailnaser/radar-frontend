import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { SlidersHorizontal, X } from 'lucide-react';

function normalize(raw) {
  return String(raw || '').trim().toLowerCase();
}

export default function FiltersDropdown({
  buttonLabel = 'فلاتر',
  allLabel = 'الكل',
  title = 'اختر الفلاتر',
  options = [],
  selectedIds = [],
  onChangeSelectedIds,
  maxHeight = 320,
  requireConfirm = true,
  confirmLabel = 'تأكيد',
  cancelLabel = 'إلغاء',
  className = '',
  buttonClassName = '',
}) {
  const [open, setOpen] = useState(false);
  const [localQ, setLocalQ] = useState('');
  const wrapRef = useRef(null);
  const panelRef = useRef(null);
  const [draftIds, setDraftIds] = useState([]);

  const effectiveSelectedIds = requireConfirm ? draftIds : selectedIds;

  const selected = useMemo(() => {
    const set = new Set((effectiveSelectedIds || []).map((x) => Number(x)));
    return set;
  }, [effectiveSelectedIds]);

  const filteredOptions = useMemo(() => {
    const q = normalize(localQ);
    if (!q) return options || [];
    return (options || []).filter((o) => normalize(o.label).includes(q));
  }, [options, localQ]);

  const selectedSummary = useMemo(() => {
    const byId = new Map((options || []).map((o) => [Number(o.id), o.label]));
    const labels = Array.from(selected)
      .map((id) => byId.get(Number(id)))
      .filter(Boolean);
    const joined = labels.join('، ');
    return joined || allLabel;
  }, [options, selected, allLabel]);

  useEffect(() => {
    if (!open) return;
    // snapshot current selection when opening (confirm mode)
    if (requireConfirm) {
      setDraftIds(Array.isArray(selectedIds) ? selectedIds : []);
    }
    const onDoc = (e) => {
      if (wrapRef.current && wrapRef.current.contains(e.target)) return;
      if (panelRef.current && panelRef.current.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('touchstart', onDoc, { passive: true });
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('touchstart', onDoc);
    };
  }, [open]);

  const count = selected.size;

  const toggle = (id) => {
    const n = Number(id);
    if (!Number.isFinite(n)) return;
    const next = new Set(selected);
    if (next.has(n)) next.delete(n);
    else next.add(n);
    const arr = Array.from(next);
    if (requireConfirm) {
      setDraftIds(arr);
      return;
    }
    if (typeof onChangeSelectedIds !== 'function') return;
    onChangeSelectedIds(arr);
  };

  const clearAll = () => {
    if (requireConfirm) {
      setDraftIds([]);
      return;
    }
    onChangeSelectedIds?.([]);
  };

  const applyAndClose = () => {
    if (!requireConfirm) return;
    onChangeSelectedIds?.(Array.isArray(draftIds) ? draftIds : []);
    setOpen(false);
  };

  const cancelAndClose = () => {
    if (requireConfirm) {
      setDraftIds(Array.isArray(selectedIds) ? selectedIds : []);
    }
    setOpen(false);
  };

  return (
    <div className={`filters-dd${className ? ` ${className}` : ''}`} ref={wrapRef}>
      <div className="filters-dd__btnwrap">
        <button
          type="button"
          className={`filters-dd__btn${buttonClassName ? ` ${buttonClassName}` : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          <SlidersHorizontal size={18} strokeWidth={2} aria-hidden />
          <span>{buttonLabel}</span>
          {count > 0 ? <span className="filters-dd__badge">{count}</span> : null}
        </button>
      </div>

      {open && typeof document !== 'undefined'
        ? createPortal(
            <>
              <button
                type="button"
                className="filters-dd__backdrop"
                aria-label="إغلاق الفلاتر"
                onClick={cancelAndClose}
              />
              <div className="filters-dd__panel" role="dialog" aria-label={title} ref={panelRef}>
                <div className="filters-dd__head">
                  <strong className="filters-dd__title">{title}</strong>
                  <button type="button" className="filters-dd__close" onClick={cancelAndClose} aria-label="إغلاق">
                    <X size={18} strokeWidth={2} aria-hidden />
                  </button>
                </div>

                <div className="filters-dd__search">
                  <input
                    type="search"
                    value={localQ}
                    onChange={(e) => setLocalQ(e.target.value)}
                    placeholder="ابحث داخل الفلاتر…"
                    className="filters-dd__search-input"
                  />
                </div>

                <div className="filters-dd__actions">
                  <button
                    type="button"
                    className={`filters-dd__chip${count === 0 ? ' filters-dd__chip--on' : ''}`}
                    onClick={clearAll}
                  >
                    {allLabel}
                  </button>
                  {count > 0 ? (
                    <button
                      type="button"
                      className="filters-dd__chip filters-dd__chip--danger"
                      onClick={clearAll}
                    >
                      مسح
                    </button>
                  ) : null}
                </div>
                <div className="filters-dd__picked" aria-label="الفلاتر المختارة">
                  المحدد: {selectedSummary}
                </div>

                <div className="filters-dd__list" style={{ maxHeight }}>
                  {filteredOptions.map((o) => {
                    const on = selected.has(Number(o.id));
                    return (
                      <label key={o.id} className={`filters-dd__row${on ? ' filters-dd__row--on' : ''}`}>
                        <input type="checkbox" checked={on} onChange={() => toggle(o.id)} />
                        <span>{o.label}</span>
                      </label>
                    );
                  })}
                  {filteredOptions.length === 0 ? <div className="filters-dd__empty">لا توجد نتائج.</div> : null}
                </div>

                {requireConfirm ? (
                  <div className="filters-dd__footer">
                    <button
                      type="button"
                      className="filters-dd__footer-btn filters-dd__footer-btn--ghost"
                      onClick={cancelAndClose}
                    >
                      {cancelLabel}
                    </button>
                    <button
                      type="button"
                      className="filters-dd__footer-btn filters-dd__footer-btn--primary"
                      onClick={applyAndClose}
                    >
                      {confirmLabel}
                    </button>
                  </div>
                ) : null}
              </div>
            </>,
            document.body
          )
        : null}

      <style dangerouslySetInnerHTML={{ __html: `
        .filters-dd{ position: relative; display:inline-flex; }
        .filters-dd__btnwrap{ display:flex; flex-direction: column; gap: 4px; align-items: flex-start; }
        .filters-dd__btn{
          display:inline-flex; align-items:center; gap:8px;
          border-radius: 999px;
          padding: 10px 12px;
          border: 1px solid rgba(232, 230, 224, 0.95);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 2px 12px rgba(26, 29, 38, 0.06);
          font-weight: 900;
          font-family: inherit;
          cursor: pointer;
          color: var(--secondary);
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        .filters-dd__summary{
          max-width: min(420px, 88vw);
          font-size: 0.74rem;
          font-weight: 800;
          color: rgba(26, 29, 38, 0.62);
          line-height: 1.35;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-inline: 6px;
        }
        .filters-dd__summary--all{
          color: rgba(26, 29, 38, 0.5);
        }
        .filters-dd__badge{
          min-width: 22px; height: 22px; padding: 0 6px;
          border-radius: 999px;
          background: linear-gradient(180deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: var(--secondary);
          display:inline-flex; align-items:center; justify-content:center;
          font-size: 0.78rem;
          box-shadow: var(--shadow-gold);
        }
        .filters-dd__backdrop{
          position: fixed;
          inset: 0;
          border: none;
          background: rgba(0,0,0,0.22);
          z-index: 12000;
          cursor: default;
        }
        .filters-dd__panel{
          position: fixed;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: min(420px, 92vw);
          max-height: min(72vh, 560px);
          border-radius: 18px;
          background: rgba(255,255,255,0.98);
          border: 1px solid rgba(232, 230, 224, 0.95);
          box-shadow: 0 18px 46px rgba(26, 29, 38, 0.18);
          z-index: 12001;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .filters-dd__head{
          display:flex; align-items:center; justify-content: space-between; gap: 10px;
          padding: 10px 12px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          background: linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.86) 100%);
          flex: 0 0 auto;
        }
        .filters-dd__title{ font-weight: 950; color: var(--secondary); }
        .filters-dd__close{
          border:none; background:transparent; cursor:pointer;
          width: 36px; height: 36px; border-radius: 12px;
          display:inline-flex; align-items:center; justify-content:center;
          color: var(--text-secondary);
        }
        .filters-dd__close:hover{ background: rgba(26,29,38,0.06); }
        .filters-dd__search{ padding: 10px 12px; }
        .filters-dd__search{ flex: 0 0 auto; }
        .filters-dd__search-input{
          width: 100%;
          border: 1.5px solid rgba(232, 230, 224, 0.95);
          background: rgba(255,255,255,0.92);
          border-radius: 12px;
          padding: 10px 12px;
          font-weight: 800;
          outline: none;
        }
        .filters-dd__actions{
          padding: 0 12px 10px;
          display:flex; flex-wrap: wrap; gap: 8px; align-items:center;
        }
        .filters-dd__actions{ flex: 0 0 auto; }
        .filters-dd__picked{
          padding: 0 12px 10px;
          font-size: 0.78rem;
          font-weight: 850;
          color: rgba(26, 29, 38, 0.62);
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .filters-dd__picked{ flex: 0 0 auto; }
        .filters-dd__chip{
          border: 1.5px solid rgba(232, 230, 224, 0.95);
          background: rgba(255,255,255,0.92);
          color: var(--secondary);
          font-weight: 900;
          padding: 8px 12px;
          border-radius: 999px;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.84rem;
        }
        .filters-dd__chip--on{
          background: linear-gradient(180deg, var(--primary) 0%, var(--primary-hover) 100%);
          border-color: transparent;
          box-shadow: var(--shadow-gold);
        }
        .filters-dd__chip--danger{
          color: #c0392b;
          border-color: rgba(192,57,43,0.35);
          background: rgba(255,255,255,0.92);
        }
        .filters-dd__list{
          padding: 6px 12px 12px;
          overflow: auto;
          flex: 1 1 auto;
          min-height: 0;
        }
        .filters-dd__footer{
          padding: 10px 12px;
          border-top: 1px solid rgba(0,0,0,0.08);
          display:flex;
          gap: 10px;
          justify-content: flex-end;
          background: linear-gradient(180deg, rgba(255,255,255,0.86) 0%, rgba(255,255,255,0.96) 100%);
          flex: 0 0 auto;
        }
        .filters-dd__footer-btn{
          border-radius: 999px;
          padding: 10px 14px;
          font-weight: 950;
          font-family: inherit;
          cursor: pointer;
          border: 1.5px solid rgba(232, 230, 224, 0.95);
          background: rgba(255,255,255,0.92);
          color: var(--secondary);
        }
        .filters-dd__footer-btn--primary{
          background: linear-gradient(180deg, var(--primary) 0%, var(--primary-hover) 100%);
          border-color: transparent;
          box-shadow: var(--shadow-gold);
        }
        .filters-dd__footer-btn--ghost{
          background: rgba(255,255,255,0.92);
        }
        .filters-dd__row{
          display:flex;
          align-items:center;
          gap: 10px;
          padding: 10px 10px;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 850;
          color: var(--secondary);
        }
        .filters-dd__row input{ width: 16px; height: 16px; }
        .filters-dd__row:hover{ background: rgba(26,29,38,0.05); }
        .filters-dd__row--on{ background: rgba(245, 192, 0, 0.14); }
        .filters-dd__empty{ padding: 10px 10px; color: var(--text-secondary); font-weight: 800; }

        /* Important: keep footer from overlapping scrollable list */
      `}} />
    </div>
  );
}

