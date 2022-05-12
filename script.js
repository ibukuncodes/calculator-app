let input_button = document.querySelectorAll('.input-button');
let display = document.getElementById('input-display');
let clear = document.getElementById('clear-button');
let equal_button = document.getElementById('equal-button');
let delete_button = document.getElementById('delete-button');

window.onload = () => {
    display.value = "";
}

input_button.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        display.value += button_class.value;
    });
});


equal_button.addEventListener("click", () => {
    let result = eval(display.value);
    if(display.value == ""){
        alert ("Please enter numbers");
    }else{
        if (Number.isInteger(result)){
            display.value = result;
        }else{
            display.value = result.toFixed(2);
        }
    }
});

clear.addEventListener("click", () => {
    display.value = "";
});

delete_button.addEventListener("click", () => {
    display.value =  display.value.substr(0, display.value.length - 1);
});


