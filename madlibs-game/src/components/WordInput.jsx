import React, { useState } from 'react';

const WordInput = ({ category, onAddWord }) => {
  const [word, setWord] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!word.trim()) return;
    onAddWord(category, word);
    setWord('');
  };

  return (
    <div className="word-input">
      <h3>{category}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder={`Enter a ${category}`} value={word} onChange={(e) => setWord(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default WordInput;
