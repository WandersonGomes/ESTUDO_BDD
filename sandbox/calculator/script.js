const ERROR = 0;
const RESULT = 1;
const WAIT = 2;

let statusCalculator = WAIT;

const inputExpression = document.querySelector("#input-expression");

const buttonClear = document.querySelector("#button-clear");
const buttonEquals = document.querySelector("#button-equals");

const buttonZero = document.querySelector("#button-zero");
const buttonOne = document.querySelector("#button-one");
const buttonTwo = document.querySelector("#button-two");
const buttonThree = document.querySelector("#button-three");
const buttonFour = document.querySelector("#button-four");
const buttonFive = document.querySelector("#button-five");
const buttonSix = document.querySelector("#button-six");
const buttonSeven = document.querySelector("#button-seven");
const buttonEight = document.querySelector("#button-eight");
const buttonNine = document.querySelector("#button-nine");

const buttonDivision = document.querySelector("#button-division");
const buttonMutiplication = document.querySelector("#button-multiplication");
const buttonAddition = document.querySelector("#button-addition");
const buttonSubtraction = document.querySelector("#button-subtraction");

buttonZero.addEventListener("click", (e) => {
    if ((statusCalculator === RESULT) || (statusCalculator === ERROR))
        inputExpression.value = '';
    statusCalculator = WAIT;
    inputExpression.value += '0';
});

buttonOne.addEventListener("click", (e) => {
    if ((statusCalculator === RESULT) || (statusCalculator === ERROR))
        inputExpression.value = '';
    statusCalculator = WAIT;
    inputExpression.value += '1';
});

buttonTwo.addEventListener("click", (e) => {
    if ((statusCalculator === RESULT) || (statusCalculator === ERROR))
        inputExpression.value = '';
    statusCalculator = WAIT;
    inputExpression.value += '2';
});

buttonThree.addEventListener("click", (e) => {
    if ((statusCalculator === RESULT) || (statusCalculator === ERROR))
        inputExpression.value = '';
    statusCalculator = WAIT;
    inputExpression.value += '3';
});

buttonFour.addEventListener("click", (e) => {
    if ((statusCalculator === RESULT) || (statusCalculator === ERROR))
        inputExpression.value = '';
    statusCalculator = WAIT;
    inputExpression.value += '4';
});

buttonFive.addEventListener("click", (e) => {
    if ((statusCalculator === RESULT) || (statusCalculator === ERROR))
        inputExpression.value = '';
    statusCalculator = WAIT;
    inputExpression.value += '5';
});

buttonSix.addEventListener("click", (e) => {
    if ((statusCalculator === RESULT) || (statusCalculator === ERROR))
        inputExpression.value = '';
    statusCalculator = WAIT;
    inputExpression.value += '6';
});

buttonSeven.addEventListener("click", (e) => {
    if ((statusCalculator === RESULT) || (statusCalculator === ERROR))
        inputExpression.value = '';
    statusCalculator = WAIT;
    inputExpression.value += '7';
});

buttonEight.addEventListener("click", (e) => {
    if ((statusCalculator === RESULT) || (statusCalculator === ERROR))
        inputExpression.value = '';
    statusCalculator = WAIT;
    inputExpression.value += '8';
});

buttonNine.addEventListener("click", (e) => {
    if ((statusCalculator === RESULT) || (statusCalculator === ERROR))
        inputExpression.value = '';
    statusCalculator = WAIT;
    inputExpression.value += '9';
});

buttonAddition.addEventListener("click", (e) => {
    if ((statusCalculator === RESULT) || (statusCalculator === ERROR))
        inputExpression.value = '';
    statusCalculator = WAIT;
    inputExpression.value += '+';
});

buttonSubtraction.addEventListener("click", (e) => {
    if ((statusCalculator === RESULT) || (statusCalculator === ERROR))
        inputExpression.value = '';
    statusCalculator = WAIT;
    inputExpression.value += '-';
});

buttonMutiplication.addEventListener("click", (e) => {
    if ((statusCalculator === RESULT) || (statusCalculator === ERROR))
        inputExpression.value = '';
    statusCalculator = WAIT;
    inputExpression.value += '*';
});

buttonDivision.addEventListener("click", (e) => {
    if ((statusCalculator === RESULT) || (statusCalculator === ERROR))
        inputExpression.value = '';
    statusCalculator = WAIT;
    inputExpression.value += '/';
});

buttonClear.addEventListener("click", (e) => {
    if ((statusCalculator === RESULT) || (statusCalculator === ERROR))
        inputExpression.value = '';
    statusCalculator = WAIT;
    inputExpression.value = '';
});

buttonEquals.addEventListener("click", (e) => {
    try {
        let expression = inputExpression.value;
        inputExpression.value = eval(expression);
        statusCalculator = RESULT;
    } catch (error) {
        statusCalculator = ERROR;
        inputExpression.value = "ERROR";
    }
});