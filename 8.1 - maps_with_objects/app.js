(function () {

     let firstObj = { name: 'Guy', age: 25 }
     let seclondObj = { name: 'Yuval', age: 25 }
     let thirdObj = { name: 'Eran', age: 25 }

     const myMap = new Map();
     // myMap.set(key,value);
     // myMap.has();
     // myMap.size();
     // myMap.delete();

     myMap.set(1, firstObj);
     myMap.set(2, seclondObj);
     myMap.set(3, thirdObj);

     for (const element of myMap) {
          console.log(element);
     }

     console.log('----------');

     console.log(myMap.get(thirdObj));

     for (const [name, id] of myMap) {
          console.log(name, id);
     }

     // myMap.forEach(i => console.log(i));

})();