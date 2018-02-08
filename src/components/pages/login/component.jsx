import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import GooglePlusIcon from 'react-icons/lib/fa/google-plus-square';
// import FacebookIcon from 'react-icons/lib/fa/facebook-square';
// import TwitterIcon from 'react-icons/lib/fa/twitter-square';
import Button from 'react-toolbox/lib/button/Button';

import LoginBox from '../../shared/login-box';
import { EMAIL_SIGNUP } from '../../../urls';

import LoginForm from './login-form';

import './index.css';

const Login = ({
  onLogin,
  // onFacebookSignIn,
  // onTwitterSignIn,
  onGoogleSignIn,
}) => (
  <div className="login-page">
    <LoginBox headerTitle="Please sign in.">
      <div className="login-box__social-row">
        {/* <Button onClick={onFacebookSignIn} icon={<FacebookIcon />} inverse className="social-button--facebook">Facebook</Button>
        <Button onClick={onTwitterSignIn} icon={<TwitterIcon />} inverse className="social-button--twitter">Twitter</Button> */}
        <Button onClick={onGoogleSignIn} icon={<GooglePlusIcon />} inverse className="social-button--google">Google</Button>
      </div>
      <div className="login-box__or-row">or</div>
      <div className="login-box__email-row">
        <LoginForm onSubmit={onLogin} className="login-form" />
        <Link to={EMAIL_SIGNUP}>Sign up with email address</Link>
      </div>
    </LoginBox>
  </div>
);

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  // onFacebookSignIn: PropTypes.func.isRequired,
  // onTwitterSignIn: PropTypes.func.isRequired,
  onGoogleSignIn: PropTypes.func.isRequired,
};

export default Login;
