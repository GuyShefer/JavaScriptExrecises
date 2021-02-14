(function () {

     const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

     console.log('Ascending Foods', foods.sort());
     console.log('DescendingFoods', foods.sort().reverse());
     // 1 ///
     console.log("-----")

     const foodsWithUpperCase = ["falafel", "Sabich", "hummus", "pizza with extra pineapple"];

     console.log('Ascending Foods With UpperCase : ', foodsWithUpperCase.join('  ').toLowerCase().split('  ').sort());
     console.log('Descending Foods With UpperCase : ', foodsWithUpperCase.join('  ').toLowerCase().split('  ').sort().reverse());

     // 2 ///
     console.log("-----")

     const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

     console.log(words.sort((x,y) => y.length - x.length));



})();