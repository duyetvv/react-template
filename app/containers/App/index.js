/* eslint-disable prettier/prettier */
/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Redirect, Switch, Route, Link } from "react-router-dom";

import HomePage from 'containers/HomePage/Loadable';
import ProductPage from 'containers/ProductPage/Loadable';
import ProductDetails from 'containers/ProductDetails/Loadable';
import ProductNew from 'containers/ProductNew/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import RouteWithSubRoutes from 'routes/RouteWithSubRoutes/Loadable';
import GlobalStyle from '../../global-styles';

const routes = [
  {
    key: 'home',
    path: "/home",
    component: HomePage
  },
  {
    key: 'product',
    path: '/product',
    component: ProductPage,
    routes: [
      {
        key: 'product_details',
        path: '/product/details',
        component: ProductDetails,
      }, {
        key: 'product_new',
        path: '/product/new',
        component: ProductNew,
      }
    ]
  }
];


export default function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/home" />)} />
        {
          routes.map((route) => (<RouteWithSubRoutes key={route.key} {...route} />))
        }
        <Route path="*" exact component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
