/**
 * Write your challenge solution here
 */

let nameInput = document.getElementById('nameInput');
const jobInput = document.getElementById('jobInput');
const ageInput = document.getElementById('ageInput');
const bioInput = document.getElementById('bioInput');

let nameDisplay = document.getElementById('nameDisplay');
let jobDisplay = document.getElementById('jobDisplay');
let ageDisplay = document.getElementById('ageDisplay');
let bioDisplay = document.getElementById('bioDisplay');


nameInput.addEventListener('input', function(){
    let value = this.value;

    nameDisplay.innerText = value;
})

jobInput.addEventListener('input', function(){
    let value = this.value;

    jobDisplay.innerText = value;
})

ageInput.addEventListener('input', function(){
    let value = this.value;

    ageDisplay.innerText = value;
})

bioInput.addEventListener('input', function(){
    let value = this.value;

    bioDisplay.innerText = value;
})