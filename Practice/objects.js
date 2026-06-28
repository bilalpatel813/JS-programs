// Object literal
const person = {
    name: "Addy",
    age: 19,
    city: "Mumbai",
    greet(){
        console.log(`Hi, ${this.name}`);
    },
}
// Access
person.name;
person.age;
console.log(person["city"]);
person.greet();

person.email = "adnc@gmail.com";
person.age = 20;
delete person.greet();

// Object Methods
Object.keys(person);     
Object.values(person);   
Object.entries(person);  