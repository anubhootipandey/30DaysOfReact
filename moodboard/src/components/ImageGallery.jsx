import React from 'react';
import '../App.css';

const ImageGallery = ({ images, onDelete }) => {
  return (
    <div className="image-gallery">
      <h2>Image Gallery</h2>
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image} alt={`Image ${index}`} />
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
