import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component, isAuthenticated, redirectPath, ...rest
}) => (
  <Route
    {...rest}
    render={props => (
    isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: redirectPath,
      }}
      />
    )
  )}
  />
);

PrivateRoute.defaultProps = {
  redirectPath: '/login',
  isAuthenticated: undefined,
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  redirectPath: PropTypes.string,
};

export default PrivateRoute;
