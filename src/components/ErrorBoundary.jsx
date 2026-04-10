import React from 'react';

/**
 * يلتقط أخطاء الرسم في الشجرة ويعرض رسالة بدل شاشة بيضاء.
 */
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary:', error, info?.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: '100vh',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f8f8f6',
            color: '#1e1e2e',
            fontFamily: 'system-ui, Tahoma, sans-serif',
            direction: 'rtl',
            textAlign: 'center',
            boxSizing: 'border-box',
          }}
        >
          <h1 style={{ fontSize: '1.25rem', marginBottom: 12 }}>تعذّر تحميل الشاشة</h1>
          <p style={{ maxWidth: 420, lineHeight: 1.7, marginBottom: 20, color: '#5a5a6e' }}>
            حدث خطأ غير متوقع. جرّب تحديث الصفحة أو المحاولة لاحقاً.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              marginTop: 20,
              padding: '12px 24px',
              borderRadius: 12,
              border: 'none',
              background: '#f5c000',
              color: '#1e1e2e',
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            تحديث الصفحة
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
