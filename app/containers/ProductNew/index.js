/**
 *
 * ProductNew
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
import makeSelectProductNew from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function ProductNew() {
  useInjectReducer({ key: 'productNew', reducer });
  useInjectSaga({ key: 'productNew', saga });

  return (
    <div>
      <Helmet>
        <title>ProductNew</title>
        <meta name="description" content="Description of ProductNew" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <h1>ProductNew</h1>
    </div>
  );
}

ProductNew.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productNew: makeSelectProductNew(),
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
)(ProductNew);
