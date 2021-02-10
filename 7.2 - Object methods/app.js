(function () {

     let mycountry = {
          country: "Israel",
          capital: "Jerusalem",
          language: "Hebrew",
          population: 8,
          neighbours: ['Lebanon', 'Syria', 'Jordan', 'Egypt'],

          describe: function () {
               console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they
               have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
          },

          checkIsland: function () {
               mycountry.isIsland = false;
               this.neighbours.length > 0 ? this.isIsland = true : this.isIsland = false;
          },
     }

     mycountry.describe();
     mycountry.checkIsland();
     console.log(mycountry.isIsland);

})();