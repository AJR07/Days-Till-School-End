import React, { useState } from "react";
import "./App.css";

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

class Time {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  constructor(days: number, hours: number, minutes: number, seconds: number) {
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }
}

let lastResult = "",
  lastResult2 = new Time(0, 0, 0, 0);

function differenceInDate() {
  let dateNow = new Date().getTime();
  let dateEnd = new Date("November 1, 2022 12:40:0").getTime();
  let delta = Math.abs(dateEnd - dateNow) / 1000;

  let days = Math.floor(delta / 86400);
  delta -= days * 86400;

  let hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  let minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  let seconds = Math.floor(delta % 60);

  let toReturn = new Time(days, hours, minutes, seconds);
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
      <div>
        <h1 style={{ color: "white", textAlign: "center" }}>
          How long more till school ends?
        </h1>
        <h3 style={{ paddingLeft: "2vw" }}>Current Date: {time}</h3>
        <div id="grid">
          <h2>{timeDiff.days}</h2>
          <h2>{timeDiff.hours < 10 ? `0${timeDiff.hours}` : timeDiff.hours}</h2>
          <h2>
            {timeDiff.minutes < 10 ? `0${timeDiff.minutes}` : timeDiff.minutes}
          </h2>
          <h2>
            {timeDiff.seconds < 10 ? `0${timeDiff.seconds}` : timeDiff.seconds}
          </h2>
          <h3 style={{ textAlign: "center" }}> Days</h3>
          <h3 style={{ textAlign: "center" }}> Hours</h3>
          <h3 style={{ textAlign: "center" }}> Minutes</h3>
          <h3 style={{ textAlign: "center" }}> Seconds</h3>
        </div>
      </div>
      <button id="links" onClick={() => {window.location.href = "https://github.com/AJR07/School-End-Timer"}}>Github</button>
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
  setTimeDiff: React.Dispatch<React.SetStateAction<Time>>
) {
  let result = differenceInDate();
  if (result === lastResult2) return;
  setTimeDiff(result);
  lastResult2 = result;
  setTimeout(() => {
    startRecurse2(time, setTimeDiff);
  }, 1000);
}

export default App;
