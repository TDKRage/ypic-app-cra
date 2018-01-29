import { connect } from 'react-redux';
import Component from './component';
import { signInCheck } from '../../reducers/api/login/actions';
import { LOGIN, HOME } from '../../urls';

const handleOnLoad = dispatch => () => {
  dispatch(signInCheck(LOGIN, HOME));
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  onLoad: handleOnLoad(dispatch),
});

export default connect(undefined, mapDispatchToProps)(Component);

