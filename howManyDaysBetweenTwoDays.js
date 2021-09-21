const date1 = new Date('May 27, 2021');
const date2 = new Date('June 5, 2021');

const getDays = (date1, date2) => {
    const oneDay = 1000 * 60 * 60 * 24;
    const time2 = date2.getTime();
    const time1 = date1.getTime();

    let time = time2 - time1;
    time = time / oneDay;
    time = Math.round(Math.abs(time));
    return time;
}

console.log(getDays(date1, date2));