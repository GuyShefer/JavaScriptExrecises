(function (){

    let countEvenOnRange = (num) => {
        let amountOfDigits = 0;
        for(let i = 111; i < num; i++){
            amountOfDigits += countEvenDigits(i);
        }
        return amountOfDigits;
    }

    let countEvenDigits = (num) => {
        let tempNum = num;
        let digit;
        let amountOfEvenDigits = 0;
        while(tempNum > 0){
            digit = tempNum % 10;
            if(digit % 2 === 0){
                amountOfEvenDigits++;
            }
            tempNum = Math.floor(tempNum/10);
        }
        return amountOfEvenDigits;
    }

    console.log(countEvenOnRange(115));

})();