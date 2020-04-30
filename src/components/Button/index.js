import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledButtonPrimary, StyledButtonSecondary } from './styledButton';

const types = {
    primary: StyledButtonPrimary,
    secondary: StyledButtonSecondary,
}

const Button = props => {
  const { text, func, disabled, type } = props;

  const ButtonType = types[type] || StyledButton;

  return (
    <ButtonType onClick={func} disabled={disabled}>
      {text}
    </ButtonType>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  func: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  text: '',
  func: () => {},
  disabled: false,
  type: '',
};

export default Button;
