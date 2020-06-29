import React from 'react';
import PropTypes from 'prop-types';
import './Button.module.css';

/**
 * Button component.
 */

const Button = ({ title, className, buttonClicked, type = 'button' }) => {
  return (
    <button type={type} className={className} onClick={buttonClicked}>
      {title}
    </button>
  );
};

export default Button;
Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  buttonClicked: PropTypes.func,
  type: PropTypes.string,
};
