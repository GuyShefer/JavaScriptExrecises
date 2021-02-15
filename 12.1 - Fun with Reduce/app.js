(function () {

     const array = [1, 11, 6];

     const maxNum = array.reduce((accumulator, currentValue) => {
          return accumulator > currentValue ? accumulator = accumulator : accumulator = currentValue;
     }, 0);

     console.log(maxNum); //1

     const sumOfEvenNumbers = array.reduce((accumulator, currentValue) => {
          return currentValue % 2 === 0 ? accumulator += currentValue : accumulator = accumulator;
     }, 0);

     console.log(sumOfEvenNumbers); //2

     let reduceAvg = (array) => {
          if (array.length == 0) {
               console.log('The array is empty');
          } else {
               const calcAvg = array.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue;
               }, 0);

               return calcAvg / array.length;
          }
     }


     console.log(reduceAvg(array));
})();