(function () {

     const candyStore = {
          candies: [
               {
                    name: "mint gum",
                    id: "as12f",
                    price: 2,
                    amount: 2
               },
               {
                    name: "twix",
                    id: "5hd7y",
                    price: 5,
                    amount: 4
               },
          ],
          cashRegister: 200,

     }

     function getCandy(candyStore, id) {
          for (let i = 0; i < candyStore.candies.length; i++) {
               if (candyStore.candies[i].id === id) {
                    return candyStore.candies[i];
               }
          }
     }

     console.log(getCandy(candyStore, '5hd7y')); // 1

     function getPrice(candyStore, id) {
          for (let i = 0; i < candyStore.candies.length; i++) {
               if (candyStore.candies[i].id === id) {
                    return candyStore.candies[i].price;
               }
          }
     }

     console.log(getPrice(candyStore, '5hd7y')); //2


     function addCandy(candyStore, id, name, price, amount = 1) {
          let newCandy = {
               name,
               id,
               price,
               amount,
          }
          candyStore.candies.push(newCandy);
     }

     addCandy(candyStore, '1ku2h3', 'tobleron', 8); //3
     console.log(candyStore.candies);

     function buy(candyStore, id) {
          for (let i = 0; i < candyStore.candies.length; i++) {
               if (candyStore.candies[i].id === id) {
                    candyStore.candies[i].amount--;
                    candyStore.cashRegister += candyStore.candies[i].price;
               }
          }
     }

     buy(candyStore, '5hd7y'); //4
     console.log(candyStore);

})();