import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Lifecycler from 'lifecycler';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import PrivateRoute from '../shared/private-route';

import { HOME, LOGIN, EMAIL_SIGNUP, DOWNLOADS, PDF } from '../../urls';

import AppDrawer from './app-drawer';
import Home from '../pages/home';
import Downloads from '../pages/downloads';
import Login from '../pages/login';
import EmailSignUp from '../pages/email-signup';
import PDFPage from '../pages/pdf-page';

import './index.css';

const Main = ({ onLoad, user, toggleDrawer, onRefresh }) => (
  <Lifecycler componentDidMount={onLoad} className="site-main">
    <AppBar title="Young People in Christ" leftIcon={user ? 'menu' : null} onLeftIconClick={toggleDrawer} rightIcon="refresh" onRightIconClick={onRefresh}/>
    <AppDrawer />
    <div className="site-main__body">
      <Switch>
        <PrivateRoute isAuthenticated={user} path={HOME} component={Home} exact />
        <PrivateRoute isAuthenticated={user} path={DOWNLOADS} component={Downloads} exact />
        <Route path={EMAIL_SIGNUP} component={EmailSignUp} />
        <Route path={LOGIN} component={Login} />
        <Route path={PDF()} component={PDFPage} />
      </Switch>
    </div>
  </Lifecycler>
);

Main.defaultProps = {
  user: undefined,
};

Main.propTypes = {
  onLoad: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  user: PropTypes.shape(),
};

export default Main;
