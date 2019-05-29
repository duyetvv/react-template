import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the productNew state domain
 */

const selectProductNewDomain = state => state.productNew || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProductNew
 */

const makeSelectProductNew = () =>
  createSelector(
    selectProductNewDomain,
    substate => substate,
  );

export default makeSelectProductNew;
export { selectProductNewDomain };
