import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../../assets/images/ypic_logo_small.png';

const LoginBox = ({ headerTitle, children }) => (
  <div className="login-box">
    <div className="login-box__header-row">
      <img className="login-box__header-row__img" src={Logo} alt="Young People in Christ" />
      <span>{headerTitle}</span>
    </div>
    {children}
  </div>
);

LoginBox.propTypes = { 
  headerTitle: PropTypes.string.isRequired,
}

export default LoginBox;