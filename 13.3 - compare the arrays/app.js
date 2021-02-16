(function () {

    const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
        "Cucumber", "Olives"];
    const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
        "Hamburgers"];


    let compareItems = (arr1, arr2) => {
        const compareItemsArr = [];
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++){
                if(arr1[i] === arr2[j]){
                    compareItemsArr.push(arr1[i]);
                } 
            }
        }
        compareItemsArr.length === 0 ? false : console.log(compareItemsArr);
    }

    compareItems(food,food1);


})();