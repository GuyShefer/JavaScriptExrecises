(function () {

    const arr = [1, 7, 3, 0, -5, 7, 3, 9];

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    console.log('------------');

    let countArrLength = (arr) => {
        let i = 0;
        while (arr[i] !== undefined) {
            i++;
        }
        return i;
    }

    console.log(countArrLength(arr));

    console.log('------------');

    let calcArrSum = (arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    console.log(calcArrSum(arr));

    console.log('------------');

    let arrMult = (arr) => {
        if (arr.length === 0) {
            return 0;
        }
        let sum = 1;
        for (let i = 0; i < arr.length; i++) {
            sum *= arr[i];
        }
        return sum;
    }

    const arr2 = [1, 7, 3, -5, 7, 3, 9];
    console.log(arrMult(arr2));

})();