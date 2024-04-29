import React, { useState } from 'react';

const GoalForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title });
    setTitle('');
  };

  return (
    <div className="goal-form">
      <h2>Add Goal</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default GoalForm;
