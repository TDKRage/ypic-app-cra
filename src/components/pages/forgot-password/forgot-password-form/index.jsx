import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import Button from 'react-toolbox/lib/button/Button';
import InputField from '../../../shared/input-field';

import { email, required } from '../../../../utils/validatation';
import { trim } from '../../../../utils/field-normalize';
import { forgotPasswordForm } from '../../../../utils/formNames';
import { LOGIN } from '../../../../urls';

import './index.css';

const ForgotPasswordForm = ({ handleSubmit, className }) => (
  <form onSubmit={handleSubmit} className={className}>
    <Field
      type="text"
      name="email"
      label="Email"
      component={InputField}
      validate={[required, email]}
      normalize={trim}
    />
    <div className="signup-form__button-bar">
      <Link to={LOGIN}><Button raised type="button">Back</Button></Link>
      <Button raised primary type="submit">Sign In</Button>
    </div>
  </form>
);

ForgotPasswordForm.defaultProps = {
  className: '',
};

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default reduxForm({ form: forgotPasswordForm })(ForgotPasswordForm);
