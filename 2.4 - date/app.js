(function () {


    function displayCurrentDate() {
        let currentDate = new Date();
        let day = getDayText(currentDate.getDay());
        let dayDate = currentDate.getDate();
        let month = getMonthText(currentDate.getMonth());
        let year = currentDate.getFullYear();
        console.log(`Today is ${day} the ${dayDate} of ${month}, ${year}`);
    }

    displayCurrentDate();

    function getDayText(num) {
        switch (num) {
            case 0:
                return 'Sunday'
                break;
            case 1:
                return 'Monday'
                break;
            case 2:
                return 'Tuesday'
                break;
            case 3:
                return 'Wednesday'
                break;
            case 4:
                return 'Thursday'
                break;
            case 5:
                return 'Friday'
                break;
            case 6:
                return 'Saturday'
                break;
            default:
                return 'Sunday'
        }
    }

    function getMonthText(num) {
        switch (num) {
            case 0:
                return "January";
                break;
            case 1:
                return "February";
                break;
            case 2:
                return "March";
                break;
            case 3:
                return "April";
                break;
            case 4:
                return "May";
                break;
            case 5:
                return "June";
                break;
            case 6:
                return "July";
                break;
            case 7:
                return "August";
                break;
            case 8:
                return "September";
                break;
            case 9:
                return "October";
                break;
            case 10:
                return "November";
                break;
            case 11:
                return "December";
                break;
        }
    }

})();