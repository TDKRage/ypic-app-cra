import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

import Logo from '../../../assets/images/ypic_logo_small.png';

import './index.css';

const LoadingOverlay = ({ show, text }) => (
  <Fragment>
    {show &&
    <div className="overlay">
      <div className="overlay-center">
        <span className="overlay-text pulsate">{text}</span>
        <Spinner className="overlay-spinner" name="ball-beat" color="white" />
      </div>
    </div>
  }
  </Fragment>
);

LoadingOverlay.defaultProps = {
  text: 'Loading...',
};

LoadingOverlay.propTypes = {
  show: PropTypes.bool.isRequired,
  text: PropTypes.string,
};

export default LoadingOverlay;
