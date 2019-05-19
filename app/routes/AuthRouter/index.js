/**
 *
 * AuthRouter
 *
 */

import React, { memo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function AuthRouter({ authed, component, defaultPath, ...props }) {
  if (!authed) {
    return <Redirect to={defaultPath} />;
  }

  return <Route {...props} component={component} />;
}

AuthRouter.propTypes = {
  authed: PropTypes.bool,
  component: PropTypes.func,
  defaultPath: PropTypes.string,
};

export default memo(AuthRouter);
