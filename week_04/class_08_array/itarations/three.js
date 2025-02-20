function countApples(apples) {
  let total_apples = 0;
  for (let i = 1; i <= apples; i++) {
    total_apples++;
  }
  return total_apples;
}

//console.log(countApples(5));


function countBoxes(totalBars, barsPerBox) {
  let totalBox = 0;
  for (let i = 1; i <= totalBars; i = i + barsPerBox) {
    totalBox++;
  }
  return totalBox;
}
//console.log(countBoxes(50,5));

function totalWater(waterAmounts) {
  let totalAmount = 0;
  for (let i = 0; i < waterAmounts.length; i++) {
    totalAmount += waterAmounts[i];
  }
  return totalAmount;
}
//console.log(totalWater([1,2,3,4]))

function totalStars(starLevels) {
  let total = 0;
  for (let i = 0; i < starLevels.length; i++) {
    for (let j = 1; j <= i; j++) {
      total++;
    }
  }
  return total;
}

//console.log(totalStars([["*","*"],["*","*"],["*"]]))

function totalPrice(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }
  console.log(total);
}
// totalPrice([2.5,3.5])

function invertedMountain(n) {
  let h = "";
  for (let i = n; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      h = h + "*"
    }
    console.log(h)
    h = ""
  }
}
// invertedMountain(5)


function twoSide(n) {
  let stars = ""
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      stars = stars + "* "
    }
    console.log(stars)
    stars = ""

    if (i === n) {
      let btmStars = ""
      for (let k = n - 1; k > 0; k--) {
        for (let l = 0; l < k; l++) {
          btmStars = btmStars + "* "
        }
        console.log(btmStars);
        btmStars = "";
      }

    }
  }
}
//twoSide(2)


function shinyDiamondRug(n) {
  let stars = "";

  for (let i = 1; i <= n; i++) {
    // for (let j = 1; j <= n - i; j++) {
    //   stars += ' ';
    //}
    for (let k = 1; k <= (2 * i - 1); k++) {
      stars += '*'
    }
    stars += '\n'
  }

  for (let i = n - 1; i >= 1; i--) {
    // for (let j = 1; j <= n - i; j++) {
    //   stars += ' ';
    // }
    for (let k = 1; k <= (2 * i - 1); k++) {
      stars += '*';
    }
    stars += '\n'
  }
  return stars;
}

let result = shinyDiamondRug(4);
console.log(result);



function invertedMountain(n) {

  for (let i = n; i > 0; i--) {
    let mountainStars = "";
    for (let j = 1; j <= i; j++) {
      mountainStars = mountainStars + "*"
    }
    return mountainStars
  }

}
// let output = invertedMountain(4)
// console.log(output);