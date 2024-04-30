import React from 'react';
import BookmarkList from './BookmarkList';

const BookmarkGroup = ({ groupName, bookmarks, onRemove }) => {
  return (
    <div className="bookmark-group">
      <h2>{groupName}</h2>
      <BookmarkList bookmarks={bookmarks} onRemove={onRemove} />
    </div>
  );
};

export default BookmarkGroup;
