(function () {
    console.group('debug');
    function findSmallest(a, b, c) {
        if (a > b > c) {
            return c;
        } else if (a > c > b) {
            return a;
        } else {
            return b;
        }
    }
    findSmallest(52, 66, 2);
    console.groupEnd('debug');

    // 1. The lines that contains the problem is :  12
    // 2. I just used the console.group to follow the stack trace 
    // 3. The  bug was the function name is not match to the real one.


})();