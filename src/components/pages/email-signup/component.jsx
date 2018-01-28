import React from 'react';
import PropTypes from 'prop-types';
import LoginBox from '../../shared/login-box';
import SignUpForm from './sign-up-form';

const EmailSignUp = ({ onCreate }) => (
  <div className="login-page">
    <LoginBox headerTitle="Email sign up">
      <div className="login-box__email-row">
        <SignUpForm onSubmit={onCreate} />
      </div>
    </LoginBox>
  </div>
);

EmailSignUp.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default EmailSignUp;
