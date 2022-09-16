// I use a variable to preserve my text output
let result = document.getElementById("show_text");

// Declare a funcion that recive a value from button and return it and next one if pressed more
function typeValue(numberOrSymbol){

    result.value += numberOrSymbol;

}
//Need function for delete last number using leng of text_area and go back by 1
function deleteLast(){

    result.value = result.value.slice(0,-1);
      
}

// Need function for delete all and restart text area


function showEmpty(){

    result.value = "";

}
//Need funcion for do my calculate (Only for this time I use eval! Never do it please)

function giveMeResult(){
 
    result.value = eval(result.value)

}
