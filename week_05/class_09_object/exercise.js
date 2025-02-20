// Creating an object representing a type of tea  with properites for name, type, and caffeine content.
const teas = {
    teaName: "Lemon Tea",
    type: "Green",
    caffiene: "low"
}

// Access and print the name and type properties of the tea object.
console.log(teas.teaName);
console.log(teas["type"]);

// Add a new property origin to the tea object
teas.origin = "Assam";

// Change the caffeine level of the tea object to "Medium".
teas.caffiene = "Medium"

// Remove the type property from the tea object.
delete teas.type

// Check if the object has a property origin.
console.log("origin" in teas);

// Use a for...in loop to print all properties of the tea object.
for(let key in teas){
    console.log(key + ": " + teas[key]);    
}

// Create a nested object representing different type of theas and their properites.
const myTeas = {
    greentea: {
        name: "Green Tea"
    },
    blackTea: {
        name: "Black Tea"
    }
}

// Create a copy of the tea object.
const teaCopy = { ...myTeas }

// Add a custom method describe to the tea object that returns a description string.
const stringTea = JSON.stringify(teaCopy)

// Merge two objects representing different teas into one.
console.log(stringTea);
