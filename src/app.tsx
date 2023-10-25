import Template from "./template/template";

export default function App() {
    return (
        <div id="app">
            <Template
                title={"RIY14"}
                endDate={new Date("October 26, 2023 12:40:0")}
                startDate={new Date("January 2, 2023 7:00:0")}
                route={"/"}
            />
        </div>
    );
}
