import { useState } from 'react';
import './App.css';
import AddStudentForm from './components/AddStudentForm';
import StudentList from './components/StudentList';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <>
    <h1>Student Management System</h1>
    <AddStudentForm addStudent={addStudent} />
    <StudentList students={students} deleteStudent={deleteStudent} />
    </>
  )
}

export default App;
