function changeBgBlack() {
    document.body.style.backgroundColor = "black"
}

function changeBgWhite() {
    document.body.style.backgroundColor = "white"
}
function changeBg(color) {
    document.body.style.backgroundColor = color;
}

const themeButton = document.getElementById('theme');

themeButton.addEventListener('click', function(){
    console.log(2);
    changeBg("black");
})






function bodyStyle(color, bgColor) {
    document.body.style.color = color;
    document.body.style.backgroundColor = bgColor;
}

const changeMode = document.getElementById('themeButton');

changeMode.addEventListener('click', ()=>{
    const currentColor = document.body.style.backgroundColor;

    if(!currentColor || currentColor=="white"){
        bodyStyle("white", "black");
        changeMode.innerText= "Light Mode";
        
    }else{
        bodyStyle("black", "white");
        changeMode.innerText= "Dark Mode"
    }
})