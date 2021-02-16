(function () {
    debugger;
    function getSumOfEven(arr){
        return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
       }
       console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));

    // 1. The lines that contains the problem is :  4
    // 2. I used the debugger 
    // 3. The bug was the function calculate run on the odd index elemntens 


})();