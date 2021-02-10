(function () {

     let obj = {
          name: 'Guy',
          age: '28',
     }

     let swappedObj = (obj) => {
          let newObj = {};
          for(let [key,value] of Object.entries(obj)) {
               newObj[value] = key;
          }
          return newObj;
     }

     console.log(swappedObj(obj));
})();