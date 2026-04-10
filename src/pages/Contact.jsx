import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import MainLayout from '../components/MainLayout';

const Contact = () => {
  const contactInfos = [
    {
      icon: <Mail size={24} />,
      title: 'البريد الإلكتروني',
      detail: 'ismailnaser67@gmail.com',
      color: '#0984e3',
      action: {
        label: 'تواصل عبر Gmail',
        href:
          'mailto:ismailnaser67@gmail.com?subject=%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%20%D8%B1%D8%A7%D8%AF%D8%A7%D8%B1',
      },
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'واتساب الدعم',
      detail: '+970592377078',
      color: '#25D366',
      action: {
        label: 'تواصل عبر واتساب',
        href: 'https://wa.me/970592377078',
        target: '_blank',
        rel: 'noreferrer',
        variant: 'wa',
      },
    },
  ];

  return (
    <MainLayout>
      <div className="contact-page">
        <div className="contact-hero card flex-center">
          <div>
            <h1 className="contact-title">اتصل بنا</h1>
            <p className="contact-subtitle">نعمل على مدار الساعة (24/7) للإجابة على استفساراتكم.</p>
          </div>
        </div>

        <div className="contact-grid">
          {contactInfos.map((info, index) => (
            <div key={index} className="card contact-info-card">
              <div className="contact-icon" style={{ background: `${info.color}15`, color: info.color }}>
                {info.icon}
              </div>
              <h3 className="contact-info-title">{info.title}</h3>
              <p className="contact-info-detail">{info.detail}</p>
              {info.action ? (
                <a
                  className={`contact-action-btn${info.action.variant === 'wa' ? ' contact-action-btn--wa' : ''}`}
                  href={info.action.href}
                  target={info.action.target}
                  rel={info.action.rel}
                  aria-label={info.action.label}
                  title={info.action.label}
                >
                  {info.action.label}
                </a>
              ) : null}
            </div>
          ))}
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .contact-page {
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
            padding-bottom: 28px;
          }
          .contact-hero {
            background: linear-gradient(150deg, var(--white) 0%, var(--primary-light) 55%, rgba(255, 214, 10, 0.18) 100%);
            color: var(--secondary);
            padding: clamp(28px, 5vw, 44px) 24px;
            margin-bottom: 22px;
            text-align: center;
            border-radius: var(--radius-xl);
            border: 1px solid rgba(255, 214, 10, 0.35);
            box-shadow: var(--shadow);
            overflow: hidden;
          }

          .contact-title {
            font-size: clamp(1.5rem, 4vw, 2rem);
            margin-bottom: 8px;
            letter-spacing: -0.03em;
            font-weight: 900;
          }

          .contact-subtitle {
            color: var(--text-secondary);
            font-weight: 600;
            font-size: 0.95rem;
            line-height: 1.55;
            max-width: 480px;
            margin-inline: auto;
          }

          .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
            gap: 18px;
          }

          .contact-info-card {
            padding: 28px;
            text-align: center;
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }

          .contact-info-card:hover {
            transform: translateY(-6px);
            box-shadow: var(--shadow-lg);
          }

          .contact-icon {
            width: 64px;
            height: 64px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 18px;
            box-shadow: var(--shadow-sm);
          }

          .contact-info-title { margin-bottom: 8px; }
          .contact-info-detail { font-weight: 800; font-size: 1.05rem; color: var(--text-primary); }
          .contact-action-btn{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 11px 16px;
            border-radius: 14px;
            font-weight: 900;
            text-decoration: none;
            border: 1.5px solid var(--border);
            background: rgba(255, 255, 255, 0.92);
            color: var(--secondary);
            transition: filter 0.15s ease, transform 0.12s ease, box-shadow 0.15s ease, border-color 0.15s ease;
            box-shadow: 0 8px 24px rgba(26, 29, 38, 0.06);
            width: 100%;
            margin-top: 12px;
          }
          .contact-action-btn:hover{
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 14px 32px rgba(245, 192, 0, 0.14);
          }
          .contact-action-btn:active{ transform: scale(0.99); }
          .contact-action-btn--wa{
            border-color: rgba(37, 211, 102, 0.35);
            background: linear-gradient(135deg, rgba(37, 211, 102, 0.16) 0%, rgba(255, 255, 255, 0.92) 100%);
          }
        `}} />
      </div>
    </MainLayout>
  );
};

export default Contact;
