import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, RefreshCcw, ArrowRight } from 'lucide-react';
import { verifyOTP, resendOTP } from '../api/data';
import MainLayout from '../components/MainLayout';
import { useAlert } from '../components/AlertProvider';
import CustomInput from '../components/ui/CustomInput';
import CustomButton from '../components/ui/CustomButton';
import { formatApiError } from '../utils/apiErrors';

const Verification = () => {
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [resending, setResending] = useState(false);
    const [timer, setTimer] = useState(60);
    const navigate = useNavigate();
    const { showAlert, showConfirm } = useAlert();

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => setTimer(prev => prev - 1), 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleVerify = async (e) => {
        e.preventDefault();
        if (code.length < 6) return showAlert('يرجى إدخال رمز التحقق المكون من 6 أرقام');
        
        setLoading(true);
        try {
            await verifyOTP(code);
            showAlert('تم التحقق من حسابك بنجاح! أهلاً بك في رادار.', 'نجاح التوثيق');
            navigate('/');
        } catch (err) {
            showAlert(formatApiError(err, 'تعذر التحقق. تأكد من الرمز ثم أعد المحاولة.'), 'خطأ في التحقق');
        } finally {
            setLoading(false);
        }
    };

    const handleResend = async () => {
        const ok = await showConfirm('إعادة إرسال رمز تحقق جديد إلى واتساب؟', 'إعادة الإرسال');
        if (!ok) return;
        setResending(true);
        try {
            await resendOTP();
            showAlert('تم إعادة إرسال رمز جديد إلى واتساب الخاص بك.', 'تم الإرسال');
            setTimer(60);
        } catch (err) {
            showAlert(formatApiError(err, 'فشل في إعادة إرسال الرمز، يرجى المحاولة لاحقاً.'), 'خطأ');
        } finally {
            setResending(false);
        }
    };

    return (
        <MainLayout>
            <div className="verify-container flex-center">
                <div className="verify-overlay"></div>
                
                <div className="card verify-card" style={{ padding: '2rem 2.5rem' }}>
                    <div className="verify-logo flex-center" style={{ marginBottom: '10px' }}>
                        <img
                            src="/logo.png"
                            alt="رادار"
                            loading="lazy"
                            width="220"
                            height="220"
                            style={{ width: '220px', maxWidth: '100%', objectFit: 'contain' }}
                        />
                    </div>
                    <div className="verify-icon flex-center">
                        <MessageSquare size={40} color="var(--primary)" />
                    </div>
                    
                    <h2 style={{ marginBottom: '10px' }}>تحقق من هويتك</h2>
                    <p style={{ color: '#666', marginBottom: '25px', fontSize: '0.95rem' }}>
                        لقد أرسلنا رمز التحقق المكون من 6 أرقام إلى حساب الواتساب الخاص بك. يرجى إدخاله للمتابعة.
                    </p>

                    <form onSubmit={handleVerify}>
                        <CustomInput 
                            placeholder="0 0 0 0 0 0"
                            value={code}
                            onChange={(e) => setCode(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                            style={{ textAlign: 'center', fontSize: '1.8rem', letterSpacing: '8px', fontWeight: 'bold' }}
                            required
                        />

                        <CustomButton 
                            type="submit" 
                            loading={loading} 
                            style={{ width: '100%', marginTop: '10px', height: '55px', fontSize: '1.1rem' }}
                            confirm="إرسال رمز التحقق للتحقق من الحساب؟"
                            showErrorAlert={false}
                        >
                            تأكيد الرمز
                        </CustomButton>
                    </form>

                    <div className="verify-footer" style={{ marginTop: '25px' }}>
                        {timer > 0 ? (
                            <p style={{ color: '#999', fontSize: '0.9rem' }}>
                                يمكنك إعادة إرسال الرمز خلال <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>{timer}</span> ثانية
                            </p>
                        ) : (
                            <button 
                                className="resend-btn flex-center" 
                                onClick={handleResend}
                                disabled={resending}
                                style={{ margin: '0 auto', gap: '8px', background: 'transparent', border: 'none', color: 'var(--secondary)', cursor: 'pointer', fontWeight: 'bold' }}
                            >
                                <RefreshCcw size={18} className={resending ? 'spin' : ''} />
                                إعادة إرسال الرمز
                            </button>
                        )}
                    </div>

                    <button 
                        onClick={() => navigate('/login')}
                        style={{ marginTop: '20px', background: 'transparent', border: 'none', color: '#888', cursor: 'pointer', fontSize: '0.85rem', textDecoration: 'underline' }}
                    >
                        العودة لتسجيل الدخول
                    </button>
                </div>

                <style dangerouslySetInnerHTML={{ __html: `
                    .verify-container { min-height: 100vh; background: var(--background); position: relative; padding: 20px; }
                    .verify-overlay { position: absolute; inset: 0; background: radial-gradient(900px 420px at 80% 10%, var(--primary-light), transparent 60%); }
                    .verify-card { position: relative; z-index: 1; width: 100%; max-width: 440px; text-align: center; border-radius: 26px; box-shadow: var(--shadow-lg); }
                    .verify-icon { width: 82px; height: 82px; background: rgba(245, 192, 0, 0.14); border-radius: 24px; margin: 0 auto 18px; }
                    .spin { animation: spin 1s linear infinite; }
                    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                `}} />
            </div>
        </MainLayout>
    );
};

export default Verification;
