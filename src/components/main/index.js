import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Component from './component';
import { signInCheck } from '../../reducers/api/login/actions';
import { toggleAppDrawer } from '../../reducers/app-drawer/actions';
import { LOGIN, HOME } from '../../urls';

const handleOnLoad = dispatch => () => {
  dispatch(signInCheck(LOGIN, HOME));
};

const mapStateToProps = ({ api }, ownProps) => ({
  ...ownProps,
  user: api.login.user,
});

const mapDispatchToProps = dispatch => ({
  onLoad: handleOnLoad(dispatch),
  toggleDrawer: () => dispatch(toggleAppDrawer()),
  onRefresh: () => window.location.reload(true),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component));

