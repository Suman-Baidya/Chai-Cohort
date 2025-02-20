const person = {
    x: 10,
    firstName: "Piyush",
    lastName: 'Garg',
    hobbies: ['Coding', 'Gym'],
    isMarried: false,
    getFullName: function () {
        return 'Piyush Garg'
    },
    address: {
        hno: 1,
        street: 2,
        countryCode:'IN'
    }
}

console.log(person);
console.log(person.address.countryCode);

const remote = {
    color: 'black',
    brand: 'XYZ',
    dimensions: {height: 1, width: 1},
    turnOff: function(){
        
    }
}


