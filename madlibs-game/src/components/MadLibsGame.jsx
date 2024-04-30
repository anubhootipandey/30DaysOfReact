import React, { useState } from 'react';
import StoryTemplate from './StoryTemplate';
import WordInput from './WordInput';

const MadLibsGame = ({ story, categories }) => {
  const [words, setWords] = useState({});
  const [completedStory, setCompletedStory] = useState('');

  const handleAddWord = (category, word) => {
    setWords({ ...words, [category]: word });
  };

  const generateCompletedStory = () => {
    let completed = story;
    for (const category in words) {
      const regex = new RegExp(`\\[${category}\\]`, 'g');
      completed = completed.replace(regex, words[category]);
    }
    setCompletedStory(completed);
  };

  const handleReset = () => {
    setWords({});
    setCompletedStory('');
  };

  return (
    <div className="mad-libs-game">
      <h1>Mad Libs Game</h1>
      <StoryTemplate story={completedStory || story} />
      {Object.keys(categories).map((category, index) => (
        <WordInput key={index} category={category} onAddWord={handleAddWord} />
      ))}
      <button onClick={generateCompletedStory}>Generate Story</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default MadLibsGame;
