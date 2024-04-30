// Video.js
import React from 'react';

const Video = ({ video }) => {
  const videoSrc = `https://www.youtube.com/embed/${video.id}`;

  return (
    <div className="video">
      <iframe title={video.title} width="560" height="315" src={videoSrc} frameBorder="0" allowFullScreen></iframe>
      <h2>{video.title}</h2>
      <p>{video.description}</p>
    </div>
  );
};

export default Video;
