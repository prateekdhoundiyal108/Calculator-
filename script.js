const calculatorScreen = document.querySelector('#calculatorScreen');
const keys = document.querySelectorAll('.key');
let currentInput = '';
let operator = '';
let previousInput = '';

keys.forEach(key => {
    key.addEventListener('click', () => {
        const value = key.value;

        if (value === 'all-clear') {
            clearAll();
        } else if (value === '=') {
            calculate();
        } else if (key.classList.contains('operator')) {
            setOperator(value);
        } else {
            appendNumber(value);
        }
    });
});

function clearAll() {
    currentInput = '';
    operator = '';
    previousInput = '';
    calculatorScreen.value = '';
}

function calculate() {
    if (operator === '' || previousInput === '' || currentInput === '') return;

    const currentNumber = parseFloat(currentInput);
    const previousNumber = parseFloat(previousInput);
    let result;

    switch (operator) {
        case '+':
            result = previousNumber + currentNumber;
            break;
        case '-':
            result = previousNumber - currentNumber;
            break;
        case '*':
            result = previousNumber * currentNumber;
            break;
        case '/':
            result = previousNumber / currentNumber;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    calculatorScreen.value = currentInput;
}

function setOperator(op) {
    if (currentInput === '') return;

    if (previousInput !== '') {
        calculate();
    }

    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function appendNumber(number) {
    if (currentInput.includes('.') && number === '.') return;

    currentInput += number;
    calculatorScreen.value = currentInput;
}