import React from 'react'
import BlogList from '../components/BlogList';

const Blog = ({ blogPosts }) => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">Blog</h2>
      <BlogList posts={blogPosts} />
    </div>
  )
}

export default Blog