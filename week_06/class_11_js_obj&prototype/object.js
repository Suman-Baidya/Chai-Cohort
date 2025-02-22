// Normal Object
const obj1 = {
    // property
    // Methods/functions
    fname: "Piyush",
    laname: "Garg",
    fullName: function(){
        if (this.laname !== undefined) return `${this.fname} ${this.laname}`;
        return this.fname;
    }
}

const obj2 = {
    fname: "Anirudh",
    laname: "Jwala",
    fullName: function(){
        if (this.laname !== undefined) return `${this.fname} ${this.laname}`;
        return this.fname;
    }
}

// DRY - Do not Repeat Yourself

console.log(obj1.fullName());
console.log(obj2.fullName());





