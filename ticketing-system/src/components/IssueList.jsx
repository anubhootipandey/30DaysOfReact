// components/IssueList.js
import React from 'react';
import IssueItem from './IssueItem';

const IssueList = ({ issues, onDelete }) => {
  return (
    <div className="issue-list">
      <h2>Issues</h2>
      {issues.map(issue => (
        <IssueItem key={issue.id} issue={issue} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default IssueList;
