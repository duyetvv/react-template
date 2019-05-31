/**
 *
 * ProductPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import RouteWithSubRoutes from 'routes/RouteWithSubRoutes/Loadable';

import makeSelectProductPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function ProductPage({ routes }) {
  useInjectReducer({ key: 'productPage', reducer });
  useInjectSaga({ key: 'productPage', saga });

  return (
    <div>
      <Helmet>
        <title>ProductPage</title>
        <meta name="description" content="Description of ProductPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <ul>
        <li>
          <Link to="/product/details">Product Details</Link>
        </li>
        <li>
          <Link to="/product/new">New Product</Link>
        </li>
      </ul>
      {routes.map(route => (
        <RouteWithSubRoutes key={route.key} {...route} />
      ))}
    </div>
  );
}

ProductPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  routes: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  productPage: makeSelectProductPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ProductPage);
