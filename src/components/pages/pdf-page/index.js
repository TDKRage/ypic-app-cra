import { connect } from 'react-redux';
import component from './component';
import PDFS from '../../../assets/pdfs/hymns';

const loadPDFFile = file => PDFS[file];


const mapStateToProps = (state, { match: { params: { file } } }) => ({
  file: loadPDFFile(file),
});


export default connect(mapStateToProps)(component);
