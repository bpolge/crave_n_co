import React from 'react';

export const PhotoGridItem = ({ url }) => {
  return (
    <div className="photo-grid-item">
      <img src={url} alt={url} />
    </div>
  );
};

export const PhotoGrid = ({ images }) => {
  console.log('images:', images);
  return (
    <div className="photo-grid flex">
      {images.map(img => PhotoGridItem(img))}
    </div>
  );
};
