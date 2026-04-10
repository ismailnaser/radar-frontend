import React from 'react';

const CustomInput = ({
  icon,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  error,
  ...props
}) => {
  return (
    <div className="input-group-container" style={{ marginBottom: '12px' }}>
      <div className={`input-group ${error ? 'input-group--error' : ''}`}>
        {icon && <div className="input-icon">{icon}</div>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          {...props}
        />
      </div>
      {error && <p className="input-error-msg">{error}</p>}

      <style dangerouslySetInnerHTML={{ __html: `
        .input-group-container { display: flex; flex-direction: column; width: 100%; }
        .input-group--error input {
          border-color: #e53935 !important;
          background: #fff8f8 !important;
        }
        .input-error-msg {
          color: #c62828;
          font-size: 0.78rem;
          text-align: right;
          margin-top: 6px;
          margin-inline-end: 4px;
          font-weight: 700;
        }
      `}} />
    </div>
  );
};

export default CustomInput;
