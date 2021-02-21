(function () {

    let isStrike = num => {
        while (num > 0) {
            if (num % 10 < Math.floor(num / 10) % 10) {
                return false;
            }
            num = Math.floor(num/10);
        }
        return true;
    }

    console.log(isStrike(123456798));
    console.log(isStrike(123456789));
    console.log(isStrike(123));

})();