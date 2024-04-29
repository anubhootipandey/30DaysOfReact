// components/FlashcardForm.js
import React, { useState } from 'react';

const FlashcardForm = ({ onAdd }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;
    onAdd({ question, answer, done: false });
    setQuestion('');
    setAnswer('');
  };

  return (
    <div className="flashcard-form">
      <h2>Add Flashcard</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Question" value={question} onChange={(e) => setQuestion(e.target.value)} />
        <input type="text" placeholder="Answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default FlashcardForm;
