if (!Array.prototype.myForEAch) {
    Array.prototype.myForEAch = function(userFn){
        const originalArr = this

        for (let i = 0; i<originalArr.length; i++){
            userFn(originalArr[i], i)
        }
    }
}

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function(userFn) {
        const result = []

        for (let i = 0;i<this.length; i++){
            const value = userFn(this[i], i);
            result.push(value);
        }

        return result;
    }
}

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(userFn){
        const result = [];

        for (let i = 0; i < this.length; i++) {
            if (userFn(this[i])) {
                result.push(this[i]);
            }            
        }
        return result;
    }
}









const arr = [1,2,3,4,5,6];

// Error: .forEach function does not exist on arr variable  --> if broser does not write forEach prototype then show this Error

// Solution: Polifil


// Real Signture ko samjo - Main Functionality of forEach() => No return, function input, value & index as parameter, call my fn for every value
arr.forEach(function (value, index){
    //console.log(`Value at Index ${index} is ${value}`);    
})

arr.myForEAch(function (value, index){
    //console.log(`Value at Index ${index} is ${value}`);    
})



// Signature .map()
// Return? => New Array, Each ele iterate, userFn
const n = arr.map((e)=> e*2)
//console.log(n);

const m = arr.myMap((e) => e*3)
//console.log(m);



// Signature .filter()
// Return - new array, if user fn return true then, filter return new array after process

const o = arr.filter((e)=> e%2 ==0);
console.log(o);

const p = arr.myFilter((e)=> e%2 ==0);
console.log(p);

