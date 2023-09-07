const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');
const previousScreen = document.querySelector('.previous');
const currentScreen = document.querySelector('.current');



let previousValue = '';
let currentValue = '';
let operator = '';



numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        handleNum(e.target.textContent)
        currentScreen.textContent = currentValue;
    })
})

operators.forEach(op => {
    op.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
        previousScreen.textContent = `${previousValue} ${operator}`
    })
})
clear.addEventListener('click', () => {
    previousScreen.textContent = '';
    currentScreen.textContent = '';
    currentValue = '';
    previousValue = '';
    operator = '';
});

equal.addEventListener('click', () => {
    operate();
    previousScreen.textContent = ''
    currentScreen.textContent = currentValue;
})

function handleNum(num){
    currentValue += num;
}

function handleOperator(op){
    operator = op
    previousValue = currentValue;
    currentValue = '';
}

function operate(){
    currentValue = Number(currentValue)
    previousValue = Number(previousValue)
    if(operator === '+'){
        currentValue = currentValue + previousValue
        return(currentValue)
    }
    if(operator === '-'){
        currentValue = previousValue - currentValue;
        return currentValue;
    }
    if(operator === 'x'){
        currentValue = currentValue * previousValue;
        return currentValue;
    }
    if(operator === '÷'){
        currentValue = previousValue / currentValue;
        return currentValue;
    }
}