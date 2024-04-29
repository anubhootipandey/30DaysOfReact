import React from 'react';

const GoalItem = ({ goal, onDelete }) => {
  return (
    <div className="goal-item">
      <p>{goal.title}</p>
      <button onClick={() => onDelete(goal.id)}>Delete</button>
    </div>
  );
};

export default GoalItem;
