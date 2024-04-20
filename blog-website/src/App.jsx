import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import SinglePost from './pages/SinglePost';
import CreateBlogForm from './pages/CreateBlogForm';

function App() {

  // State to store blog posts
  const [blogPosts, setBlogPosts] = useState([
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
    { id: 3, title: 'Third Post', content: 'This is the content of the third post.' }
  ]);
 
  const addBlogPost = (newPost) => {
    setBlogPosts([...blogPosts, newPost]);
  };  

  return (
    <Router>
      <Header />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/blog" element={<Blog blogPosts={blogPosts} />} />
      <Route path="/blog/:id" element={<SinglePost />} />
      <Route path="/create" element={<CreateBlogForm addBlogPost={addBlogPost} />} />
    </Routes>
  </Router>
  )
}

export default App;
