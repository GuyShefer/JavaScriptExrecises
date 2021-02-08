(function () {

    let sevenBomm = (num) => {
        for (let i = 1; i <= num; i++) {
            if (divisibleBySeven(i) && isIncludeSeven(i)) {
                console.log("BOOM-BOOM");
            }
            else if (divisibleBySeven(i)) {
                console.log("BOOM");
            }
            else{
                console.log(i);
            }
        }
    }

    let divisibleBySeven = (num) => {
        if(num % 7 === 0) {
            return true;
        } else {
            return false;
        }
    }

    let isIncludeSeven = (num) => {
        if(num === 7){
            return true;
        }
        else if(num % 10 === 7){
            return true;
        }
        else if(num / 10 === 7){
            return true;
        } else {
            return false;
        }
    }

    sevenBomm(18);

})();