/**
 * Write your challenge solution here
 */

const bulb = document.getElementById('bulb');
const button = document.getElementById('toggleButton');
const body = document.getElementById('body');
const textStatus = document.getElementById('status');


button.addEventListener('click', ()=>{
    body.classList.toggle('dark-mode');
    bulb.classList.toggle('off');
    if (textStatus.innerText==="Status: Off") {
        textStatus.innerText = "Status: On"
    }else{
        textStatus.innerText = "Status: Off"
    }
})
