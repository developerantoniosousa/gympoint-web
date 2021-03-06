import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import DefaultLayout from '../pages/_layouts/default';
import AuthLayout from '../pages/_layouts/auth';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {

  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/students" />
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )} />
  );
}

RouteWrapper.defaultProps = {
  isPrivate: false,
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
}
