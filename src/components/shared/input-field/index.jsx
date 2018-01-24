import React from 'react';
import PropTypes from 'prop-types';


import Input from 'react-toolbox/lib/input/Input';

const InputField = ({ input, meta, ...rest }) => (
  <div className="input-row">
    <Input {...input} {...rest} />
    {meta.touched && meta.error &&
    <span className="error">{meta.error}</span>}
  </div>
);

InputField.propTypes = {
  input: PropTypes.shape().isRequired,
  meta: PropTypes.shape().isRequired,
};

export default InputField;
