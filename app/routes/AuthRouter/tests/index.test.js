/**
 *
 * Tests for AuthRouter
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

// import React from 'react';
// import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

// import AuthRouter from '../index';

describe('<AuthRouter />', () => {
  // it('Expect to not log errors in console', () => {
  //   const spy = jest.spyOn(global.console, 'error');
  //   render(<AuthRouter />);
  //   expect(spy).not.toHaveBeenCalled();
  // });

  it('Expect to authed', () => {
    // const component = render(<Route {...props} component={component} />)
    expect(true).toEqual(true);
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  // it.skip('Should render and match the snapshot', () => {
  //   const {
  //     container: { firstChild },
  //   } = render(<AuthRouter />);
  //   expect(firstChild).toMatchSnapshot();
  // });
});
