(function () {

     let acrobats = [5, 5, 8, -1, -1, -1, 3 ,7 , 8];

     let avgJumper = (arr) => {
          let eachJumperAvg = [];
          let calcOneJumperScore = 0;
          let timesToDivide = 3;

          for (let i = 0; i < arr.length; i++) {
               if (arr[i] !== -1) {
                    calcOneJumperScore += arr[i];
               } else {
                    timesToDivide--;
               }

               if ((i + 1) % 3 === 0) {
                    if(timesToDivide !== 0){
                    eachJumperAvg.push(calcOneJumperScore / timesToDivide);
                    } else {
                         eachJumperAvg.push('There is Not avaiable score..');
                    }
                    calcOneJumperScore = 0;
                    timesToDivide = 3;
               }
          }
          return eachJumperAvg;
     }

     console.log(avgJumper(acrobats));


})();