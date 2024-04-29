// components/PageNotes.js
import React, { useState } from 'react';

const PageNotes = ({ onSave }) => {
  const [pageNote, setPageNote] = useState('');

  const handleSave = () => {
    onSave(pageNote);
  };

  return (
    <div className="page-notes">
      <textarea placeholder="Add page notes..." value={pageNote} onChange={(e) => setPageNote(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default PageNotes;
