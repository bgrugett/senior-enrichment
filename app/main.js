'use strict';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import store from './store';
import Root from './components/Root';
import Home from './components/Home';
import Students from './components/Students';
import Campuses from './components/Campuses';

render((
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home} />
      <Route path="/students" component={Students} />
      <Route path="/campuses" component={Campuses} />
    </Route>
  </Router>
  </Provider>
),
  document.getElementById('main')
);
