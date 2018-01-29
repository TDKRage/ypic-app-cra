import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Lifecycler from 'lifecycler';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';

import { HOME, LOGIN, EMAIL_SIGNUP } from '../../urls';

import AppDrawer from './app-drawer';
import Home from '../pages/home';
import Login from '../pages/login';
import EmailSignUp from '../pages/email-signup';

import './index.css';

const Main = ({ onLoad, user, toggleDrawer }) => (
  <Lifecycler componentDidMount={onLoad} className="site-main">
    <AppBar title="Young People in Christ" leftIcon={user ? 'menu' : null} onLeftIconClick={toggleDrawer}/>
    <AppDrawer />
    <div className="site-main__body">
      <Switch>
        <Route path={HOME} component={Home} exact />
        <Route path={EMAIL_SIGNUP} component={EmailSignUp} />
        <Route path={LOGIN} component={Login} />
      </Switch>
    </div>
  </Lifecycler>
);

Main.defaultProps = {
  user: undefined,
};

Main.propTypes = {
  onLoad: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  user: PropTypes.shape(),
};

export default Main;
