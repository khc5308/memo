let displayValue = '';

// 숫자 추가
function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

// (),π
function appendSymbol(symbol) {
    displayValue += symbol;
    updateDisplay();
}

// 수식
function setOperation(operation) {
    if (displayValue !== '') {
        displayValue += operation;
        updateDisplay();
    }
}

// . 
function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

// =
function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

//del
function clearDisplay() {
    // 마지막 문자 제거
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

//글자 쓸 때마다 업데이트
function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}

// !
function calculateFactorial() {
    try {
        const num = parseInt(displayValue);
        if (num >= 0) {
            displayValue = factorial(num).toString();
            updateDisplay();
        } else {
            displayValue = 'Error';
            updateDisplay();
        }
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

// ! 계산함수
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// √
function calculateSquareRoot() {
    try {
        displayValue = Math.sqrt(parseFloat(displayValue)).toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

// √ 계산 함수
function calculateSquare() {
    try {
        const num = parseFloat(displayValue);
        displayValue = (num * num).toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}