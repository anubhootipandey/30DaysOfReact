import {useState} from 'react';
import './App.css';

function App() {
  const[weight, setWeight] = useState();
  const[height, setHeight] = useState();
  const[bmi, setBmi] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if(weight && height){
      const heightMeters = height / 100;
      const bmiValue = weight / (heightMeters * heightMeters);
      setBmi(bmiValue.toFixed(2));//update the state variable bmi with the calculated BMI value rounded to two decimal places.
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calculateBMI}>
          <label>Weight (kg)</label>
          <input 
            type="text" 
            placeholder="Enter your weight" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)}
          />
          <label>Height (cm)</label>
          <input 
            type="text" 
            placeholder="Enter your height" 
            value={height} 
            onChange={(e) => setHeight(e.target.value)}
          />
          <button type="submit">Calculate BMI</button>
          {bmi && <p>Your BMI is: {bmi}</p>}
        </form>
      </div>
    </div>
  );
}

export default App;
