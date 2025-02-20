let fname = 'Hitesh'
let fname2 = fname

fname2 = "Piyush"
console.log(fname2);
console.log(fname);

// string not change it's value


let p1 = {
    fname: "Chai",
}
let p2 = p1;

p2.fname = "Coffee"

console.log(p2);
console.log(p1);

// Refarance Copy = Object value change from all copy

// a variable is a memory
// all variable use STACK to exicute
// variable in STACK --> exicute --> out of scope --> garbage collector --> out of STACK


// ** For EXACT copying Object value   [SHALLOW COPY (nested object/array not exact copying)]
let a1 = {
    firstName: "Hitesh",
    lastName: "Chowdhary"
}

let a2 = {
    ...a1  //Spread Operator  ...
}
a2.firstName = "Piyush"
a2.lastName = "Garg"

console.log(a2);
console.log(a1);


// ** For DEEP copying Object value   [DEEP COPY]
let b1 = {
    name: "suman",
    address: {
        hNo: 1,
        pin: 700002
    }
}

let b1Copy = JSON.stringify(b1);
let b2 = JSON.parse(b1Copy);

b2.address.hNo = 3;
b2.address.pin = 700123;

console.log(b2);
console.log(b1);
console.log(b1Copy);
