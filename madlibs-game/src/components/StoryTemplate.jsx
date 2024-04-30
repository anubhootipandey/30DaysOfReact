import React from 'react';

const StoryTemplate = ({ story }) => {
  return (
    <div className="story-template">
      <h2>Mad Libs Story</h2>
      <p>{story}</p>
    </div>
  );
};

export default StoryTemplate;
