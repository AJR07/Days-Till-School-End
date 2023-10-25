import { useEffect, useState } from "react";
import calculateTime from "../utils/datetostring";
import LinearProgressWithLabel from "../utils/linearprogresswithlabel";
import dateElapsed from "../utils/dateelapsed";
import calculateProgress from "../utils/progress";
import "./template.css";

interface TemplateProps {
  route: string;
  title: string;
  endDate: Date;
  startDate: Date;
}

export default function Template(props: TemplateProps) {
  let [timeDiff, setTimeDiff] = useState(dateElapsed(props.endDate));
  let [progress, setProgress] = useState(calculateProgress(props.startDate, props.endDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDiff(dateElapsed(props.endDate));
      setProgress(calculateProgress(props.startDate, props.endDate));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="template">
      <div>
        <h1 id="title">How long more till school ends? ({props.title})</h1>
        <h3 style={{ paddingLeft: "2vw" }}>Current Date: {calculateTime()}</h3>
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
      <div id="progress">
        <LinearProgressWithLabel value={progress} />
        {/* <h3>{`+${Math.round((progress - prevProgress) * 10000) / 10000}%`}</h3> */}
      </div>
      <button
        id="links"
        onClick={() => {
          window.location.href = "https://github.com/AJR07/School-End-Timer";
        }}
      >
        Github
      </button>
    </div>
  );
}
