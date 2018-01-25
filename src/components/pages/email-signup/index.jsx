import React from 'react';

import LoginBox from '../../shared/login-box';
import SignUpForm from './sign-up-form';

const EmailSignUp = () => (
  <div className="login-page">
    <LoginBox headerTitle="Email sign up">
      <div className="login-box__email-row">
        <SignUpForm />
      </div>
    </LoginBox>
  </div>
);

export default EmailSignUp;
