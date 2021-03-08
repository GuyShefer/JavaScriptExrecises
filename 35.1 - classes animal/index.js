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
    let cat = new Animal('Cat', 'meow');
    let bird = new Animal('Bird', 'tweet');

    console.log(dog.getName());
    console.log(dog.getSound());
    dog.print();

    console.log(cat.getName());
    console.log(cat.getSound());
    cat.print();

    console.log(bird.getName());
    console.log(bird.getSound());
    bird.print();


})();