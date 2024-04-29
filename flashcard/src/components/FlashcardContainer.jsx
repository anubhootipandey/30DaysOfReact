// components/FlashcardContainer.js
import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import FlashcardForm from './FlashcardForm';

const FlashcardContainer = () => {
  const [flashcards, setFlashcards] = useState([]);

  const handleAddFlashcard = (newFlashcard) => {
    setFlashcards([...flashcards, { id: Date.now(), ...newFlashcard }]);
  };

  const handleDeleteFlashcard = (id) => {
    setFlashcards(flashcards.filter(flashcard => flashcard.id !== id));
  };

  const handleToggleDone = (id) => {
    setFlashcards(flashcards.map(flashcard =>
      flashcard.id === id ? { ...flashcard, done: !flashcard.done } : flashcard
    ));
  };

  return (
    <div className="flashcard-container">
      <FlashcardForm onAdd={handleAddFlashcard} />
      <FlashcardList flashcards={flashcards} onDelete={handleDeleteFlashcard} onToggleDone={handleToggleDone} />
    </div>
  );
};

export default FlashcardContainer;
