import React  from 'react';
import PropTypes from 'prop-types';
import './Button.scss';


const Button = ({type, varient, name, children}) => {
  const classList = `btn ${varient}`;
  return (
    <button type={type} className={classList}>
      {children}
      <span>{name}</span>
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  varient: PropTypes.string,
  children: PropTypes.element.isRequired
};

Button.defaultProps = {
  name: 'Button',
  type: 'button',
  varient: '',
  children: null
};

export default Button;
