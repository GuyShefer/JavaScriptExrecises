(function () {

    // block 1 result : 
    // log - undefined,
    // log - 2
    // the result of the undefines is because the var varible is hoisiting to the top of the function and not defined with any value.
    // fix: remove the line with the defined var to the top of the function

    // block 2 result : 
    // log - 'Aurelio De Rosa'
    // log - undefined
    // the result of the undefines is because the var-test is placement to the getFullName variable and thats variable is a function 
    // so you should add brackets to the placement

    // block 3 result :
    // func b isnt have a console.log so its not print,
    // type of a = undefined and type of b = 0

    // block 4 result :
    // its will return 2 twice because the last funcC is overriding the first functC and after its override its hoisting to the top of the file.

    // block 5 result :
    // its will return 1 in the console because funcD1 has the varible d thats define in the global scope (windows),
    // and the funcD2 has a e varible that become LOCAL to the function.

    // block 6 result :
    //  its will return 'Value of f in local scope: 1' and 'Value of f in global scope: undefined'
    //  because console.log and var f is hoisitng before the funcE so the first console.log dont know f, and next line f will be define.



})();
