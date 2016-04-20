module.exports = function(year) {

    var Monday = 1,
        firstDay = new Date(year, 0, 1),
        lastDay = new Date(year, 11, 31);

    var daysInYear = 1 + Math.round((lastDay - firstDay) / (24 * 3600 * 1000));

    return Math.floor((daysInYear + (firstDay.getDay() + 6 - Monday) % 7) / 7);

}
