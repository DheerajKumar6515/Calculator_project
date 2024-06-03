const display=document.querySelector("#display")

function appendtodiv(input){
    display.value+=input;
}

function Cleardisplay(){
    display.value='';
}

function calculate(){
    try{
        display.value=eval(display.value);
    }catch(error){
        display.value='error!';
    }
}