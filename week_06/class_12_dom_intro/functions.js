Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`);
    
}

const demo_1 = function(){
    console.log("Demo 1");    
}

demo_1.describe()
demo_1()


// ******* Different Type of Functions ******* \\

// function Declearation
function add(a, b) {
    return a+b
}

// function expression
const substract = function(a, b){
    return a-b
}

// Arrow function
const multiply = (a, b) => a*b;


// First class function
function applyOperation(a, b, operation){
    return operation(a, b)
}
const result = applyOperation(5, 4, (x,y)=> x*y);
console.log(result);



(function(){
    console.log("Imidiate Call functionr");
})()
