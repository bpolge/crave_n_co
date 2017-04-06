import React from 'react';
import ReactDom from 'react-dom';

import { PhotoGrid } from './photo_grid';

ReactDom.render(
  React.createElement(PhotoGrid, {
    images: [{ url: 'img/profile.jpg' }],
  }), global.document.getElementById('photo-grid')
);
