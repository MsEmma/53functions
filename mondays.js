module.exports = function(year) {

    var first = new Date(year, 0, 1);
    var last = new Date(year, 11, 31);
    var totalDays = 1 + Math.round((last - first) / (24 * 3600 * 1000));

    var sum = function(a, b) {
        return a + Math.floor((totalDays + (first.getDay() + 6 - b) % 7) / 7);
    };

    return [1].reduce(sum, 0);
}
