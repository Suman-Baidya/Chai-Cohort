// Factorial of a Number Using While Loop in JavaScript;

function factorialNo(n) {
    let ans = 1
    let i = n
    while (i>0) {
        ans = ans * i
        i--
    }
    // for (let i = n; i > 0; i--) {
    //     ans = ans * i        
    // }
    console.log(ans)
}
//factorialNo(6)

//Reverse a Number Using While Loop in JavaScript

function reverseNo(n){
    let reverrsNum = "";
    let i = (n.length) - 1;
    while (i>=0) {
        reverrsNum = reverrsNum + n[i] + ", "
        i--
    }
    console.log(reverrsNum)
}
reverseNo([3,2,1,"hello"])