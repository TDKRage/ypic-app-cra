import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from 'react-toolbox/lib/button/Button';

import InputField from '../../../shared/input-field';


import { loginForm } from '../../../../utils/formNames';

const LoginForm = ({ handleSubmit, className }) => (
  <form className={className} onSubmit={handleSubmit}>
    <Field
      type="text"
      name="email"
      label="Email"
      component={InputField}
    />
    <Field
      type="password"
      name="password"
      label="Password"
      component={InputField}
    />
    <Button raised primary>Sign In</Button>
  </form>
);

export default reduxForm({
  form: loginForm,
})(LoginForm);
