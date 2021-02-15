(function () {

     let arr1 = ['mango', 'apple', 'watermelon', 3, 'watermelon'];

     const doubleValues = arr1.map(n => n + " " + n);

     console.log(doubleValues); //1

     console.log("------------")

     let arr2 = [2, 4, 7, 9, 10];

     const onlyEvenValues = (array) => {
          let newArr = []
          array.forEach((num) => {
               if (num % 2 === 0) {
                    newArr.push(num);
               }
          });
          return newArr;
     }
     console.log(onlyEvenValues(arr2)); //2

     console.log("------------")

     const showFirstAndLast = (array) => {
          let newArr = array.filter(element => typeof element === "string");
          return newArr.filter((n, i) => {
               if (i === 0 || i === newArr.length - 1) {
                    return n;
               };
          })
     }

     console.log(showFirstAndLast(arr1));//3

     console.log("------------")

     let str = "hello world aeaeae"

     let vowelCount = (string) => {
          let obj = {};
          let vowels = ['a', 'e', 'u', 'i', 'o'];
          string.toLowerCase().split('').filter((char) => { return vowels.includes(char) }).forEach((value) => {
               obj.hasOwnProperty(value) ? obj[value] += 1 : obj[value] = 1;
          })
          return obj;
     }

     console.log(vowelCount(str)); //4

     console.log("------------")

     let capitalize = string => {
          return (string.split('').map(char => {
               return char === ' ' ? " " : String.fromCharCode(Number(char.charCodeAt(0)) - 32)
          })).join('');
     }

     console.log(capitalize(str)); //5

     console.log("------------")

     let str2 = 'ABCDabcd'

     let shiftLetters = string => {
          console.log((string.split('').map(char => {
               return char === ' ' ? " " : char === 'A' || char === "a" ? String.fromCharCode(Number(char.charCodeAt(0)) + 25) : String.fromCharCode(Number(char.charCodeAt(0)) - 1)
          })).join(''));
     }

     shiftLetters(str2) //6

     let str3 = 'hello world today is sunday'

     console.log("------------")

     let swapCase = string => {
          return string.split(' ').map((value, index) => {
               return (index + 1) % 2 === 0 ? capitalize(value) : value;
          }).join(' ');
     }

     console.log(swapCase(str3));
})(); 