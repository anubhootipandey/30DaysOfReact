import React from 'react';
import GoalItem from './GoalItem';

const GoalList = ({ goals, onDelete }) => {
  return (
    <div className="goal-list">
      <h2>Goals</h2>
      {goals.map(goal => (
        <GoalItem key={goal.id} goal={goal} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default GoalList;
