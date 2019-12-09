import React  from 'react';
import PropTypes from 'prop-types';
import './Button.scss';


const Button = ({type, varient, name, onClick ,children}) => {
  const classList = `btn ${varient}`;
  return (
    <button type={type} className={classList} onClick = {onClick}>
      {children}
      <span>{name}</span>
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  varient: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element
};

Button.defaultProps = {
  name: 'Button',
  type: 'button',
  varient: '',
  onClick: () => {},
  children: null
};

export default Button;
