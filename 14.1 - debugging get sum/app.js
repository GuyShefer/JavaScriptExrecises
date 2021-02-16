(function () {
    console.group('debug');
    function getSum(arr1, arr2) {

        let sum = 0;
        for (let i = 0; i < arr1.length; i++) {
            sum += arr1[i];
        }
        for (let i = 0; i < arr2.length; i++) {
            sum += arr2[i];
        }
        return sum;
    }
    console.log(getSum([1, 2, 3],[5, 66, 23]));
    console.groupEnd('debug');

    // 1. the lines that contains the problem is :  14 and 5 and 12
    // 2. i just used the console.group to follow the stack trace 
    /* 3. the first bug was a comma missing in line 14 between the two arrays.
        the second bug was the sum refernace that define to 'const' and should have been 'let'
        the third bug was that the function not return anything
    */
        


})();