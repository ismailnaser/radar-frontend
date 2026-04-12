import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, UserPlus, ShieldAlert } from 'lucide-react';
import CustomButton from './ui/CustomButton';

const GuestAccessPrompt = ({ title, message }) => {
    const navigate = useNavigate();

    return (
        <div className="guest-access-prompt card flex-center" style={{ flexDirection: 'column', padding: '60px 40px', textAlign: 'center', maxWidth: '500px', margin: '40px auto' }}>
            <div className="icon-badge flex-center" style={{ width: '80px', height: '80px', background: 'rgba(30,190,165,0.1)', borderRadius: '50%', marginBottom: '25px', color: 'var(--primary)' }}>
                <ShieldAlert size={40} />
            </div>
            <h2 style={{ marginBottom: '12px', color: 'var(--secondary)' }}>{title || 'عذراً، هذه الميزة للمشتركين فقط'}</h2>
            <p style={{ color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
                {message || 'يجب عليك إنشاء حساب أو تسجيل الدخول لتتمكن من استخدام هذه الميزة والاستمتاع بكافة خدمات رادار.'}
            </p>
            
            <div className="flex-center" style={{ gap: '15px', width: '100%' }}>
                <CustomButton 
                    onClick={() => navigate('/login')}
                    style={{ flex: 1, height: '50px' }}
                    variant="secondary"
                    confirm="الانتقال إلى صفحة تسجيل الدخول؟"
                    showErrorAlert={false}
                >
                    <LogIn size={18} style={{ marginLeft: '8px' }} /> تسجيل الدخول
                </CustomButton>
                <CustomButton 
                    onClick={() => navigate('/register')}
                    style={{ flex: 1, height: '50px' }}
                    confirm="الانتقال إلى صفحة إنشاء حساب؟"
                    showErrorAlert={false}
                >
                    <UserPlus size={18} style={{ marginLeft: '8px' }} /> إنشاء حساب
                </CustomButton>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .guest-access-prompt { border: 1px solid #eee; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
                .icon-badge { animation: pulse 2s infinite; }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.8; }
                    100% { transform: scale(1); opacity: 1; }
                }
            `}} />
        </div>
    );
};

export default GuestAccessPrompt;
