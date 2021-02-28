(function () {

    function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
        this.name = pokemonName;
        this.type = pokemonType;
        this.attackList = pokemonAttackList;
    }

    Pokemon.prototype.callPokemon = function () {
        console.log(`I choose you, ${this.name} !!!`);
    }
    Pokemon.prototype.attack = function (attackNumber) {
        console.log(`${this.name} used ${this.attackList[attackNumber]} !`);
    }

    let Pikachu = new Pokemon('Pikachu', 'Electric', ['Quick Attack', 'Tail Whip', 'Thunder Shock']);
    let Bulbasaur = new Pokemon('Bulbasaur', 'Grass', ['Razor Leaf', 'Seed Bomb', 'Solar Beam']);
    let Charmander = new Pokemon('Charmander', 'Fire', ['Ember', 'Fire Fang', 'Inferno']);

    Pikachu.callPokemon();
    Pikachu.attack(2);
    console.log('----------------------------');
    Bulbasaur.callPokemon();
    Bulbasaur.attack(1);
    console.log('----------------------------');
    Charmander.callPokemon();
    Charmander.attack(2);




})();