import { connect } from 'react-redux';
import Component from './component';

const handleOnLoad = dispatch => (values) => {
  console.log(values);
};

const mapDispatchToProps = dispatch => ({
  onLogin: handleOnLoad(dispatch),
});

export default connect(undefined, mapDispatchToProps)(Component);
