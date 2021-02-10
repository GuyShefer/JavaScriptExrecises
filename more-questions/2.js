(function (){

let countX  = (n,t) => {
    let amountOfDividers = 0;
    for(let i = 1; i < n ; i++){
        if(i % t === 0){
            amountOfDividers++;
        }
    }
    return amountOfDividers;
}

console.log(countX(10,2));

})();