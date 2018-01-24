import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'react-toolbox/lib/button/Button';

import LoginForm from './login-form';
import Logo from '../../../assets/images/ypic_logo_small.png';

import './index.css';

const Login = ({ onLogin }) => (
  <div className="login-page">
    <div className="login-box">
      <div className="login-box__header-row">
        <img className="login-box__header-row__img" src={Logo} alt="Young People in Christ" />
        <span>Please sign in.</span>
      </div>
      <div className="login-box__social-row">
        <Button className="social-button--facebook">Facebook</Button>
        <Button className="social-button--twitter">Twitter</Button>
        <Button className="social-button--google">Google</Button>
      </div>
      <div className="login-box__email-row">
        <LoginForm onSubmit={onLogin} className="login-form" />
        <Link to="/home"> Sign up with email address </Link>
      </div>
    </div>
  </div>
);

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
