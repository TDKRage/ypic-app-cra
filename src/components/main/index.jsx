import React from 'react';
import {
  Route,
} from 'react-router-dom';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';

import Home from '../pages/home';
import Login from '../pages/login';


import './index.css';

const Main = () => (
  <div className="site-main">
    <AppBar title="Young People in Christ" />
    <div className="site-main__body">
      <Route path="/home" component={Home} exact />
      <Route path="/" component={Login} exact />
    </div>
  </div>
);

export default Main;
