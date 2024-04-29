// components/Flashcard.js
import React, { useState } from 'react';

const Flashcard = ({ flashcard, onDelete, onToggleDone }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="front">
        <p>{flashcard.question}</p>
      </div>
      <div className="back">
        <p>{flashcard.answer}</p>
        <button onClick={(e) => { e.stopPropagation(); onDelete(flashcard.id); }}>Delete</button>
        <input type="checkbox" checked={flashcard.done} onChange={(e) => { e.stopPropagation(); onToggleDone(flashcard.id); }} />
      </div>
    </div>
  );
};

export default Flashcard;
