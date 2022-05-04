import React, { useState, useEffect } from "react";
import "../App.css";

const Clock = () => {
  let currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);

  const updateTime = () => {
    let currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  };

  useEffect(() => {
    let timer = setInterval(() => {
      updateTime();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{time}</p>
      </header>
    </div>
  );
};

export default Clock;
