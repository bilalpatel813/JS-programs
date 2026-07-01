//xscope 
let globalvar = "global var";
function outer(){
    let outervar =  "inside outer func";
    function inner(){
        let innervar = "inside inner func";
        console.log(globalvar);
        console.log(outervar);
        console.log(innervar);
    }
    inner();
}
outer();
//closures: remembers it's outer scope example : count 
function MakeCounter(){
    let count = 0;
    return function() {
        count++;
        return count
    }
}   
Counter = MakeCounter()
Counter()
Counter()
Counter()
console.log(Counter()) 
//example program:
function bank() {
    let balance = 0;
    return {
        deposit(amount){balance+=amount}, 
        withdraw(amount){balance-=amount}, 
        getbalance(){return balance} 
    }
}
const acc = bank()
console.log("total balance :"+acc.getbalance());

acc.deposit(300);
console.log("total balance :"+acc.getbalance());

acc.withdraw(100)
console.log("total balance :"+acc.getbalance());

