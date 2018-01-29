import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Lifecycler from 'lifecycler';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';

import { HOME, LOGIN, EMAIL_SIGNUP } from '../../urls';

import Home from '../pages/home';
import Login from '../pages/login';
import EmailSignUp from '../pages/email-signup';

import './index.css';

const Main = ({ onLoad }) => (
  <Lifecycler componentDidMount={onLoad} className="site-main">
    <AppBar title="Young People in Christ" />
    <div className="site-main__body">
      <Route path={EMAIL_SIGNUP} component={EmailSignUp} exact />
      <Route path={HOME} component={Home} exact />
      <Route path={LOGIN} component={Login} exact />
    </div>
  </Lifecycler>
);

Main.propTypes = {
  onLoad: PropTypes.func.isRequired,
};

export default Main;
