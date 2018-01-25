import { connect } from 'react-redux';
import { loginUserEmailAsync } from '../../../reducers/api/login/actions'
import Component from './component';

const handleOnLogin = dispatch => (values) => {
  dispatch(loginUserEmailAsync(values));
};

const mapDispatchToProps = dispatch => ({
  onLogin: handleOnLogin(dispatch),
});

export default connect(undefined, mapDispatchToProps)(Component);
