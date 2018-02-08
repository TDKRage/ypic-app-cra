import { connect } from 'react-redux';
import Component from './component';
import { toggleAppDrawer, toggleYPCMusic } from '../../../reducers/app-drawer/actions';
import { signOutUser } from '../../../reducers/api/login/actions';
import { LOGIN } from '../../../urls';

const handleSignOut = dispatch => () => {
  dispatch(signOutUser(LOGIN));
};

const mapStateToProps = ({ appDrawer }, ownProps) => ({
  ...ownProps,
  ...appDrawer,
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleAppDrawer()),
  onSignOut: handleSignOut(dispatch),
  onYPCMusicClick: () => dispatch(toggleYPCMusic()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);

