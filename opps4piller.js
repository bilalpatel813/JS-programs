// 1.Encapsulation : hiding internal state 
class BankAccount{
    #balance = 0;
    deposit(amount){
        if(amount>0) this.#balance += amount;
    }
    get balance(){
        return this.#balance;
    }
}
const acc=new BankAccount;
acc.deposit(100);
acc.deposit(500);
console.log(acc.balance);
// 2.inheritance 
class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(".....")
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed=breed;
    }
    speak(){
        super.speak();
        console.log(this.name+" says wooofff");
    }
}
const d= new Dog("tom")
d.speak()
// 3.polymorphism 
class Cat extends Animal{
    speak(){
        console.log(this.name+" says meowwww")
    }
}
const c = new Cat("kitti")
c.speak()
// 4.abstraction 
class Shape{
    constructor(){
      if(constructor === Shape){
          throw new Error("cannot use abstract class shape")
      }
    }
    area(){
        throw new Error("cannot use abstarct method area use it by subclass")
    }
}
class Circle extends Shape{
    constructor(radius){
        super()
        this.radius = radius;
    }
    area(){
        return Math.PI * this.radius **2 ;
    }
}
const cir = new Circle(5);
console.log("radius: "+cir.area())




