//https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php


//Q.5- Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

function oddEven() {
    for (let i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`);

        } else {
            console.log(`${i} is odd`);
        }

    }
}
//oddEven()

//Q.6- Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

// Student Name	Marks
// David	80
// Vinoth	77
// Divya	88
// Ishitha	95
// Thomas	68
// The grades are computed as follows :
// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100	A

let stdArray = [["David", 80], ["Vinoth", 77], ["Divya", 88], ["Ishitha", 95], ["Thomas", 68]]
function checkGrade() {
    let sum = 0;
    for (let i = 0; i < stdArray.length; i++) {
        sum += stdArray[i][1]
    }
    let avg = sum / stdArray.length
    console.log(avg);
}
//checkGrade()


//Q.7- Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

function msgPrint() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + " is FizzBuzz")
        } else if (i % 3 === 0) {
            console.log(i + " is Fizz")
        } else if (i % 5 === 0) {
            console.log(i + " is Buzz")
        } else {
            console.log(i)
        }
    }
}
// msgPrint()


//Q.8- According to Wikipedia a happy number is defined by the following process :
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers.

function happy_number(num) {
    var m, n;
    var c = [];

    while (num != 1 && c[num] !== true) {
        c[num] = true;
        m = 0;
        while (num > 0) {
            n = num % 10;
            m += n * n;
            num = (num - n) / 10;
        }
        num = m;
    }
    return (num == 1);
}

var cnt = 6;
var num = 2;
var f5 = '';
while (cnt-- > 0) {
    while (!happy_number(num))
        num++;
    f5 = f5 + (num + ", ");

    num++;
}
//console.log('First 5 happy numbers are : ' + f5);


function pattern(n){
    let patt = "";
    for(let i=1; i<=n; i++){
       for (let j = 1; j <= i; j++) {
        patt = patt + "* ";
        
       }
        console.log(patt);      
        patt = ""  
    }
}
//pattern(10)


function starProject(n){
    let count = "";
    for (let i = n; i > 0; i--) {
        for (let j = 1; j <= i; j++) {
            count = count + "*"
            
        }
        console.log(count);
        count = ""
    }
}
// starProject(5)


//Q.9- Write a JavaScript program to find the Armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.



// Function to find and print three-digit Armstrong numbers
function three_digit_armstrong_number() {
    for (var i = 1; i < 10; ++i) {
        for (var j = 0; j < 10; ++j) {
            for (var k = 0; k < 10; ++k) {
                // Calculate the cube of each digit and sum them
                var pow = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
                // Calculate the number formed by the digits
                var plus = i * 100 + j * 10 + k;

                // Check if the sum of cubes is equal to the number
                if (pow === plus) {
                    console.log(pow);
                }
            }
        }
    }
}

// Call the function to find three-digit Armstrong numbers
three_digit_armstrong_number(); 

