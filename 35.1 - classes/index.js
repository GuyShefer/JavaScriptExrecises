(function () {

    class Animal {
        constructor(name, sound) {
            this.name = name;
            this.sound = sound;
        }
        getName() {
            return this.name;
        }
        getSound() {
            return this.sound;
        }
        print() {
            console.log(`Name: ${this.name}, Sound: ${this.sound}.`);
        }
    }

    let dog = new Animal('Dog', 'bark');
    let car = new Animal('Car', 'meow');
    let bird = new Animal('Bird', 'tweet');


})();