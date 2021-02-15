(function () {

     const data = [
          {
               name: "John",
               birthday: "1-1-1995",
               favoriteFoods: {
                    meats: ["hamburgers", "sausages"],
                    fish: ["salmon", "pike"],
               },
          },
          {
               name: "Mark",
               birthday: "10-5-1980",
               favoriteFoods: {
                    meats: ["hamburgers", "steak", "lamb"],
                    fish: ["tuna", "salmon", "barracuda"],
               },
          },
          {
               name: "Mary",
               birthday: "1-10-1977",
               favoriteFoods: {
                    meats: ["ham", "chicken"],
                    fish: ["pike"],
               },
          },
          {
               name: "Thomas",
               birthday: "1-10-1990",
               favoriteFoods: {
                    meats: ["bird", "rooster"],
                    fish: ["salmon"],
               },
          },
          {
               name: "Mary",
               birthday: "1-10-1977",
               favoriteFoods: {
                    meats: ["hamburgers", "lamb"],
                    fish: ["anchovies", "tuna"],
               },
          },
     ];

     console.log("-----------------")// 1 :

     let returnNames = arr => {
          return arr.map(value => {
               return value.name;
          })
     }
     console.log(returnNames(data));

     console.log("-----------------")// 2 :

     let bornBefore1990 = arr => {
          return arr.filter(value => {
               if (Number(value.birthday.split('-')[2]) < 1990) {
                    return value;
               }
          })
     }
     console.log(bornBefore1990(data))

     console.log("-----------------")// 3:

     let differentFoods = arr => {
          let diffFood = {};
          arr.map(element => {
               ((Object.values(element.favoriteFoods).join()).split(',')).filter(value => {
                    diffFood.hasOwnProperty(value) ? diffFood[value] += 1 : diffFood[value] = 1;
               })
          })
          return diffFood;
     }

     console.log(differentFoods(data))

     console.log("-----------------")
})();