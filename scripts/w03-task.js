/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}
function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1 - number2;
}
function subtractNumbers(){
    let subNumber1 = Number(document.querySelector("#subtract1").value);
    let subNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subNumber1, subNumber2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply(number1, number2){
    return number1 * number2;  
}
function multiplyNumbers(){
    let mulNumber1 = Number(document.querySelector("#factor1").value);
    let mulNumber2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(mulNumber1, mulNumber2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor){
        return dividend / divisor;
    }
function divideNumbers(){
    let dividendNumber = Number(document.querySelector("#dividend").value);
    let divisorNumber = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividendNumber, divisorNumber);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', getTotalDue);

function getTotalDue() {
    let subtotal = Number(document.querySelector('#subtotal').value);

    if (document.querySelector('#member').checked) {
        subtotal *= 0.8;
    }

    const amountFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    document.querySelector('#total').textContent = `${amountFormat.format(subtotal)}`;
}

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const sourcesArray = document.querySelector("#array");
sourcesArray.innerHTML = numbers;
/* Output Odds Only Array */
const oddsArray = document.querySelector("#odds");
let odds = numbers.filter(number => number % 2 === 1);
oddsArray.innerHTML = odds;

/* Output Evens Only Array */
const evensArray = document.querySelector("#evens");
let evens = numbers.filter(number => number % 2 === 0); 
evensArray.innerHTML = evens;

/* Output Sum of Org. Array */
const sumArray = document.querySelector("#sumOfArray");
let sumarray = numbers.reduce((sumtotal, numbers) => sumtotal + numbers);
sumArray.innerHTML = sumarray;

/* Output Multiplied by 2 Array */
const multArray = document.querySelector("#multiplied");
let multarray = numbers.map(numbers => numbers * 2);
multArray.innerHTML = `<br>${multarray}`;

/* Output Sum of Multiplied by 2 Array */
const sumultArray = document.querySelector("#sumOfMultiplied");
let sumultarray = multarray.reduce((sumultotal, multarray) => sumultotal + multarray);
sumultArray.innerHTML = sumultarray;