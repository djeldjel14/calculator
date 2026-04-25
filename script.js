let display = document.getElementById('display');
let text = '0';
let operator = '';
let previousNumber = '';

function pressNumber(button){
    if(text === '0'){
        text = button.textContent;
    } else {
        text += button.textContent;
    }
    display.textContent = text;
}
function pressOperator(button){
    previousNumber = text;
    operator = button.textContent;
    text = '';
}
function toggleSign(){
    text = (parseFloat(text) * -1).toString();
    display.textContent = text;
}
function calculate(){
    let num1 = parseFloat(previousNumber);
    let num2 = parseFloat(text);
    let result;

    if(operator === '+') result = num1 + num2;
    else if(operator === '-') result = num1 - num2;
    else if(operator === '*') result = num1 * num2;
    else if(operator === '/'){ 
        if(num2 == 0){
            result = "cannot divide by 0";
        }
        else{
        result = num1 / num2;
        }
    }
    display.textContent = result;
    text = result.toString();
}

function clearDisplay(){
    text = '';
    previousNumber = '';
    operator = '';
    display.textContent = '0';
}