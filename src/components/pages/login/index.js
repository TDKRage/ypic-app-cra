import { connect } from 'react-redux';
import { loginUserEmailAsync, loginUserGoogleAsync, loginUserFacebookAsync, loginUserTwitterAsync } from '../../../reducers/api/login/actions';
import Component from './component';

const handleOnLogin = dispatch => (values) => {
  dispatch(loginUserEmailAsync(values));
};

const handleFacebookLogin = dispatch => () => {
  dispatch(loginUserFacebookAsync());
};

const handleTwitterLogin = dispatch => () => {
  dispatch(loginUserTwitterAsync());
};

const handleGoogleLogin = dispatch => () => {
  dispatch(loginUserGoogleAsync());
};

const mapDispatchToProps = dispatch => ({
  onLogin: handleOnLogin(dispatch),
  onFacebookSignIn: handleFacebookLogin(dispatch),
  onTwitterSignIn: handleTwitterLogin(dispatch),
  onGoogleSignIn: handleGoogleLogin(dispatch),
});

export default connect(undefined, mapDispatchToProps)(Component);
