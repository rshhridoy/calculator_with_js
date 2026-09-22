const display = document.querySelector("#display");

const button = document.getElementsByClassName("btn");

const activityToDisplay = (ch) => {
    display.value += ch;
}


const clearDisplay = () => {
    display.value = "";
}


const calc = () => {
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = "Error";
    }
}

