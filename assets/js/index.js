// I use a variable to preserve my text output
let result = document.getElementById("show_text");

// Declare a funcion that recive a value from button and return it and next one if pressed more
function typeValue(numberOrSymbol){

    document.getElementById("show_text").value += numberOrSymbol;

}
//Need function for delete last number and call it on DEL button
function deleteLast(){

    result.value = result.value.slice(0,-1);
      
}

// Need function for delete all and restart text area


function showEmpty(){

    result.value = "";

}
//Need funcion for do my calculate (Only for this time I use eval)

function giveMeResult(){
 
    result.value = eval(result.value)

}
