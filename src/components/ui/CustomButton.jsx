import React from 'react';

const CustomButton = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', // 'primary', 'secondary', 'danger', 'ghost'
  loading = false, 
  disabled = false, 
  icon,
  style = {},
  ...props 
}) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`btn-${variant} ${loading ? 'loading' : ''}`}
      disabled={disabled || loading}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        ...style
      }}
      {...props}
    >
      {loading ? (
        <span className="spinner"></span>
      ) : (
        <>
          {icon && <span className="btn-icon">{icon}</span>}
          {children}
        </>
      )}
      
      <style dangerouslySetInnerHTML={{ __html: `
        .spinner {
          width: 22px;
          height: 22px;
          border: 2px solid rgba(26, 29, 38, 0.2);
          border-top-color: var(--secondary);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .btn-primary.loading {
          background: linear-gradient(180deg, var(--primary-muted) 0%, var(--primary) 100%);
          opacity: 0.92;
        }
        .btn-danger { background: #FF5252; color: #fff; border: none; border-radius: var(--radius-pill); }
        .btn-danger:hover { background: #e53935; }
      `}} />
    </button>
  );
};

export default CustomButton;
