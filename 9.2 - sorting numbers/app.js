(function () {

     const numbers = [1, -5, 666, 2, 400, 11];

     let ascendingNumbers = numbers.sort((firstItem, secondItem) => firstItem - secondItem);
     let descendingNumbers = numbers.sort((firstItem, secondItem) => secondItem - firstItem);

     console.log(ascendingNumbers);
     console.log(descendingNumbers);

})();