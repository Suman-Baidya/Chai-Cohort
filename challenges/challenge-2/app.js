/**
 * Write your challenge solution here
 */

let heading = document.getElementById('mainHeading');

let redButton = document.getElementById('redButton');
let greenButton = document.getElementById('greenButton');
let blueButton = document.getElementById('blueButton');
let purpleButton = document.getElementById('purpleButton');
let resetButton = document.getElementById('resetButton');

redButton.addEventListener('click', ()=>{
    setColor("red");
})
greenButton.addEventListener('click', ()=>{
    setColor("green");
})
blueButton.addEventListener('click', ()=>{
    setColor("blue");
})
purpleButton.addEventListener('click', ()=>{
    setColor("purple");
})
resetButton.addEventListener('click', ()=>{
    setColor("");
})

const setColor = (color) => {
    heading.style.color = color;
}