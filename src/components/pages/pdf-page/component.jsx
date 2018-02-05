import React from 'react';
import PropTypes from 'prop-types';

import PDFViewer from '../../shared/pdf-viewer';

const PDFPage = ({ file }) => (
  <PDFViewer file={file} />
);

PDFPage.propTypes = {
  file: PropTypes.string.isRequired,
};

export default PDFPage;
