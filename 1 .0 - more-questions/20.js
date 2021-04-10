(function () {


    // const arr = [4, 1, 4, 1, 2];
    const arr = [2, 2, 1];
    const res = arr.reduce((accumulator, currentValue) => {
        return accumulator ^ currentValue
    }, 0)
    console.log(res);
})();


