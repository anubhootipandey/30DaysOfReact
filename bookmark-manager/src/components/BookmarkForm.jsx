import React, { useState } from 'react';

const BookmarkForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !url.trim()) return;
    onAdd({ title, url });
    setTitle('');
    setUrl('');
  };

  return (
    <div className="bookmark-form">
      <h2>Add Bookmark</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="url" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default BookmarkForm;
