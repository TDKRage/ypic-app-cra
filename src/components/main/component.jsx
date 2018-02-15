import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Lifecycler from 'lifecycler';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Snackbar from 'react-toolbox/lib/snackbar/Snackbar';
import PrivateRoute from '../shared/private-route';

import {
  HOME,
  LOGIN,
  EMAIL_SIGNUP,
  FORGOT_PASSWORD,
  DOWNLOADS,
  PDF,
  REFERRALS,
  UPCOMING,
} from '../../urls';

import AppDrawer from './app-drawer';
import LoadingOverlay from './loading-overlay';
import Home from '../pages/home';
import Downloads from '../pages/downloads';
import Login from '../pages/login';
import EmailSignUp from '../pages/email-signup';
import PDFPage from '../pages/pdf-page';
import ForgotPassword from '../pages/forgot-password';
import Referrals from '../pages/referrals';
import Upcoming from '../pages/upcoming';

import './index.css';

const Main = ({
  onLoad,
  user,
  toggleDrawer,
  onRefresh,
  snackActive,
  snackLabel,
  snackType,
  onSnackClose,
}) => (
  <Lifecycler componentDidMount={onLoad} className="site-main">
    <AppBar title="Young People in Christ" leftIcon={user ? 'menu' : null} onLeftIconClick={toggleDrawer} rightIcon="refresh" onRightIconClick={onRefresh} />
    <AppDrawer />
    <div className="site-main__body">
      <Switch>
        <PrivateRoute isAuthenticated={user} path={HOME} component={Home} exact />
        <PrivateRoute isAuthenticated={user} path={DOWNLOADS} component={Downloads} exact />
        <PrivateRoute isAuthenticated={user} path={REFERRALS} component={Referrals} exact />
        <PrivateRoute isAuthenticated={user} path={UPCOMING} component={Upcoming} exact />
        <Route path={EMAIL_SIGNUP} component={EmailSignUp} />
        <Route path={FORGOT_PASSWORD} component={ForgotPassword} />
        <Route path={LOGIN} component={Login} />
        <Route path={PDF()} component={PDFPage} />
      </Switch>
    </div>
    <LoadingOverlay />
    <Snackbar
      action="Dismiss"
      active={snackActive}
      label={snackLabel}
      timeout={2000}
      onClick={onSnackClose}
      onTimeout={onSnackClose}
      type={snackType}
    />
  </Lifecycler>
);

Main.defaultProps = {
  user: undefined,
  snackLabel: '',
  snackType: '',
};

Main.propTypes = {
  onLoad: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  user: PropTypes.shape(),
  snackActive: PropTypes.bool.isRequired,
  snackLabel: PropTypes.string,
  snackType: PropTypes.string,
  onSnackClose: PropTypes.func.isRequired,
};

export default Main;
