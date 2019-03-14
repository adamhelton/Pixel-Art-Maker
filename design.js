// variable declarations
const pixelCanvas = document.getElementById("pixelCanvas");
let inputHeight = document.getElementById("inputHeight");
let inputWidth = document.getElementById("inputWeight");
const sizePicker = document.getElementById("sizePicker");
const color = document.getElementById("colorPicker");


//function to call when user submits height and width of Grid
// variable declarations
const pixelCanvas = document.getElementById("pixelCanvas");
let inputHeight = document.getElementById("inputHeight");
let inputWidth = document.getElementById("inputWeight");
const sizePicker = document.getElementById("sizePicker");
const color = document.getElementById("colorPicker");


//function to call when user submits height and width of Grid
sizePicker.onsubmit = function(event){
    event.preventDefault();
    deleteGridContent();
    makeGrid();
    showNumheightWidth();
};


function showNumheightWidth(){
    let printtxt = document.getElementsByName("h3");
    printtxt.innerHTML= "Your Grid has a Height of "+ inputHeight + " and  Width" + inputWidth;
    console.log(printtxt); 
}
   



//function to create Grid. calls changeSquareColor as a callback function
function makeGrid() {
    for (let r=0; r<inputHeight.value; r++){
        const row = pixelCanvas.insertRow(r);
        for (let c=0; c<inputWidth.value; c++){
            const cell = row.insertCell(c);
            cell.addEventListener("click", changeSquareColor);
        }
    }
}

//function to clear Grid
function deleteGridContent(){
    while (pixelCanvas.firstChild){
         pixelCanvas.removeChild(tableCanvas.firstChild);
    }
}


//function to add/change color of Grid squares
function changeSquareColor () {
    this.setAttribute("style", `background-color: ${color.value}`);
}
