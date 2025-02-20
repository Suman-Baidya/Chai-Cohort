
// Write a JavaScript program that displays the largest integer among two integers.

function largeNumber(int_1, int_2) {
    if (int_1 > int_2) {
        console.log(int_1 + " is the large number among " + int_1 + " and " + int_2);
    } else if (int_1 < int_2) {
        console.log(int_2 + " is the large number among " + int_1 + " and " + int_2);
    } else {
        console.log(int_1 = ' and ' + int_2 + " is equal ");
    }
}
//largeNumber(100, 600)


// Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
//Sample numbers : 3, -7, 2
//Output : The sign is -

function signDisplay(num1, num2, num3) {
    if (num1 > 0 && num2 > 0 && num3 > 0) {
        console.log("The sign is +");
    } else {
        console.log("The sign is -");
    }
}
//signDisplay(-2, 3, -6)


//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
//Sample numbers : 0, -1, 4
//Output : 4, 0, -1

function sortNumber(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        if (n2 > n3) {
            console.log(n1, n2, n3);
        } else {
            console.log(n1, n3, n2);
        }
    } else if (n2 > n1 && n2 > n3) {
        if (n1 > n3) {
            console.log(n2, n1, n3);
        } else {
            console.log(n2, n3, n1);
        }
    } else if (n3 > n1 && n3 > n2) {
        if (n1 > n2) {
            console.log(n3, n1, n2);
        } else {
            console.log(n3, n2, n1);
        }
    }
}
//sortNumber(-10,-1,4)


//Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
//Sample numbers : -5, -2, -6, 0, -1
//Output : 0

function largestNumber(one, two, three, four, five) {
    if (one > two && one > three && one > four && one > five) {
        console.log(one)
    } else if (two > one && two) {

    }
}
//largestNumber(-5, -2, -6, 0, -1)

for (let i = 1; i <= 10; i++) {
    let element = i;
    let sum = element + i
    //console.log(sum)
}

function distributeGifts(totalGifts, friends) {
    // write your code here
    let giftsGiven = 0;
    for (let i = 0; i < friends; i++) {
        if (totalGifts > 0) {
            giftsGiven++;
            totalGifts--;
        }
    }
    return giftsGiven
}

let show = distributeGifts(10, 5)
console.log(show);
