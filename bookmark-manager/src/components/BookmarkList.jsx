import React from 'react';

const BookmarkList = ({ bookmarks, onRemove }) => {
  return (
    <div className="bookmark-list">
      <h2>Bookmarks</h2>
      {bookmarks.map(bookmark => (
        <div key={bookmark.id} className="bookmark-item">
          <a href={bookmark.url} target="_blank" rel="noopener noreferrer">{bookmark.title}</a>
          <button onClick={() => onRemove(bookmark.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default BookmarkList;
