module.exports = function(year, day) {

    function convertDay(day) {

        switch (day) {
            case "Sunday":
                return 0;
                break;
            case "Monday":
                return 1;
                break;
            case "Tuesday":
                return 2;
                break;
            case "Wednesday":
                return 3;
                break;
            case "Thursday":
                return 4;
                break;
            case "Friday":
                return 5;
                break;
            case "Saturday":
                return 6;
                break;
            default:
                return "";
        }
    }

    var firstDay = new Date(year, 0, 1),
        lastDay = new Date(year, 11, 31);

    var daysInYear = 1 + Math.round((lastDay - firstDay) / (24 * 3600 * 1000));

    return Math.floor((daysInYear + (firstDay.getDay() + 6 - convertDay(day)) % 7) / 7);

}
