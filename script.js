// Variables

// Executed Code

// Functions
function calculate(operator, numOne, numTwo) {
    if (operator == "+") {
        return add(numOne, numTwo);
    }
    if (operator == "-") {
        return subtract(numOne, numTwo);
    }
    if (operator == "*") {
        return multiply(numOne, numTwo);
    }
    if (operator == "/") {
        return divide(numOne, numTwo);
    }
}

function add(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multipy(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    if (numTwo === 0) {
        return "Can't divide by zero!"
    }
    return numOne / numTwo;
}