import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import Button from 'react-toolbox/lib/button/Button';
import InputField from '../../../shared/input-field';

import { email, minLength, required, passwordRule, confirmPassword } from '../../../../utils/validatation';
import { signUpFrom } from '../../../../utils/formNames';
import { LOGIN } from '../../../../urls';

import './index.css';

const SignUpForm = ({ handleSubmit, className }) => (
  <form onSubmit={handleSubmit} className={className}>
    <Field
      type="text"
      name="email"
      label="Email"
      component={InputField}
      validate={[required, email]}
    />
    <Field
      type="password"
      name="password"
      label="Password"
      component={InputField}
      validate={[required, minLength(8), passwordRule]}
    />
    <Field
      type="password"
      name="confirmPassword"
      label="Confirm Password"
      component={InputField}
      validate={[required, confirmPassword]}
    />
    <div className="signup-form__button-bar">
      <Link to={LOGIN}><Button raised type="button">Cancel</Button></Link>
      <Button raised primary type="submit">Sign In</Button>
    </div>
  </form>
);

SignUpForm.defaultProps = {
  className: '',
};

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default reduxForm({ form: signUpFrom })(SignUpForm);
