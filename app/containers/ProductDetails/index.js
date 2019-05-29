/**
 *
 * ProductDetails
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProductDetails from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function ProductDetails() {
  useInjectReducer({ key: 'productDetails', reducer });
  useInjectSaga({ key: 'productDetails', saga });

  return (
    <div>
      <Helmet>
        <title>ProductDetails</title>
        <meta name="description" content="Description of ProductDetails" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <h1>ProductDetails</h1>
    </div>
  );
}

ProductDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productDetails: makeSelectProductDetails(),
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
)(ProductDetails);
