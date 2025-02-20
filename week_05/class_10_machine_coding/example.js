
Array.prototype.suman = function (){
    console.log("This is prototype Array");
    
}

let otherArray = [1,2,3]

otherArray.suman()




Object.prototype.suman = function (){
    console.log("This is prototype Object");
    
}

let otherObject = {x:1, y:2}

otherObject.suman()
