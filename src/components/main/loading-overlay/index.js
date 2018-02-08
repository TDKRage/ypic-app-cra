import { connect } from 'react-redux';
import Component from './component';


const mapStateToProps = ({ loadingOverlay }) => ({
  ...loadingOverlay,
});


export default connect(mapStateToProps)(Component);
