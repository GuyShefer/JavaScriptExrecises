(function (){

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

console.log(countEvenDigits(1640));

})();