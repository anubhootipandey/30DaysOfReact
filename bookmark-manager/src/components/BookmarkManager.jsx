import React, { useState } from 'react';
import BookmarkForm from './BookmarkForm';
import BookmarkGroup from './BookmarkGroup';

const BookmarkManager = () => {
  const [bookmarks, setBookmarks] = useState([
    { id: 1, title: 'Google', url: 'https://www.google.com' },
    { id: 2, title: 'Facebook', url: 'https://www.facebook.com' },
    { id: 3, title: 'Twitter', url: 'https://www.twitter.com' }
  ]);

  const handleAddBookmark = (newBookmark) => {
    setBookmarks([...bookmarks, { id: Date.now(), ...newBookmark }]);
  };

  const handleRemoveBookmark = (id) => {
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
  };

  return (
    <div className="bookmark-manager">
      <h1>Bookmark Manager</h1>
      <BookmarkForm onAdd={handleAddBookmark} />
      <BookmarkGroup groupName="All Bookmarks" bookmarks={bookmarks} onRemove={handleRemoveBookmark} />
    </div>
  );
};

export default BookmarkManager;
