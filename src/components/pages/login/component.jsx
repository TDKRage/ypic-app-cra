import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import GooglePlusIcon from 'react-icons/lib/fa/google-plus-square';
// import FacebookIcon from 'react-icons/lib/fa/facebook-square';
// import TwitterIcon from 'react-icons/lib/fa/twitter-square';
import Button from 'react-toolbox/lib/button/Button';

import LoginBox from '../../shared/login-box';
import { EMAIL_SIGNUP, FORGOT_PASSWORD } from '../../../urls';

import LoginForm from './login-form';

import './index.css';

const Login = ({
  onLogin,
  onGoogleSignIn,
}) => (
  <div className="login-page">
    <LoginBox headerTitle="Please sign in.">
      <div className="login-box__social-row">
        <Button onClick={onGoogleSignIn} icon={<GooglePlusIcon />} inverse className="social-button--google">Google</Button>
      </div>
      <div className="login-box__or-row">or</div>
      <div className="login-box__email-row">
        <LoginForm onSubmit={onLogin} className="login-form" />
        <Link to={EMAIL_SIGNUP}><Button raised>Sign up with email address</Button></Link>
        <div className="forgot-password-link">
          <Link to={FORGOT_PASSWORD}>Forgot Password?</Link>
        </div>
      </div>
    </LoginBox>
  </div>
);

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onGoogleSignIn: PropTypes.func.isRequired,
};

export default Login;
