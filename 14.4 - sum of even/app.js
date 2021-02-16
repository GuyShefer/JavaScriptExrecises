(function () {
    debugger;
    function calcAverage(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum/arr.length;
    }
    console.log(calcAverage([85, 90, 92]));

    // 1. The lines that contains the problem is :  4, 8
    // 2. I used the debugger 
    // 3. The bug was the sum variable in the function that define has undefined,
    //    and when you return the avg you should divide the score by arr.length


})();