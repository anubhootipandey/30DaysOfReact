import React from 'react';
import './style.css';

const BlogPost = ({post}) => {
  return (
    <div className='blog-post'>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  )
}

export default BlogPost;