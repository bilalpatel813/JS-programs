//1. Encapsulation: hide internal state

class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) this.#balance += amount;

    }
    get balance() {
        return this.#balance;
    }
}
const acc = new BankAccount(); //object creation.
acc.deposit(360);
console.log(acc.balance);

//2. Inheritance with extends and super
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak(){
        console.log(".");
    }
} 
class Dog extends Animal {
  constructor(name, breed) {
    super(name);   
    this.breed = breed;
  }
  speak() {
    super.speak();        
    console.log(`${this.name} says Woof!`);
  }
}

const dog = new Dog("PETTY", "German shephard");
dog.speak();

//3. Polymorphism
class cat extends Animal {
  speak() {
    console.log(`${this.name} says Meow!`);
  }
}
const animals = [new dog("PETTY"), new cat("Whiskers")];
animals.forEach(a => a.speak());

//4. Abstraction
class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class Shape");
    }
  }
  area() {
    throw new Error("area() must be implemented by subclass");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}
const c = new Circle(5);
console.log(c.area());