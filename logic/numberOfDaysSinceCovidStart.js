const dateStart = new Date('Nov 17, 2019');
const currentDate = new Date();

const numberOfDaysSinceCovidStart = (dateStart, currentDate) => {
    const oneDay =  1000 * 60 * 60 *24;
    const time1 = dateStart.getTime();
    const time2 = currentDate.getTime();

    let time = time2 - time1;
    time /= oneDay;
    time = Math.round(Math.abs(time));
    return time;
};