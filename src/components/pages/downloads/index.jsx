import React from 'react';

import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';

import ThemeSongPdf from '../../../assets/pdfs/hymns/themesong.pdf';

const Downloads = () => (
  <div className="downloads_page">
    <List selectable ripple>
      <a href={ThemeSongPdf} target="_blank" ><ListItem leftIcon="picture_as_pdf" caption="Some Cool Text about the doc" /></a>
    </List>
  </div>
);


export default Downloads;
