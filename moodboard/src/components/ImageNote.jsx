import React, { useState } from 'react';
import '../App.css';

const ImageNote = ({ onAddNote }) => {
  const [note, setNote] = useState('');

  const handleAddNote = () => {
    if (note.trim()) {
      onAddNote(note);
      setNote('');
    }
  };

  return (
    <div className="image-note">
      <input type="text" placeholder="Add note..." value={note} onChange={(e) => setNote(e.target.value)} />
      <button onClick={handleAddNote}>Add</button>
    </div>
  );
};

export default ImageNote;
