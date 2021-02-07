(function(){

function percentageOfWorld1(population) {
    return (population / 7900 * 100).toFixed(1);
}

console.log(`China population is ${percentageOfWorld1(1441)} percentage of the World`);
console.log(`Israel population is ${percentageOfWorld1(8)} percentage of the World`);
console.log(`USA population is ${percentageOfWorld1(328)} percentage of the World`);

console.log("-----------------------")

let percentageOfWorld2 = (population) => (population / 7900 * 100).toFixed(1);

console.log(`China population is ${percentageOfWorld2(1441)} percentage of the World`);
console.log(`Israel population is ${percentageOfWorld2(8)} percentage of the World`);
console.log(`USA population is ${percentageOfWorld2(328)} percentage of the World`);

})()