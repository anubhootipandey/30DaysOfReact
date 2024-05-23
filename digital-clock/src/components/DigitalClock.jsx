import React, { useEffect, useState } from "react";
import "../App.css";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="main">
      <div className="digital-clock">
        <h1>Digital Clock</h1>
        <div className="container">
          <h2>{time.toLocaleTimeString()}</h2>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
