import { connect } from 'react-redux';
import { loginUserEmailAsync, loginUserGoogleAsync } from '../../../reducers/api/login/actions';
import Component from './component';

const handleOnLogin = dispatch => (values) => {
  dispatch(loginUserEmailAsync(values));
};

const handleGoogleLogin = dispatch => () => {
  dispatch(loginUserGoogleAsync());
};

const mapDispatchToProps = dispatch => ({
  onLogin: handleOnLogin(dispatch),
  onGoogleSignIn: handleGoogleLogin(dispatch),
});

export default connect(undefined, mapDispatchToProps)(Component);
