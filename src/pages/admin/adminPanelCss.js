/** أنماط مشتركة لصفحات لوحة الإدارة */
export const adminPanelCss = `
  .admin-dash { max-width: 1240px; margin-inline: auto; padding-inline: clamp(8px, 2.2vw, 22px); box-sizing: border-box; }
  .admin-dash h1 { font-size: 1.75rem; margin-bottom: 8px; color: var(--secondary); }
  .admin-intro { color: var(--text-secondary); line-height: 1.7; margin-bottom: 22px; }
  .admin-section { padding: 18px 20px; margin-bottom: 22px; }
  .admin-section-head {
    display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px;
    margin-bottom: 16px;
  }
  .admin-section h2 { margin: 0; font-size: 1.2rem; color: var(--secondary); }
  .admin-filter {
    padding: 8px 12px; border-radius: 10px; border: 1.5px solid var(--border);
    font-weight: 700; font-family: inherit; background: var(--surface);
  }
  .admin-empty { color: var(--text-secondary); margin: 0; }
  .admin-cards { display: flex; flex-direction: column; gap: 16px; }
  .admin-card {
    display: grid; grid-template-columns: 160px 1fr; gap: 16px;
    padding: 14px; border: 1px solid var(--border); border-radius: 14px; background: var(--surface);
  }
  @media (max-width: 640px) {
    .admin-card { grid-template-columns: 1fr; }
  }
  .admin-card-media img {
    width: 100%; max-height: 140px; object-fit: cover; border-radius: 10px; display: block;
  }
  .receipt-link { display: inline-block; margin-top: 8px; font-weight: 800; color: var(--secondary); }
  .admin-card-body h3 { margin: 0 0 8px; font-size: 1.05rem; }
  .store-line { font-weight: 800; color: var(--secondary); margin: 0 0 6px; font-size: 0.9rem; }
  .desc { margin: 0 0 8px; font-size: 0.92rem; line-height: 1.55; color: var(--text-primary); }
  .status-pill { margin: 0 0 10px; font-size: 0.9rem; }
  .muted { color: var(--text-secondary); font-size: 0.85rem; }
  .small { font-size: 0.8rem; }
  .admin-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
  .btn-ok, .btn-no {
    padding: 10px 16px; border-radius: 10px; font-weight: 800; cursor: pointer; font-family: inherit;
    border: none; font-size: 0.9rem;
  }
  .btn-ok { background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%); color: var(--secondary); }
  .btn-no { background: #fdecea; color: #c0392b; border: 1.5px solid #f5c6c2; }
  .btn-ok:disabled, .btn-no:disabled { opacity: 0.6; cursor: wait; }

  .admin-primary-only h2 { margin: 0 0 10px; font-size: 1.2rem; color: var(--secondary); }
  .admin-subhint { margin: 0 0 18px; font-size: 0.9rem; line-height: 1.65; color: var(--text-secondary); }
  .admin-account-form { margin-bottom: 20px; }
  .form-row-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px;
    margin-bottom: 14px;
  }
  .form-row-grid label { display: flex; flex-direction: column; gap: 6px; font-size: 0.85rem; font-weight: 700; color: var(--secondary); }
  .form-row-grid input, .form-row-grid select {
    padding: 10px 12px; border-radius: 10px; border: 1.5px solid var(--border);
    font-family: inherit; font-size: 0.95rem;
  }
  .admin-table-wrap { overflow-x: auto; }
  .admin-accounts-table { width: 100%; border-collapse: collapse; font-size: 0.92rem; }
  .admin-accounts-table th, .admin-accounts-table td { padding: 10px 8px; text-align: right; border-bottom: 1px solid var(--border); }
  .admin-accounts-table th { color: var(--secondary); font-weight: 800; }
  .tier-badge { padding: 4px 10px; border-radius: 999px; font-size: 0.8rem; font-weight: 800; }
  .tier-primary { background: #e8f4fc; color: #1a5a8a; }
  .tier-secondary { background: var(--primary-light); color: var(--secondary); }
  .you-badge { margin-inline-start: 8px; font-size: 0.72rem; font-weight: 800; color: #1a5a8a; }
  .btn-toggle {
    padding: 6px 12px; border-radius: 8px; border: 1.5px solid var(--border);
    background: var(--white); font-weight: 700; cursor: pointer; font-family: inherit; font-size: 0.82rem;
  }
  .btn-toggle:disabled { opacity: 0.5; cursor: not-allowed; }

  .admin-home-empty {
    text-align: center; padding: 48px 24px; color: var(--text-secondary);
    line-height: 1.8; font-size: 1rem;
  }
  .admin-home-empty strong { color: var(--secondary); }
`;

export const statusLabel = {
  pending: 'قيد الانتظار',
  active: 'نشط',
  rejected: 'مرفوض',
  expired: 'منتهي الصلاحية',
  approved: 'مقبول',
};
