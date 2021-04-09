const ERROR = 0;
const RESULT = 1;
const WAIT = 2;

let statusCalculator = WAIT;

const inputExpression = document.querySelector("#input-expression");

const clearInputExpression = function() {
    if (statusCalculator !== WAIT)
        statusCalculator = WAIT;
    inputExpression.value = '';
}

const calculateExpression = function() {
    try {
        let expression = inputExpression.value;
        inputExpression.value = eval(expression);
        statusCalculator = RESULT;
    } catch (error) {
        statusCalculator = ERROR;
        inputExpression.value = "ERROR";
    }
}

const insertSymbolInputExpression = function(symbol) {
    if ((statusCalculator === RESULT) || (statusCalculator === ERROR))
        inputExpression.value = '';
    statusCalculator = WAIT;
    inputExpression.value += symbol;
}

const buttonsCalculator = document.querySelectorAll(".calc-button");
buttonsCalculator.forEach(button => {
    button.addEventListener('click', event => {
        idButton = event.target.id;
        valueButton = event.target.innerText;

        switch(idButton) {
            case "button-clear": clearInputExpression(); break;
            case "button-equals": calculateExpression(); break;
            case "button-division": insertSymbolInputExpression("/"); break;
            case "button-multiplication": insertSymbolInputExpression("*"); break;
            default: insertSymbolInputExpression(valueButton); break;
        }
    });
  });