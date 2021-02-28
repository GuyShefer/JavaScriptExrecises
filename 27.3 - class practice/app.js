(function () {

    class Person {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        getAge() {
            return `Age is : ${this.age}`;
        }
        updateAge(newAge) {
            this.age = newAge;
            return this.getAge();
        }
    }

    let person = new Person('Guy', 25)
    console.log(person.getAge());
    console.log(person.updateAge(28));

})();