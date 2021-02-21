(function () {

    let isPalindrome = string => {
       let reverseStr = string.split('').reverse().join('');
       return reverseStr === string ? true : false;
    }

    console.log(isPalindrome('aba'));
    console.log(isPalindrome('12321'));
    console.log(isPalindrome('bba'));
    

})();