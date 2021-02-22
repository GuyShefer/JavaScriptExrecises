(function () {

    let missingNum = (randomArr) => {
        return 55 - randomArr.reduce((accumulator, currentValue) => accumulator + currentValue);
    }

    console.log(missingNum([4, 3, 6, 5, 1, 2, 8, 9, 0, 10]));
})();