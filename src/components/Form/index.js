import React from 'react';
import PropTypes from 'prop-types';

import { Form } from './styles';

export default function FormWrapper({ children, ...rest }) {
  return (
    <Form {...rest}>{children}</Form>
  );
}

FormWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
