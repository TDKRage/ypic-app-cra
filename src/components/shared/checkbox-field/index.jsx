import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox';

class CheckboxField extends Component {
  constructor(params) {
    super(params);
    this.state = {
      checked: false,
    };
    this.onToggleCheck = this.onToggleCheck.bind(this);
  }
  onToggleCheck() {
    const { input: { onChange } } = this.props;
    const { checked } = this.state;
    onChange(!checked);
    this.setState({ checked: !checked });
  }
  render() {
    const { label } = this.props;
    const { checked } = this.state;
    return (
      <Checkbox onChange={this.onToggleCheck} checked={checked} label={label} />
    );
  }
}

CheckboxField.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string.isRequired,
};

export default CheckboxField;
