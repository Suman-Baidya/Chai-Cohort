
let getIndicate = (userValue) => {
    document.getElementById("indicator").value = userValue;
}

let getValue = (value) => {
    let indicate = document.getElementById("indicator").value;

    if (indicate == "") {
        document.getElementById("first-no").value += value;
    } else {
        document.getElementById("second-no").value += value;
    }
}

function result() {
    let firstNo = document.getElementById("first-no").value;
    let secondtNo = document.getElementById("second-no").value;
    let indicator = document.getElementById("indicator").value;

    let num1 = Number(firstNo);
    let num2 = Number(secondtNo);

    let result = 0;

    if (indicator === "+") {
        result = num1 + num2
    } else if (indicator === "-") {
        result = num1 - num2
    } else if (indicator === "x") {
        result = num1 * num2
    } else if (indicator === "/") {
        result = num1 / num2
    } else {
        result = 0;
    }

    document.getElementById("answer").value = result;
}

let allClear = () => {
    document.getElementById("indicator").value = "";
    document.getElementById("first-no").value = "";
    document.getElementById("second-no").value = "";
    document.getElementById("answer").value = "";
}



// document.getElementById("indicator").value = indicator;
// document.getElementById("first-no").value = num1;
// document.getElementById("second-no").value = num2;
// document.getElementById("answer").value = result;