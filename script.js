const body = document.querySelector('body');
const input = document.querySelector('input');
const displayable = document.querySelector('.displayable');
const clear = document.querySelector('#clear');

let num1;
let operator;
let num2;

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a/b;
}

// function operate(num1, num2, operator){

// }

displayable.addEventListener('click', (e) => {

    input.value += e.target.textContent;
})

clear.addEventListener('click', () => {
    input.value = '';
})