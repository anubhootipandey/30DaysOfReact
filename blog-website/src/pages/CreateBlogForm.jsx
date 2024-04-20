import React, { useState } from 'react';

const CreateBlogForm = ({ addBlogPost }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: null
  });


  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle image upload
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({
      ...formData,
      image: imageFile
    });
  };

  // Function to handle form submission
  const handleCreatePost = (e) => {
    e.preventDefault();
    // Gather form data
    const { title, content, image } = formData;
    // Add new blog post
    const newPost = { id: Date.now(), title, content, image };
    addBlogPost(newPost);
    // Reset form after submission
    setFormData({
      title: '',
      content: '',
      image: null
    });
    // Save new post to local storage
    savePostToLocalstorage(newPost);
  };

  // Function to save post to local storage
  const savePostToLocalstorage = (post) => {
    const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const updatedPosts = [...existingPosts, post];
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  };


  return (
    <div className="create-blog-form">
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleCreatePost}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        <label htmlFor="content">Content:</label>
        <textarea id="content" name="content" value={formData.content} onChange={handleChange} required />
        <label htmlFor="image">Upload Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreateBlogForm;
