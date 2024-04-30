// VideoGallery.js
import React, { useState, useEffect } from 'react';
import Video from './Video';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=YOUR_PLAYLIST_ID&maxResults=10&key=YOUR_API_KEY'
        );
        const data = await response.json();
        const videoItems = data.items.map((item) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
        }));
        setVideos(videoItems);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="video-gallery">
      <h1>Video Tutorials Gallery</h1>
      <div className="videos">
        {videos.map((video, index) => (
          <Video key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
