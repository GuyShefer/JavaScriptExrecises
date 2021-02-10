(function () {

     let acrobats = [5, 5, 8, -1, -1, -1, 3, 7, 9];

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
                    if (timesToDivide !== 0) {
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

     let jumpersAvgScoreArr = avgJumper(acrobats);
     console.log(jumpersAvgScoreArr); //2

     let bestAvgJump = (arr) => {
          let bestAvg = 0;
          for (let i = 0; i < arr.length; i++) {
               if (!isNaN(arr[i])) {
                    bestAvg = Math.max(bestAvg, arr[i]);
               }
          }
          if (bestAvg === 0) {
               return 'There is no jumpers to calculate';
          }
          return bestAvg;
     }

     console.log(bestAvgJump(jumpersAvgScoreArr)); //3

     let bestJump = (arr) => {
          let bestJumpValue = 0;
          for(let i = 0; i < arr.length; i++){
               bestJumpValue = Math.max(bestJumpValue, arr[i]);
          }
          return bestJumpValue;
     }

     console.log(bestJump(acrobats)); //4

})();