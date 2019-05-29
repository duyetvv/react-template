/**
 *
 * RouteWithSubRoutes
 *
 */

import React, { memo } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function RouteWithSubRoutes(route) {
  console.log('route.routes ', route.routes);
  return (
    <Route
      path={route.path}
      exact
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

RouteWithSubRoutes.propTypes = {
  route: PropTypes.object,
};

export default memo(RouteWithSubRoutes);
