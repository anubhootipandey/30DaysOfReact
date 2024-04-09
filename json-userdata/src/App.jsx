import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log(response);
      setUserData(response.data);
    });
  }, []);


  return (
    <>
      <h1>JSON User Data</h1>
      {
        userData.map((d, index) => {
          return <div key={index}>
            <h3>Name: {d.name}</h3>
            <p>Email: {d.email} <br />
            Username: {d.username} <br />
            Website: {d.website} <br />
            Address: {d.address.city}</p>
          </div>
        })
      }
    </>
  );
};

export default App;
