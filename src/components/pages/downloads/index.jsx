import React from 'react';

import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import PDFViewer from '../../shared/pdf-viewer';

import ThemeSongPdf from '../../../assets/pdfs/hymns/theme_song.pdf';
import AfterServicePdf from '../../../assets/pdfs/hymns/after_service.pdf';

const Downloads = () => (
  <div className="downloads-page">
    <List selectable ripple>
      <a className="clean-text" href={ThemeSongPdf} target="_blank" >
        <ListItem leftIcon="picture_as_pdf" caption="Theme Song: Young People's Convention 2018" legend="In Christ we live and move" />
      </a>
    </List>
    <PDFViewer file={AfterServicePdf} />
  </div>
);

export default Downloads;
