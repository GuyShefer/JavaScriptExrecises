(function () {

    let arr = ["boo", "doooo", "hoo","ro"] ;

   let calcElementsLengthInTheArr = (arr) => {
        return arr.map(x => x.length);
   }

   console.log(calcElementsLengthInTheArr(arr));

})();