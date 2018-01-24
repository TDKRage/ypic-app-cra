import React from 'react';
import PropTypes from 'prop-types';
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
    <Button raised primary type="submit">Sign In</Button>
  </form>
);

LoginForm.defaultProps = {
  className: '',
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default reduxForm({
  form: loginForm,
})(LoginForm);
