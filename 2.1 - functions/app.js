(function () {


    function describeCountry(country, population, capitalCity){
        return `${country} has ${population} million people and its capital city is ${capitalCity}`;
    }

    console.log(describeCountry("Israel", 8 , "Jerusalem"));
    console.log(describeCountry("Usa", 45 , "Washington"));
    console.log(describeCountry("Nederland", 17 , "Amsterdam"));

})();