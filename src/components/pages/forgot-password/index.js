import { connect } from 'react-redux';
import Component from './component';

import { sendResetEmail } from '../../../reducers/api/account/actions';

const handleReset = dispatch => ({ email }) => {
  dispatch(sendResetEmail(email));
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  onReset: handleReset(dispatch),
});

export default connect(undefined, mapDispatchToProps)(Component);
