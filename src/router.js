/**
 * @file routes.js
 */

import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  IndexRedirect,
} from 'dva/router';

import Frame from './layouts/Frame';

import searchHome from './routes/search/SearchHome';
import serchResult from './routes/search/SearchResult';

const routes = ({ history }) => (// eslint-disable-line
  <Router history={history}>
    <Route path="/" component={Frame}>
      <IndexRedirect to="/search" />
      <Route path="search">
        <IndexRoute component={searchHome} />
        <Route path="result" component={serchResult} />
      </Route>
      {/** 侧栏 */}
    </Route>
  </Router>
);

export default routes;
