import React from 'react';
import PropTypes from 'prop-types';

import Input from 'react-toolbox/lib/input/Input';
import MaskedPasswordInput from '../masked-password-input';

import './index.css';

const GenerateInput = (input, rest) => {
  switch (rest.type) {
    case 'password':
      return (<MaskedPasswordInput input={input} label={rest.label} />);
    default:
      return (<Input {...input} {...rest} />);
  }
};

const InputField = ({ input, meta, ...rest }) => (
  <div className="input-row">
    {
      GenerateInput(input, rest)
    }
    {meta.touched && meta.error &&
    <span className="input-row__error">{meta.error}</span>}
  </div>
);

InputField.propTypes = {
  input: PropTypes.shape().isRequired,
  meta: PropTypes.shape().isRequired,
};

export default InputField;
