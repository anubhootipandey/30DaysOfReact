// components/FlashcardList.js
import React from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ flashcards, onDelete, onToggleDone }) => {
  return (
    <div className="flashcard-list">
      <h2>Flashcards</h2>
      {flashcards.map(flashcard => (
        <Flashcard key={flashcard.id} flashcard={flashcard} onDelete={onDelete} onToggleDone={onToggleDone} />
      ))}
    </div>
  );
};

export default FlashcardList;
