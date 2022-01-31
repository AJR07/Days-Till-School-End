import React, { useState } from "react";
import "./App.css";

let recurseStarted = false, lastResult = "";

function calculateTime() {
  let currentDate = new Date();
  let cSeconds = currentDate.getSeconds();
  let cMinutes = currentDate.getMinutes();
  let cHours = currentDate.getHours();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();
  let toReturn = `${cDay}/${cMonth}/${cYear} ${cHours}:${cMinutes}:${cSeconds}`;
  return toReturn;
}

function App() {
  let [time, setTime] = useState(calculateTime());
  setTimeout(() => {
    startRecurse(time, setTime);
  }, 1000);
  return <div>
    <h1 style={{ textAlign: "center" }}>How long more till school ends?</h1>
    <h3 style={{ color: "white" }}> Current Date: {time}</h3>
  </div>
}

function startRecurse(time: string, setTime: React.Dispatch<React.SetStateAction<string>>) {
  let result = calculateTime();
  if (result == lastResult) return;
  setTime(result);
  lastResult = result;
  setTimeout(() => {
    startRecurse(time, setTime);
  }, 1000);
}

export default App;