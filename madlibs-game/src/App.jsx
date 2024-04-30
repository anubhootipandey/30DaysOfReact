import React from 'react';
import MadLibsGame from './components/MadLibsGame';
import './App.css';

const story = "Once upon a time, in a [adjective] [place], there lived a [noun]. One day, the [noun] decided to [verb] to [location]. Along the way, they met a [adjective] [noun] who offered them a [noun]. The [noun] happily accepted the [noun] and continued on their journey.";

const categories = {
  adjective: "Adjective",
  noun: "Noun",
  verb: "Verb",
  location: "Location"
};

function App() {
  return (
    <div className="App">
      <MadLibsGame story={story} categories={categories} />
    </div>
  );
}

export default App;
