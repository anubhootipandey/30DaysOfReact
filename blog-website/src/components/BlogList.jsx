import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const BlogList = ({posts}) => {
  return (
    <div className='blog-list'>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogList;