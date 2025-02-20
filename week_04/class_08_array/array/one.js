
const array1 = [5, 12, 8, 130, 44];
//console.log(array1.at(2))

const words = ['spray', 'elite21', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
//console.log(result);


const array2 = ['a', 'b', 'c', 12, [2,3]];
//array2[4].forEach((element) => console.log(typeof(element)));

const array3 = [15,1, 2, 3, 4, 5,50];
let preValue = 0
let result2 = array3.reduce((a,b)=>b+preValue)
//console.log(result2);

array4 =[1,2,-3,0]

//console.log(array4.toReversed())


function filterHealthy(foodList) {
    // Remove unhealthy food and return updated list
    let indexNo = foodList.indexOf("Burger");
    let newList = foodList.splice(indexNo,1);   
    console.log(foodList);
    
}

let array5 = ["hello", "Burger", 10]
filterHealthy(array5)
