(function () {

    let calcAvgScore = (num1, num2, num3) => {
        let sumOfScores = num1 + num2 + num3;
        let amountOfScores = 3;
        return sumOfScores / amountOfScores;
    }

    let johnTeam = calcAvgScore(119, 120, 103);
    let mikeTeam = calcAvgScore(116, 94, 123);

    let calcWinner = (num1, firstPlayer, num2, seconPlayer) => {
        if (num1 > num2) {
            console.log(`The Winner Is : ${firstPlayer}, with an average score of ${num1}.`)
        }
        else if (num1 < num2) {
            console.log(`The Winner Is : ${seconPlayer}, with an average score of ${num2}.`)
        }
        else {
            console.log(`There is now winner, its a draw!`)
        }
    }

    calcWinner(johnTeam, 'John', mikeTeam, 'Mike');

    let maryTeam = calcAvgScore(97, 134, 105);

    calcWinner(mikeTeam, 'Mike', maryTeam, 'Mary')

})();