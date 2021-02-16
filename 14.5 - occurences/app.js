(function () {
    debugger;
    function countOccurrences(str, char) {
        let counter = 0;
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === char) {
                counter++;
            }
        }
        return counter;
    }
    console.log(countOccurrences("ini mini miny moe", "n"));

    // 1. The lines that contains the problem is :  7
    // 2. I used the debugger 
    // 3. The bug was the counter variable inside the if statement isnt properly manipulated in terms of syntax

})();