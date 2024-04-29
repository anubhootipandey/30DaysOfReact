// components/MoodBoard.js
import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import ImageGallery from './ImageGallery';
import ImageNote from './ImageNote';
import PageNotes from './PageNotes';

const MoodBoard = () => {
  const [images, setImages] = useState([]);
  const [imageNotes, setImageNotes] = useState([]);
  const [pageNote, setPageNote] = useState('');

  const handleUploadImage = (image) => {
    setImages([...images, image]);
    setImageNotes([...imageNotes, '']);
  };

  const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);

    const newNotes = [...imageNotes];
    newNotes.splice(index, 1);
    setImageNotes(newNotes);
  };

  const handleAddImageNote = (note, index) => {
    const newNotes = [...imageNotes];
    newNotes[index] = note;
    setImageNotes(newNotes);
  };

  const handleSavePageNote = (note) => {
    setPageNote(note);
  };

  return (
    <div className="mood-board">
      <h1>Mood Board</h1>
      <ImageUploader onUpload={handleUploadImage} />
      <ImageGallery images={images} onDelete={handleDeleteImage} />
      <div className="notes-section">
        <PageNotes onSave={handleSavePageNote} />
        <div className="image-notes">
          {images.map((image, index) => (
            <div key={index} className="image-note-container">
              <img src={image} alt={`Image ${index}`} />
              <ImageNote onAddNote={(note) => handleAddImageNote(note, index)} />
              <p>{imageNotes[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodBoard;
