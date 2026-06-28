class student {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    greet() {
        console.log("Hello " + this.name);
    }
}
class Car {

    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(this.brand + " started.");
    }

}

const s1 = new student("Adnan", 19, "Mumbai");
const s2 = new student("Bilal", 18, "Mumbai");

console.log(s1);
s1.greet();

const car1 = new Car("Toyota", "Fortuner", 2024);
const car2 = new Car("Honda", "City", 2023);