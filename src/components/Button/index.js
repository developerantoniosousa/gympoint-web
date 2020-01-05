import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ children, size, type, onClick, ...rest }) {
  return (
    <Container type={type} size={size} onClick={onClick} {...rest}>
      {children}
    </Container>
  );
}

Button.defaultProps = {
  size: 'large',
  type: 'button',
  onClick: () => { },
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
}
