// variable declarations
const tableCanvas = document.getElementById("pixelCanvas");
let inHeight = document.getElementById("inputHeight");
let inWidth = document.getElementById("inputWeight");
const sizePicker = document.getElementById("sizePicker");
const color = document.getElementById("colorPicker");


//function to call when user submits height and width of Grid
sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGridContent();
    makeGrid();
    showNumheightWidth();
};


function showNumheightWidth(){
    let printtxt = document.getElementsByName("h3");
    printtxt.innerHTML= "Your Grid has a Height of "+ inHeight + " and  Width" + inWidth;
    console.log(printtxt); 
}
   



//function to create Grid. calls changeSquareColor as a callback function
function makeGrid() {
    for (let r=0; r<inHeight.value; r++){
        const row = tableCanvas.insertRow(r);
        for (let c=0; c<inWidth.value; c++){
            const cell = row.insertCell(c);
            cell.addEventListener("click", changeSquareColor);
        }
    }
}

//function to clear Grid
function clearGridContent(){
    while (tableCanvas.firstChild){
         tableCanvas.removeChild(tableCanvas.firstChild);
    }
}


//function to add/change color of Grid squares
function changeSquareColor () {
    this.setAttribute("style", `background-color: ${color.value}`);
}