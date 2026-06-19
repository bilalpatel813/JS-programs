# 🟨 JavaScript Complete Developer Guide

> A comprehensive reference covering every core concept a JavaScript developer needs to know — from variables to design patterns.

---

## 📋 Table of Contents

1. [Variables](#1-variables)
2. [Data Types](#2-data-types)
3. [Operators](#3-operators)
4. [Conditions](#4-conditions)
5. [Loops](#5-loops)
6. [Functions](#6-functions)
7. [Arrays](#7-arrays)
8. [Objects](#8-objects)
9. [Classes](#9-classes)
10. [Constructors & `this`](#10-constructors--this)
11. [OOP — 4 Pillars](#11-oop--4-pillars)
12. [Scope & Closures](#12-scope--closures)
13. [Destructuring, Spread & Rest](#13-destructuring-spread--rest)
14. [Higher-Order Functions & Array Methods](#14-higher-order-functions--array-methods)
15. [Promises & Async/Await](#15-promises--asyncawait)
16. [Error Handling](#16-error-handling)
17. [DOM Manipulation & Events](#17-dom-manipulation--events)
18. [Fetch API / HTTP Requests](#18-fetch-api--http-requests)
19. [Modules (import/export)](#19-modules-importexport)
20. [Node.js, npm & Design Patterns](#20-nodejs-npm--design-patterns)

---

## 1. Variables

A **variable** is a named container that stores a value.

```javascript
// var — old way, function-scoped, avoid in modern JS
var oldStyle = "avoid me";

// let — block-scoped, reassignable
let age = 25;
age = 26; // OK

// const — block-scoped, cannot be reassigned
const name = "Alice";
// name = "Bob"; // ❌ Error

// const with objects/arrays — the binding is fixed, but contents CAN change
const user = { name: "Alice" };
user.name = "Bob"; // ✅ allowed — mutating the object, not reassigning
```

> **Key rule:** Always prefer `const` by default, use `let` when reassignment is needed, and avoid `var`.

### Hoisting

```javascript
console.log(x); // undefined (hoisted, not yet assigned)
var x = 5;

console.log(y); // ❌ ReferenceError (in the "temporal dead zone")
let y = 5;
```

---

## 2. Data Types

### Primitive Types

```javascript
let num       = 42;            // number
let big       = 9007199254740991n; // bigint
let str       = "hello";       // string
let bool      = true;          // boolean
let nothing   = undefined;     // undefined (declared, not assigned)
let empty     = null;          // null (intentional absence of value)
let sym       = Symbol("id");  // symbol (unique identifier)
```

### Reference Types

```javascript
let obj   = { name: "Alice" };       // object
let arr   = [1, 2, 3];               // array (special object)
let func  = function () {};          // function (callable object)
let date  = new Date();              // built-in object
```

### typeof Operator

```javascript
typeof 42;          // "number"
typeof "hi";         // "string"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof null;         // "object" (famous JS quirk!)
typeof {};           // "object"
typeof [];           // "object" (arrays are objects)
typeof function(){}; // "function"
```

### Type Conversion

```javascript
// Implicit (coercion)
"5" + 3;       // "53" (string concatenation)
"5" - 3;       // 2 (numeric subtraction)
"5" * "2";     // 10

// Explicit
Number("42");       // 42
String(42);          // "42"
Boolean(0);          // false
Boolean("");         // false
Boolean("hello");    // true

parseInt("42px");    // 42
parseFloat("3.14m"); // 3.14
```

### Equality: == vs ===

```javascript
0 == "0";    // true  (coerces types — avoid!)
0 === "0";   // false (strict — checks type AND value)

null == undefined;   // true
null === undefined;  // false

// Always prefer === and !== in modern JS
```

---

## 3. Operators

### Arithmetic

```javascript
let a = 10, b = 3;
a + b;   // 13
a - b;   // 7
a * b;   // 30
a / b;   // 3.333...
a % b;   // 1   (remainder)
a ** b;  // 1000 (exponent: 10^3)
```

### Comparison

```javascript
a == b    // loose equality
a === b   // strict equality
a != b    // loose inequality
a !== b   // strict inequality
a > b   a < b   a >= b   a <= b
```

### Logical

```javascript
true && false;  // AND  → false
true || false;  // OR   → true
!true;          // NOT  → false

// Short-circuit evaluation
let result = user || "Guest";   // fallback if user is falsy
user && user.login();           // call login only if user exists
```

### Assignment Shortcuts

```javascript
let n = 10;
n += 5;  n -= 3;  n *= 2;  n /= 4;  n **= 2;
n++;     // post-increment
++n;     // pre-increment
```

### Nullish Coalescing & Optional Chaining (ES2020)

```javascript
let value = null;
let result = value ?? "default";   // "default" (only null/undefined trigger fallback)

let obj = { profile: { name: "Alice" } };
let city = obj.profile?.address?.city;  // undefined, no error if a link is missing

obj.greet?.();   // call method only if it exists
```

---

## 4. Conditions

### if / else if / else

```javascript
let score = 75;

if (score >= 90) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");   // ← prints this
} else {
  console.log("F");
}
```

### switch Statement

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("End of week");
    break;
  default:
    console.log("Midweek");
}
```

### Ternary Operator

```javascript
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
```

### Truthy & Falsy Values

```javascript
// Falsy: false, 0, "", null, undefined, NaN
// Everything else is truthy (including "0", [], {})

if ([]) console.log("arrays are truthy!");  // prints
if (0)  console.log("never runs");
```

---

## 5. Loops

### for Loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
```

### while & do-while

```javascript
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

let n = 0;
do {
  console.log(n);
  n++;
} while (n < 3);
```

### for...of — iterate over values (arrays, strings, Maps, Sets)

```javascript
const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

### for...in — iterate over object keys

```javascript
const person = { name: "Alice", age: 30 };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

### Loop Control

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;  // skip 3
  if (i === 7) break;     // stop at 7
  console.log(i);
}
```

---

## 6. Functions

```javascript
// Function declaration — hoisted (can be called before definition)
function add(a, b) {
  return a + b;
}

// Function expression — not hoisted
const subtract = function (a, b) {
  return a - b;
};

// Arrow function (ES6) — concise, no own `this`
const multiply = (a, b) => a * b;
const square = n => n * n;          // single param, no parens needed
const greet = () => console.log("Hi"); // no params

// Default parameters
function greetUser(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

// Rest parameters — gather remaining args into an array
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3, 4); // 10

// Calling
add(3, 4);        // 7
multiply(2, 5);   // 10
```

### Callback Functions

```javascript
function processData(data, callback) {
  const result = data.toUpperCase();
  callback(result);
}

processData("hello", (output) => console.log(output)); // HELLO
```

### Immediately Invoked Function Expression (IIFE)

```javascript
(function () {
  console.log("Runs immediately!");
})();
```

---

## 7. Arrays

```javascript
// Creation
const nums = [1, 2, 3, 4, 5];
const mixed = [1, "two", true, null];
const empty = new Array(5);   // 5 empty slots

// Access & modify
nums[0];        // 1
nums[0] = 99;   // modify
nums.length;    // 5

// Adding/removing
nums.push(6);          // add to end
nums.pop();             // remove from end
nums.unshift(0);        // add to start
nums.shift();           // remove from start
nums.splice(1, 2);      // remove 2 items starting at index 1
nums.splice(1, 0, 'a'); // insert 'a' at index 1

// Searching
nums.indexOf(3);              // find index
nums.includes(3);             // true/false
nums.find(n => n > 3);        // first match
nums.findIndex(n => n > 3);   // index of first match

// Combining & slicing
nums.slice(1, 3);    // extract portion (non-mutating)
nums.concat([6, 7]); // join arrays
nums.join(", ");     // "1, 2, 3" (array → string)

// Sorting
nums.sort((a, b) => a - b);   // ascending
nums.reverse();                // reverse order
```

### 2D / Nested Arrays

```javascript
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
grid[1][2]; // 6
```

---

## 8. Objects

```javascript
// Object literal
const person = {
  name: "Alice",
  age: 30,
  greet() {                 // method shorthand
    console.log(`Hi, I'm ${this.name}`);
  },
};

// Access
person.name;          // dot notation
person["age"];         // bracket notation (useful for dynamic keys)
person.greet();        // Hi, I'm Alice

// Add / modify / delete
person.email = "alice@mail.com";  // add
person.age = 31;                  // modify
delete person.email;              // delete

// Checking existence
"name" in person;             // true
person.hasOwnProperty("age"); // true

// Object methods
Object.keys(person);     // ["name", "age", "greet"]
Object.values(person);   // ["Alice", 31, function]
Object.entries(person);  // [["name","Alice"], ["age",31], ...]

// Object.freeze — make immutable
const frozen = Object.freeze({ x: 1 });
frozen.x = 2; // silently fails (or throws in strict mode)

// Shallow copy / merge
const copy   = { ...person };
const merged = { ...person, city: "NYC" };
```

### Computed Property Names

```javascript
const key = "score";
const data = { [key]: 100 }; // { score: 100 }
```

---

## 9. Classes

ES6 classes are syntactic sugar over JavaScript's prototype-based inheritance.

```javascript
class Car {
  // Fields
  #mileage = 0;   // private field (ES2022, # prefix)

  constructor(brand, year) {
    this.brand = brand;
    this.year  = year;
  }

  // Instance method
  start() {
    console.log(`${this.brand} is starting...`);
  }

  drive(km) {
    this.#mileage += km;  // accessible only inside the class
  }

  getMileage() {
    return this.#mileage;
  }

  // Getter / Setter
  get displayName() {
    return `${this.year} ${this.brand}`;
  }
  set displayName(value) {
    [this.year, this.brand] = value.split(" ");
  }

  // Static method — called on the class, not an instance
  static compare(carA, carB) {
    return carA.year - carB.year;
  }
}

const myCar = new Car("Toyota", 2022);
myCar.start();             // Toyota is starting...
myCar.drive(150);
console.log(myCar.getMileage()); // 150
console.log(myCar.displayName);  // 2022 Toyota
```

---

## 10. Constructors & `this`

The `constructor` method runs automatically when a class is instantiated with `new`.

```javascript
class Person {
  constructor(name, age = 18) {
    this.name = name;
    this.age  = age;
  }
}

const p1 = new Person("Alice", 30);
const p2 = new Person("Bob");      // age defaults to 18
```

### Understanding `this`

`this` refers to the object that is currently calling the function — its value depends on **how** a function is called.

```javascript
const obj = {
  name: "Alice",
  regularFn: function () {
    console.log(this.name);   // "Alice" — this = obj (caller)
  },
  arrowFn: () => {
    console.log(this.name);   // undefined — arrow fns inherit `this` from enclosing scope
  },
};

obj.regularFn(); // "Alice"
obj.arrowFn();   // undefined (or global `this`)

// Controlling this explicitly
function greet() {
  console.log(`Hi, ${this.name}`);
}
const user = { name: "Bob" };

greet.call(user);              // "Hi, Bob" — call with `this` set immediately
greet.apply(user);             // same as call, but args passed as array
const bound = greet.bind(user); // returns a new function with `this` locked
bound();                        // "Hi, Bob"
```

---

## 11. OOP — 4 Pillars

---

### 1. Encapsulation — hide internal state, expose controlled access

```javascript
class BankAccount {
  #balance = 0;   // private field — inaccessible from outside

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  get balance() {   // controlled read-only access
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.balance); // 100
// acc.#balance;           // ❌ SyntaxError — truly private
```

---

### 2. Inheritance — `extends` and `super`

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log("...");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);          // call parent constructor
    this.breed = breed;
  }
  speak() {
    super.speak();        // call parent method
    console.log(`${this.name} says Woof!`);
  }
}

const dog = new Dog("Rex", "Labrador");
dog.speak(); // ... \n Rex says Woof!
```

---

### 3. Polymorphism — same method name, different behavior

```javascript
class Cat extends Animal {
  speak() {
    console.log(`${this.name} says Meow!`);
  }
}

const animals = [new Dog("Rex"), new Cat("Whiskers")];
animals.forEach(a => a.speak());  // each calls its own override
```

---

### 4. Abstraction — expose only what's necessary

JavaScript has no native `abstract` keyword, so it's enforced by convention or throwing errors:

```javascript
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
console.log(c.area()); // 78.54...
// new Shape();         // ❌ throws
```

---

## 12. Scope & Closures

### Scope

```javascript
let globalVar = "I'm global";

function outer() {
  let outerVar = "I'm in outer";

  function inner() {
    let innerVar = "I'm in inner";
    console.log(globalVar); // accessible
    console.log(outerVar);  // accessible
    console.log(innerVar);  // accessible
  }
  inner();
  // console.log(innerVar); // ❌ not accessible here
}
```

### Closures — a function that "remembers" its outer scope

```javascript
function makeCounter() {
  let count = 0;            // private variable, kept alive by closure
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
counter(); // 3
// `count` is not directly accessible — only through the returned function
```

### Practical Use: Private State / Module Pattern

```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) { balance += amount; },
    withdraw(amount) { balance -= amount; },
    getBalance() { return balance; },
  };
}

const account = createBankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // 150
```

---

## 13. Destructuring, Spread & Rest

### Array Destructuring

```javascript
const [a, b, c] = [1, 2, 3];
const [first, , third] = [1, 2, 3];      // skip elements
const [x, ...rest] = [1, 2, 3, 4];       // x=1, rest=[2,3,4]

// Swap variables
let p = 1, q = 2;
[p, q] = [q, p];
```

### Object Destructuring

```javascript
const { name, age } = { name: "Alice", age: 30 };
const { name: fullName } = { name: "Alice" };    // rename
const { city = "Unknown" } = { name: "Alice" };  // default value

function printUser({ name, age }) {   // destructure in parameters
  console.log(`${name}, ${age}`);
}
```

### Spread Operator (`...`)

```javascript
// Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];     // [1,2,3,4,5]
const copy = [...arr1];           // shallow copy

// Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };  // { a:1, b:2, c:3 }

// Function calls
function add3(a, b, c) { return a + b + c; }
add3(...[1, 2, 3]); // 6
```

### Rest Operator (`...`)

```javascript
function sum(...nums) {           // gathers args into array
  return nums.reduce((a, b) => a + b, 0);
}

const { a, ...others } = { a: 1, b: 2, c: 3 }; // others = {b:2, c:3}
```

---

## 14. Higher-Order Functions & Array Methods

A **higher-order function** takes a function as an argument or returns one.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map — transform each element
const doubled = numbers.map(n => n * 2);

// filter — keep elements matching a condition
const evens = numbers.filter(n => n % 2 === 0);

// reduce — combine into a single value
const total = numbers.reduce((sum, n) => sum + n, 0);
const max   = numbers.reduce((a, b) => Math.max(a, b));

// forEach — run a side effect for each (no return value)
numbers.forEach(n => console.log(n));

// some / every
numbers.some(n => n > 9);   // true — at least one matches
numbers.every(n => n > 0);  // true — all match

// Chaining
const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 10)
  .reduce((sum, n) => sum + n, 0);
```

### Function Composition

```javascript
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const double = n => n * 2;
const addOne = n => n + 1;

const transform = pipe(double, addOne);
transform(5); // (5*2)+1 = 11
```

---

## 15. Promises & Async/Await

### Promises — handle async operations

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) resolve("Data loaded!");
      else reject("Error loading data");
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .finally(() => console.log("Done"));
```

### Promise.all / Promise.race

```javascript
const p1 = fetchData();
const p2 = fetchData();

// Wait for ALL to complete
Promise.all([p1, p2]).then(([r1, r2]) => console.log(r1, r2));

// Resolve as soon as the FIRST completes
Promise.race([p1, p2]).then(result => console.log(result));

// Wait for all, but don't fail on rejection
Promise.allSettled([p1, p2]).then(results => console.log(results));
```

### async/await — cleaner syntax over Promises

```javascript
async function loadData() {
  try {
    const data = await fetchData();   // pauses until promise resolves
    console.log(data);
  } catch (err) {
    console.error("Failed:", err);
  } finally {
    console.log("Done");
  }
}

loadData();

// Running multiple async operations concurrently
async function loadAll() {
  const [a, b] = await Promise.all([fetchData(), fetchData()]);
}
```

---

## 16. Error Handling

```javascript
try {
  const result = 10 / 0;          // Infinity (no error in JS)
  JSON.parse("{invalid}");        // throws SyntaxError
} catch (error) {
  console.log(error.name);        // "SyntaxError"
  console.log(error.message);     // description
} finally {
  console.log("Always runs");
}
```

### Throwing Errors

```javascript
function setAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  return age;
}

try {
  setAge(-5);
} catch (e) {
  console.log(e.message); // "Age cannot be negative"
}
```

### Custom Errors

```javascript
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

try {
  throw new ValidationError("Invalid email", "email");
} catch (e) {
  if (e instanceof ValidationError) {
    console.log(`${e.field}: ${e.message}`);
  }
}
```

### Common Built-in Errors

| Error              | Cause                                 |
|---------------------|----------------------------------------|
| `TypeError`         | Wrong type used (e.g., calling a non-function) |
| `ReferenceError`    | Using an undeclared variable          |
| `SyntaxError`       | Invalid code syntax                    |
| `RangeError`        | Number out of allowed range            |

---

## 17. DOM Manipulation & Events

### Selecting Elements

```javascript
document.getElementById("myId");
document.querySelector(".myClass");        // first match
document.querySelectorAll("p");            // all matches (NodeList)
document.getElementsByTagName("div");
```

### Modifying Elements

```javascript
const el = document.querySelector("#title");

el.textContent = "New Title";    // plain text
el.innerHTML = "<b>Bold</b>";    // parsed HTML

el.style.color = "blue";
el.classList.add("active");
el.classList.remove("hidden");
el.classList.toggle("dark-mode");

el.setAttribute("data-id", "123");
el.getAttribute("data-id");
```

### Creating & Removing Elements

```javascript
const newDiv = document.createElement("div");
newDiv.textContent = "Hello!";
document.body.appendChild(newDiv);

newDiv.remove();             // remove from DOM
```

### Events

```javascript
const button = document.querySelector("#myButton");

button.addEventListener("click", (event) => {
  console.log("Button clicked!", event.target);
});

button.addEventListener("click", handler);
button.removeEventListener("click", handler);

// Event delegation — handle events on dynamically added children
document.querySelector("#list").addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    console.log("List item clicked:", e.target.textContent);
  }
});

// Common events: click, input, submit, keydown, mouseover, load, change
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();   // stop default form submission
  console.log("Form submitted");
});
```

---

## 18. Fetch API / HTTP Requests

```javascript
// GET request
async function getUsers() {
  const response = await fetch("https://api.example.com/users");

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

// POST request
async function createUser(user) {
  const response = await fetch("https://api.example.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
}

// Using .then() chains (alternative to async/await)
fetch("https://api.example.com/users")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### JSON

```javascript
const obj = { name: "Alice", age: 30 };

const jsonString = JSON.stringify(obj);     // '{"name":"Alice","age":30}'
const parsedObj  = JSON.parse(jsonString);  // back to object

JSON.stringify(obj, null, 2);  // pretty-printed with 2-space indent
```

---

## 19. Modules (import/export)

### Named Exports

```javascript
// math.js
export function add(a, b) { return a + b; }
export const PI = 3.14159;

// main.js
import { add, PI } from "./math.js";
console.log(add(2, 3));  // 5
```

### Default Export

```javascript
// user.js
export default class User {
  constructor(name) { this.name = name; }
}

// main.js
import User from "./user.js";
const u = new User("Alice");
```

### Mixed & Renamed Imports

```javascript
import User, { validate } from "./user.js";
import { add as sum } from "./math.js";   // rename on import
import * as MathUtils from "./math.js";   // import everything as namespace
```

---

## 20. Node.js, npm & Design Patterns

### Node.js Basics

```javascript
// CommonJS module system (classic Node.js)
const fs = require("fs");
module.exports = { add, subtract };

// Reading a file
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Async version
const fsPromises = require("fs/promises");
async function readData() {
  const data = await fsPromises.readFile("data.txt", "utf8");
  console.log(data);
}

// Simple HTTP server
const http = require("http");
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
}).listen(3000);
```

### npm (Node Package Manager)

```bash
npm init -y                  # create package.json
npm install express          # install a dependency
npm install -D nodemon       # install a dev dependency
npm uninstall express        # remove a package
npm run start                # run a script defined in package.json
npx create-react-app myapp   # run a package without installing globally
```

### Express.js — minimal web server

```javascript
const express = require("express");
const app = express();

app.use(express.json());   // parse JSON request bodies

app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Alice" }]);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  res.status(201).json(newUser);
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

### Design Patterns in JavaScript

**Singleton**

```javascript
class Config {
  static #instance;
  constructor() { this.settings = {}; }
  static getInstance() {
    if (!Config.#instance) Config.#instance = new Config();
    return Config.#instance;
  }
}
const config1 = Config.getInstance();
const config2 = Config.getInstance();
console.log(config1 === config2); // true
```

**Factory**

```javascript
function createShape(type) {
  switch (type) {
    case "circle": return { type, area: r => Math.PI * r ** 2 };
    case "square": return { type, area: s => s * s };
    default: throw new Error("Unknown shape");
  }
}
const circle = createShape("circle");
```

**Observer (Pub/Sub)**

```javascript
class EventEmitter {
  #listeners = {};

  on(event, callback) {
    (this.#listeners[event] ??= []).push(callback);
  }

  emit(event, data) {
    this.#listeners[event]?.forEach(cb => cb(data));
  }
}

const emitter = new EventEmitter();
emitter.on("userLoggedIn", (user) => console.log(`${user} logged in`));
emitter.emit("userLoggedIn", "Alice"); // "Alice logged in"
```

**Module Pattern**

```javascript
const Counter = (function () {
  let count = 0;   // private
  return {
    increment: () => ++count,
    reset: () => (count = 0),
    getCount: () => count,
  };
})();

Counter.increment(); // 1
Counter.increment(); // 2
```

---

## Quick Reference Card

| Concept           | Key Syntax                                          |
|-------------------|------------------------------------------------------|
| Variable          | `let`, `const`, `var`                                |
| Null safety       | `?.`, `??`, `??=`                                    |
| Loop              | `for`, `for...of`, `for...in`, `while`              |
| Function          | `function`, `=>`, default/rest params               |
| OOP               | `class`, `extends`, `super`, `#private`             |
| Closures          | function returning function with retained scope     |
| Destructuring     | `const { a, b } = obj`, `const [x, y] = arr`        |
| Array methods     | `.map()`, `.filter()`, `.reduce()`, `.forEach()`     |
| Async             | `Promise`, `async`, `await`, `.then()`              |
| Error handling    | `try`, `catch`, `finally`, `throw`                   |
| DOM               | `querySelector`, `addEventListener`                  |
| HTTP              | `fetch()`, `JSON.stringify/parse`                    |
| Modules           | `import`, `export`, `export default`                 |
| Node.js           | `require`, `module.exports`, `npm`                   |

---

*Happy coding! 🟨*