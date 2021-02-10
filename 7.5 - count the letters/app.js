(function () {

     const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
     const countLetters = {};

     for (let i = 0; i < array.length; i++) {
          for (let j = 0; j < array[i].length; j++) {
               if (array[i][j] !== ' ') {
                    if (array[i][j].toUpperCase() in countLetters) {
                         countLetters[array[i][j].toUpperCase()]++;
                    } else {
                         countLetters[array[i][j].toUpperCase()] = 1;
                    }
               }
          }
     }

     console.log(countLetters);

})();