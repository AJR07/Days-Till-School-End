import React, { useState } from "react";
import "./App.css";

let lastResult = "",
  lastResult2 = "";

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

function differenceInDate() {
  let dateNow = new Date().getTime();
  let dateEnd = new Date("November 1, 2022 0:0:0").getTime();
  let delta = Math.abs(dateEnd - dateNow) / 1000;

  let days = Math.floor(delta / 86400);
  delta -= days * 86400;

  let hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  let minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  let seconds = Math.floor(delta % 60);

  let toReturn = `${days} ${hours} ${minutes} ${seconds}`;
  return toReturn;
}

function App() {
  let [time, setTime] = useState(calculateTime());
  let [timeDiff, setTimeDiff] = useState(differenceInDate());
  setTimeout(() => {
    startRecurse(time, setTime);
    startRecurse2(time, setTimeDiff);
  }, 1000);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>How long more till school ends?</h1>
      <h3 style={{ color: "white", paddingLeft: "2vw" }}>
        Current Date: {time}
      </h3>
      <h2 style={{ textAlign: "center" }}>{timeDiff}</h2>
      <div id="grid">
        <div></div>
        <h3 style={{ textAlign: "center", color: "black" }}> Days</h3>
        <h3 style={{ textAlign: "center", color: "black" }}> Hours</h3>
        <h3 style={{ textAlign: "center", color: "black" }}> Minutes</h3>
        <h3 style={{ textAlign: "center", color: "black" }}> Seconds</h3>
      </div>
    </div>
  );
}

function startRecurse(
  time: string,
  setTime: React.Dispatch<React.SetStateAction<string>>
) {
  let result = calculateTime();
  if (result === lastResult) return;
  setTime(result);
  lastResult = result;
  setTimeout(() => {
    startRecurse(time, setTime);
  }, 1000);
}

function startRecurse2(
  time: string,
  setTimeDiff: React.Dispatch<React.SetStateAction<string>>
) {
  let result = differenceInDate();
  if (result === lastResult2) return;
  setTimeDiff(result);
  lastResult2 = result;
  setTimeout(() => {
    startRecurse(time, setTimeDiff);
  }, 1000);
}

export default App;
