(function () {

     let firstObj = {
          name: 'Guy',
     }
     let seclondObj = {
          name: 'Yuval',
     }
     let thirdObj = {
          name: 'Eran',
     }

     const myMap = new Map();
     myMap.set(firstObj, 1);
     myMap.set(seclondObj, 2);
     myMap.set(thirdObj, 3);

     for (const object of myMap) {
          console.log(object);
     }

     console.log('----------');

     for(const [name, id] of myMap) {
          console.log(name,id);
     }


})();