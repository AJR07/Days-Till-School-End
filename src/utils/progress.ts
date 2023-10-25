export default function calculateProgress(startDate: Date, endDate: Date) {
    let dateNow = new Date().getTime();
    let dateEnd = endDate.getTime();
    let dateStart = startDate.getTime();
    let toReturn = 100 - ((dateEnd - dateNow) / (dateEnd - dateStart)) * 100;
    let res = Math.round(toReturn * 10000) / 10000;
    return res;
}
