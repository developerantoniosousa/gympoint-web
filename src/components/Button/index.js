import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ children, size }) {
  return (
    <Container size={size}>
      {children}
    </Container>
  );
}

Button.defaultProps = {
  size: 'large',
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
}
