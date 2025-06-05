// Variables
let numOne = null;
let numTwo = null;
let operation = null;
let isOnNumTwo = false;
let isSolved = false;

const display = document.querySelector('#display');

const numberBtns = document.querySelectorAll('.number');
numberBtns.forEach(button => {
    button.addEventListener('click', function() {
        if (isSolved == true) {
            const number = this.textContent;
            display.value = '';
            display.value += number;
            isSolved = false;
            return;
        }
        // first number
        if (operation == null) {
            const number = this.textContent;
            display.value += number;
            return;
        }
        // second number, two or more digits
        if (operation != null && isOnNumTwo == true) {
            const number = this.textContent;
            display.value += number;
            return;
        }
        // second number, first digit
        if (operation != null && isOnNumTwo == false ) {
            operation = display.value;
            const number = this.textContent;
            display.value = number;
            isOnNumTwo = true;
            return;
        }
    });
});

const operationBtns = document.querySelectorAll('.operator');
operationBtns.forEach(button => {
    button.addEventListener('click', function() {
        if (isSolved == true) {
            numOne = Number(display.value);
            display.value = this.textContent;
            operation = display.value;
            isSolved = false;
            return;
        }

        if ( numOne != null ) { return; }
        
        numOne = Number(display.value);
        display.value = this.textContent;
        operation = display.value;
        return;
    })
})

const equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click', () => {
    if (isOnNumTwo == false) { return; }
    
    numTwo = Number(display.value);
    display.value = calculate(numOne, numTwo, operation);
    operation = null;
    numTwo = null;
    numOne = null;
    isOnNumTwo = false;
    isSolved= true;
    return;
})

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    numOne = null;
    numTwo = null;
    operation = null;
    isOnNumTwo = false;
    display.value = '';
    return;
});

// Executed Code

// Functions
function calculate(numOne, numTwo, operator) {
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

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    if (numTwo === 0) {
        return "Can't divide by zero!"
    }
    return numOne / numTwo;
}