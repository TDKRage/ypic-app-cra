import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Component from './component';
import { signInCheck, redirectCheck } from '../../reducers/api/login/actions';
import { toggleAppDrawer } from '../../reducers/app-drawer/actions';
import { resetSnackbar } from '../../reducers/snackbar/actions';
import { LOGIN, HOME } from '../../urls';

const handleOnLoad = dispatch => () => {
  dispatch(redirectCheck());
  dispatch(signInCheck(LOGIN, HOME));
};

const mapStateToProps = ({ api, snackbar }, ownProps) => ({
  ...ownProps,
  user: api.login.user,
  snackActive: snackbar.active,
  snackLabel: snackbar.label,
  snackType: snackbar.type,
});

const mapDispatchToProps = dispatch => ({
  onLoad: handleOnLoad(dispatch),
  toggleDrawer: () => dispatch(toggleAppDrawer()),
  onRefresh: () => window.location.reload(true),
  onSnackClose: () => dispatch(resetSnackbar()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component));

