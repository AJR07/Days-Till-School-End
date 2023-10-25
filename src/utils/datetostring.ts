export default function calculateTime() {
    let currentDate = new Date();
    let cSeconds = currentDate.getSeconds();
    let cMinutes = currentDate.getMinutes();
    let cHours = currentDate.getHours();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    let toReturn = `${cDay}/${cMonth}/${cYear} ${
        cHours < 10 ? `0${cHours}` : cHours
    }:${cMinutes < 10 ? `0${cMinutes}` : cMinutes}:${
        cSeconds < 10 ? `0${cSeconds}` : cSeconds
    }`;
    return toReturn;
}
