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
//closures
function MakeCounter(){
    
}   