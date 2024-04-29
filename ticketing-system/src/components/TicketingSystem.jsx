// components/TicketingSystem.js
import React, { useState } from 'react';
import IssueList from './IssueList';
import IssueForm from './IssueForm';

const TicketingSystem = () => {
  const [issues, setIssues] = useState([]);

  const handleAddIssue = (newIssue) => {
    setIssues([...issues, { id: Date.now(), ...newIssue }]);
  };

  const handleDeleteIssue = (id) => {
    setIssues(issues.filter(issue => issue.id !== id));
  };

  return (
    <div className="ticketing-system">
      <IssueForm onAdd={handleAddIssue} />
      <IssueList issues={issues} onDelete={handleDeleteIssue} />
    </div>
  );
};

export default TicketingSystem;
