import React, { useState } from 'react';

const AddStudentForm = ({ addStudent }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age) return;
    addStudent({ name, age, id: Date.now() });
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Age" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;