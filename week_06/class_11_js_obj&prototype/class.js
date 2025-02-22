
// To create same type object with different values we use "Class"
class Person{   //[this is parent object like blueprint]
    //...schema
    //new key

    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }

    fullName(){
        return `${this.fname} ${this.lname}`
    }
}

const p1 = new Person('Piyush', 'Garg');
const p2 = new Person('Akash', 'Kadlog');

console.log(p1.fullName());
console.log(p2.fullName());

