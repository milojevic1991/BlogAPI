import React from 'react';
import './Button.module.css';

const Button = ({ title, className, buttonClicked, type = 'button' }) => {
  return (
    <button type={type} className={className} onClick={buttonClicked}>
      {title}
    </button>
  );
};

export default Button;
