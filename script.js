let currentInput = "";
let result = 0;

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("display").innerText = currentInput;
}

function calculate() {
    try {
        result = eval(currentInput);
        document.getElementById("display").innerText = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById("display").innerText = "Error";
        currentInput = "";
    }
}

function clearDisplay() {
    currentInput = "";
    result = 0;
    document.getElementById("display").innerText = "0";
}
