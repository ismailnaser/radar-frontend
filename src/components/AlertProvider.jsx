import React, { createContext, useContext, useState, useLayoutEffect, useRef } from 'react';
import { registerUnauthorizedLogoutConfirm } from '../api/auth';
import CustomModal from './ui/CustomModal';

const noopAlert = async () => {};
const noopConfirm = async () => false;
const noopPrompt = async () => null;
const noopSelect = async () => null;

const AlertContext = createContext({
  showAlert: noopAlert,
  showConfirm: noopConfirm,
  showPrompt: noopPrompt,
  showSelect: noopSelect,
});

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: 'info',
    onConfirm: null,
    inputValue: '',
    placeholder: '',
    options: [],
    primaryActionLabel: '',
    onPrimaryAction: null,
  });

  const showAlert = (message, title = 'تنبيه') => {
    return new Promise((resolve) => {
      setModalConfig({
        isOpen: true,
        title,
        message,
        type: 'info',
        onConfirm: () => {
           resolve(true);
           closeModule();
        },
        onClose: () => {
           resolve(false);
           closeModule();
        },
        inputValue: '',
        placeholder: ''
      });
    });
  };

  const showConfirm = (message, title = 'تأكيد') => {
    return new Promise((resolve) => {
      setModalConfig({
        isOpen: true,
        title,
        message,
        type: 'confirm',
        onConfirm: () => {
           resolve(true);
           closeModule();
        },
        onClose: () => {
           resolve(false);
           closeModule();
        },
        inputValue: '',
        placeholder: ''
      });
    });
  };

  const showPrompt = (message, placeholder = '', title = 'إدخال بيانات', initialValue = '') => {
    return new Promise((resolve) => {
      setModalConfig({
        isOpen: true,
        title,
        message,
        type: 'prompt',
        onConfirm: (val) => {
           resolve(val);
           closeModule();
        },
        onClose: () => {
           resolve(null);
           closeModule();
        },
        inputValue: initialValue != null ? String(initialValue) : '',
        placeholder,
        options: [],
        primaryActionLabel: '',
        onPrimaryAction: null,
      });
    });
  };

  /**
   * نافذة اختيار (List picker)
   * options: [{ id, label, value, badge? }]
   * - تعيد value عند الاختيار
   * - تعيد '__primary__' عند الضغط على الزر الأساسي (مثلاً "سلة جديدة")
   * - تعيد null عند الإغلاق/إلغاء
   */
  const showSelect = (
    message,
    title = 'اختر',
    options = [],
    { primaryActionLabel = '', primaryValue = '__primary__' } = {}
  ) => {
    return new Promise((resolve) => {
      setModalConfig({
        isOpen: true,
        title,
        message,
        type: 'select',
        options,
        primaryActionLabel,
        onPrimaryAction: () => {
          resolve(primaryValue);
          closeModule();
        },
        onConfirm: (val) => {
          resolve(val);
          closeModule();
        },
        onClose: () => {
          resolve(null);
          closeModule();
        },
        inputValue: '',
        placeholder: '',
      });
    });
  };

  const closeModule = () => {
    setModalConfig(prev => ({ ...prev, isOpen: false }));
  };

  const showConfirmRef = useRef(showConfirm);
  showConfirmRef.current = showConfirm;

  useLayoutEffect(() => {
    registerUnauthorizedLogoutConfirm(async () =>
      showConfirmRef.current(
        'تم قطع الجلسة أو انتهت صلاحية الدخول (أحياناً بعد الرجوع في المتصفح). هل تريد الانتقال إلى صفحة تسجيل الدخول؟',
        'تسجيل الخروج',
      ),
    );
    return () => registerUnauthorizedLogoutConfirm(null);
  }, []);

  return (
    <AlertContext.Provider value={{ showAlert, showConfirm, showPrompt, showSelect }}>
      {children}
      <CustomModal 
        {...modalConfig} 
        onClose={modalConfig.onClose || closeModule}
        setInputValue={(val) => setModalConfig(prev => ({ ...prev, inputValue: val }))}
      />
    </AlertContext.Provider>
  );
};
