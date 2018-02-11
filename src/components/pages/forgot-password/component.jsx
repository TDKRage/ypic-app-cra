import React from 'react';
import PropTypes from 'prop-types';
import LoginBox from '../../shared/login-box';
import ForgotPasswordForm from './forgot-password-form';

const ForgotPassword = ({ onReset }) => (
  <div className="login-page">
    <LoginBox headerTitle="Please Enter Email">
      <div className="login-box__email-row">
        <ForgotPasswordForm onSubmit={onReset} />
      </div>
    </LoginBox>
  </div>
);

ForgotPassword.propTypes = {
  onReset: PropTypes.func.isRequired,
};

export default ForgotPassword;
