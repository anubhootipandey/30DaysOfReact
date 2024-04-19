import React from 'react'
import BlogList from '../components/BlogList';

const blogPosts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
    { id: 3, title: 'Third Post', content: 'This is the content of the third post.' }
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">Blog</h2>
      <BlogList posts={blogPosts} />
    </div>
  )
}

export default Blog