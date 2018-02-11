import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from 'react-toolbox/lib/input/Input';
import EyeSlashIcon from 'react-icons/lib/fa/eye-slash';
import EyeIcon from 'react-icons/lib/fa/eye';

import './index.css';

export default class MaskedPasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      type: 'password',
    };
    this.maskToggle = this.maskToggle.bind(this);
  }
  maskToggle() {
    const { show } = this.state;
    this.setState({
      show: !show,
      type: show ? 'password' : 'text',
    });
  }
  render() {
    const { input, label } = this.props;
    const { type, show } = this.state;
    return (
      <div className="masked-password-container">
        <Input className="masked-password-input" label={label} {...input} type={type} />
        {!show && <EyeIcon className="masked-password-icon masked-password-eye" onClick={this.maskToggle} />}
        {show && <EyeSlashIcon className="masked-password-icon masked-password-eye-slash" onMouseUp={this.maskToggle} />}
      </div>
    );
  }
}

MaskedPasswordInput.defaultProps = {
  label: '',
};

MaskedPasswordInput.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string,
};
