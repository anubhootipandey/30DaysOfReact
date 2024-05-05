import React from 'react';
import RecipeList from './components/RecipeList';
import recipes from './data/recipes';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Recipe Website</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
