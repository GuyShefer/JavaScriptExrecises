// function cakes(recipe, available) {
//     let cakes = Infinity;
//     for (const [key, value] of Object.entries(recipe)) {
//         if (available[key] == null) {
//             return 0;
//         }
//         cakes = Math.min(cakes, Math.floor(available[key] / value));
//     }
//     return cakes;
// }

// console.log(Math.floor(16 / 10));

const digital_root = (n)  => {
    if(n < 10){
      return n;
    }
    
    let tempNum = 0;
    while(n > 0){
      tempNum += n % 10
      n = Math.floor(n / 10);
    }
    return digital_root(tempNum)
  }

console.log(digital_root(456));
console.log(digital_root(17));