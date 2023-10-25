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
    let [progress, setProgress] = useState(
        calculateProgress(props.startDate, props.endDate)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeDiff(dateElapsed(props.endDate));
            setProgress(calculateProgress(props.startDate, props.endDate));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="template">
            <div id="upper-section">
                <h1 id="title">
                    How long more till school ends? ({props.title})
                </h1>
                <h3 id="current-date">
                    Current Date: {calculateTime()}
                </h3>
                <div id="container">
                    <div id="grid">
                        <h3 style={{ textAlign: "center" }}> Days</h3>
                        <span />
                        <h3 style={{ textAlign: "center" }}> Hours</h3>
                        <span />
                        <h3 style={{ textAlign: "center" }}> Minutes</h3>
                        <span />
                        <h3 style={{ textAlign: "center" }}> Seconds</h3>
                        <h2>{timeDiff.days}</h2>
                        <span />
                        <h2>
                            {timeDiff.hours < 10
                                ? `0${timeDiff.hours}`
                                : timeDiff.hours}
                        </h2>
                        <span />
                        <h2>
                            {timeDiff.minutes < 10
                                ? `0${timeDiff.minutes}`
                                : timeDiff.minutes}
                        </h2>
                        <span />
                        <h2>
                            {timeDiff.seconds < 10
                                ? `0${timeDiff.seconds}`
                                : timeDiff.seconds}
                        </h2>
                    </div>
                </div>
            </div>

            <div id="progress">
                <LinearProgressWithLabel value={progress} />
                {/* <h3>{`+${Math.round((progress - prevProgress) * 10000) / 10000}%`}</h3> */}
            </div>

            <button
                id="links"
                onClick={() => {
                    window.location.href =
                        "https://github.com/AJR07/School-End-Timer";
                }}
            >
                Github
            </button>
        </div>
    );
}
