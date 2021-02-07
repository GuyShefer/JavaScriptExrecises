(function () {


    function displayCurrentDatePlus7() {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 7);
        return currentDate;
    }

    console.log(displayCurrentDatePlus7());

    function displayDateWithASign(sign) {
        let currentDate = new Date();
        return(`${currentDate.getDate()}${sign}${currentDate.getMonth()}${sign}${currentDate.getFullYear()}`);
    }

    console.log(displayDateWithASign('-'));
    console.log(displayDateWithASign('.'));
    console.log(displayDateWithASign('/'));

    function getAmountOfDaysInTheMonth(year, month) {
        let date = new Date(year, month, 0);
        return date.getDate();
    }

    console.log(getAmountOfDaysInTheMonth(2021, 2));
    console.log(getAmountOfDaysInTheMonth(2002, 12));
    console.log(getAmountOfDaysInTheMonth(2015, 4));

})();