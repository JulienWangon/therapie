import React, { Children } from 'react';

import './button.css'

const Button = ({ text, className, type="button", colorStyle, onClick, disabled = false, children}) => {
  return (
    <button
        type={type}
        className={`${className} ${colorStyle}`}
        onClick={onClick}
        disabled={disabled}    
    >
        {text}
      {children}
    </button>
  );
};

export default Button;