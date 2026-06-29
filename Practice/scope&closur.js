// Scope
let globalVar ="I'm global";
function outer() {
    let outerVar = "I'm in outer";
    function inner() {
        let innerVar = "I'm in inner";
        console.log(globalVar);
        console.log(outerVar);
        console.log(innerVar);
    }
    inner();
}

// Closure
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
counter();
counter();

//Example of Private state/ module pattern
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
console.log(account.getBalance());