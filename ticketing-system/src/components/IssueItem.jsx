// components/IssueItem.js
import React from 'react';

const IssueItem = ({ issue, onDelete }) => {
  return (
    <div className="issue-item">
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <button onClick={() => onDelete(issue.id)}>Delete</button>
    </div>
  );
};

export default IssueItem;
