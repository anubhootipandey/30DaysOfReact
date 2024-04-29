import React, { useState } from 'react';
import GoalForm from './GoalForm';
import GoalList from './GoalList';

const GoalDashboard = () => {
  const [goals, setGoals] = useState([]);

  const handleAddGoal = (newGoal) => {
    setGoals([...goals, { id: Date.now(), ...newGoal }]);
  };

  const handleDeleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div className="goal-dashboard">
      <GoalForm onAdd={handleAddGoal} />
      <GoalList goals={goals} onDelete={handleDeleteGoal} />
    </div>
  );
};

export default GoalDashboard;
