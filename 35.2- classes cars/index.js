(function () {

    class Car {
        constructor(brand, speed) {
            this.brand = brand;
            this.speed = speed;
        }

        getBrand() {
            return this.brand;
        }

        getSpeed() {
            return this.speed;
        }

        print() {
            console.log(`Car brand: ${this.brand}, Car speed ${this.speed}`);
        }

        setSpeed(newSpeed) {
            this.speed = newSpeed;
        }

    }

    const cars = [];

    cars.push(new Car('Mazda', 80));
    cars.push(new Car('BMW', 120));
    cars.push(new Car('Ferrari', 160));
    cars.push(new Car('Tesla', 130));

    const fastet = cars.reduce((max, value) => {
        return value.getSpeed() > max.getSpeed() ? value : max;
    });
    console.log(fastet);


    const sortCars = (arr) => {
        return arr.sort((a,b) => a.getSpeed() - b.getSpeed());
    }

    console.log(sortCars(cars));







})();