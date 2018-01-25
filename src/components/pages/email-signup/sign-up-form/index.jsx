import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import Button from 'react-toolbox/lib/button/Button';
import InputField from '../../../shared/input-field';
import { signUpFrom } from '../../../../utils/formNames';

import './index.css';

const SignUpForm = ({ handleSumbit, className }) => (
  <form onSubmit={handleSumbit} className={className}>
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
    <Field
      type="password"
      name="password"
      label="Confirm Password"
      component={InputField}
    />
    <div className="signup-form__button-bar">
      <Link to="/"><Button raised type="button">Cancel</Button></Link>
      <Button raised primary type="submit">Sign In</Button>
    </div>
  </form>
);

SignUpForm.defaultProps = {
  className: '',
};

SignUpForm.propTypes = {
  handleSumbit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default reduxForm({ form: signUpFrom })(SignUpForm);
