import React, { useState, useEffect } from 'react';
import BlogPost from '../components/BlogPost';
import { useParams } from 'react-router-dom';

const blogPosts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
    { id: 3, title: 'Third Post', content: 'This is the content of the third post.' }
  ];

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Retrieve post data from localStorage based on ID
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts'));
    const foundPost = storedPosts.find(item => item.id === parseInt(id));
    setPost(foundPost);
  }, [id]);

  if (!post) {
      return <p>Post not found!</p>;
  }
  
    return (
      <div>
        {post ? <BlogPost post={post} /> : <p>Post not found!</p>}
      </div>
    );
}

export default SinglePost;