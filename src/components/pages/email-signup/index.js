import { connect } from 'react-redux';
import Component from './component';

import { createEmailAccount } from '../../../reducers/api/account/actions';

const handleCreate = dispatch => ({ email, password }) => {
  dispatch(createEmailAccount(email, password));
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  onCreate: handleCreate(dispatch),
});

export default connect(undefined, mapDispatchToProps)(Component);
