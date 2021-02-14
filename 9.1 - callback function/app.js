(function () {

     // 1 //////
     function print(string) {
          console.log(string);
     }

     let isString = (str, callback) => {
          if (typeof str === 'string') {
               callback(str);
          }
     }

     isString('Hello World', print);

     // 2 //////

     let dashesSplitSentance = (arr) => {
          console.log(arr.join('-'));
     }

     let firstWordUpperCase = (str, callback) => {
          let wordsArr = str.split(' ');
          wordsArr[0] = wordsArr[0].toUpperCase();
          callback(wordsArr)
     }

     firstWordUpperCase('hello world callback function', dashesSplitSentance);

     // 3 //////

     let asteriskSplitSentance = (arr) => {
          console.log(arr.join('**'));
     }

     firstWordUpperCase('hello world callback function', asteriskSplitSentance);


     // 4 //////

     let reverseNumber = (num) => {
          let newNum = 0;
          while (num > 0) {
               newNum = (10 * newNum) + (num % 10);
               num = Math.floor(num/10);
          }
          console.log(newNum)
          return newNum;
     }

     let isPalindrome = (num, callback) => {
           return num === callback(num) ? true : false;
     }

     console.log(isPalindrome(121, reverseNumber));

})();