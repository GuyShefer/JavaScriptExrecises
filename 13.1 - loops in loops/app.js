(function () {

     const listOfNeighbours = [
          ["Canada", "Mexico"],
          ["Spain"],
          ["Norway", "Sweden", "Russia"],
     ];

     for (let i = 0; i < listOfNeighbours.length; i++) {
          for (let j = 0; j < listOfNeighbours[i].length; j++) {
               console.log('Neighbour : ', listOfNeighbours[i][j]);
          }
     }


     listOfNeighbours.forEach(element => {
          element.forEach( value => {
               console.log('Neighbour : ', value);
          })
     });
})();