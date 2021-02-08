(function () {

    let calcAvgScore = (num1, num2, num3) => {
        let sumOfScores = num1 + num2 + num3;
        let amountOfScores = 3;
        return sumOfScores / amountOfScores;
    }

    let johnTeamAvg = calcAvgScore(119, 120, 103);
    let mikeTeamAvg = calcAvgScore(116, 94, 123);

    let calcWinner = (avgTeamOne, firstPlayer, avgTeeamTwo, seconPlayer) => {
        if (avgTeamOne > avgTeeamTwo) {
            console.log(`The Winner Is : ${firstPlayer}, with an average score of ${avgTeamOne}.`)
        }
        else if (avgTeamOne < avgTeeamTwo) {
            console.log(`The Winner Is : ${seconPlayer}, with an average score of ${avgTeeamTwo}.`)
        }
        else {
            console.log(`There is now winner, its a draw!`)
        }
    }

    calcWinner(johnTeamAvg, 'John', mikeTeamAvg, 'Mike');

    let maryTeamAvg = calcAvgScore(97, 134, 105);

    calcWinner(mikeTeamAvg, 'Mike', maryTeamAvg, 'Mary');
    calcWinner(johnTeamAvg, 'John', maryTeamAvg, 'Mary');

})();