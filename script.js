let bigDisplayValue = 0;
let selectedOperation = null;
let firstOperand = null;
let secondOperand = null;
let operationResult = null;

function add(a, b) {
   return a + b;
}

function substract(a, b) {
   return a - b;
}

function multiply(a, b) {
   return a * b;
}

function divide(a, b) {
   return a / b;
}

function operate(selectedOperation, a, b) {
  if(selectedOperation == "+") {
  	return add(a, b);
  }
  else if (selectedOperation == "-") {
  	return substract(a, b);
  }
  else if (selectedOperation == "*") {
  	return multiply(a, b);
  }
  else if (selectedOperation == "÷") {
  	return divide(a, b);
  }
}

function chooseOperator(operator) {
   if (firstOperand === null) return;
   if (firstOperand !== null && secondOperand !== null) {
      operateEqualsBtn();
   }
   selectedOperation = operator;
   bigDisplayValue = 0;
}

//select each number button and populate the screen
function updateDisplay() {
   bigScreen.innerText = bigDisplayValue.toString();
   makeBigDisplayDigitsSmaller();

   if (selectedOperation === null && operationResult === null) {
      firstOperand = bigDisplayValue;
   }
   if (selectedOperation !== null && operationResult === null) {
      secondOperand = bigDisplayValue;
   }
   if (firstOperand !== null && secondOperand !== null && operationResult !== null) {
      secondOperand = 0;
      firstOperand = bigDisplayValue;
   }
   if (bigDisplayValue.length === 0) {
      bigScreen.textContent = "0";
      bigDisplayValue = 0;
   }
   if (bigDisplayValue.length < 20) {
      enableOperandsBtns();
      floatBtn.disabled = false;
   }
}

//function to enable all number buttons after the number on display is smaller than 10 digits
function enableOperandsBtns() {
   for (let i = 0; numbersBtn.length > i; i++) {
      numbersBtn[i].disabled = false;
   }
}

//function to disable all number buttons after the number on display is equals and bigger than 10 digits
function disableOperandsBtns() {
   for (let i = 0; numbersBtn.length > i; i++) {
      numbersBtn[i].disabled = true;
   }
}

//function to enable all operators buttons when pressing AllClear button
function enableOperatorsBtns() {
   for (let i = 0; operatorsBtn.length > i; i++) {
      operatorsBtn[i].disabled = false;
   }
}

//function to disable all operators buttons after dividing to zero
function disableOperatorsBtns() {
   for (let i = 0; operatorsBtn.length > i; i++) {
      operatorsBtn[i].disabled = true;
   }
}

function makeBigDisplayDigitsSmaller() {
   if (bigDisplayValue.length === 11) {
      bigScreen.style.fontSize = "40px";
   }
   else if (bigDisplayValue.length >= 14) {
      bigScreen.style.fontSize = "26px";
   }
   else if (bigDisplayValue.length < 11) {
      bigScreen.style.fontSize = "50px";
   }
}

function getDisplayOperand(a) {
   if (bigDisplayValue === "0" || bigDisplayValue === 0) {
      bigDisplayValue = a;
   }
   else {
      bigDisplayValue += a;
   }   
}

function clearBigScreen() {
   bigDisplayValue = 0;
   bigScreen.style.fontSize = "50px";
   selectedOperation = null;
   firstOperand = null;
   secondOperand = null;
   operationResult = null;
   enableOperandsBtns();
   enableOperatorsBtns();
   equalsBtn.disabled = false;
   backspaceBtn.disabled = false;
   floatBtn.disabled = false;
   updateDisplay();
}

function operateEqualsBtn() {
   if (firstOperand !== null && secondOperand === "0") {
      bigDisplayValue = "nah bro";
      updateDisplay();
      disableOperandsBtns();
      disableOperatorsBtns();
      equalsBtn.disabled = true;
      backspaceBtn.disabled = true;
      floatBtn.disabled = true;
   }
   else if (firstOperand !== null && secondOperand === null) return;
   else {
      operationResult = roundResult(operate(selectedOperation, Number(firstOperand), Number(secondOperand)));
      bigDisplayValue = operationResult.toString();
      operationResult = null;
      firstOperand = bigDisplayValue;
      selectedOperation = null;
      secondOperand = null;
      updateDisplay();
   }
}

const bigScreen = document.getElementById("big-screen");
const equalsBtn = document.getElementById("equality");
const floatBtn = document.getElementById("float");
const numbersBtn = document.querySelectorAll(".numbers");
const operatorsBtn = document.querySelectorAll(".operators");
const backspaceBtn = document.getElementById("backspace");
const allClearBtn = document.getElementById("all-clear");

allClearBtn.addEventListener("click", () => {
   clearBigScreen();
});

backspaceBtn.addEventListener("click", () => {
   bigDisplayValue = bigDisplayValue.slice(0, -1);
   updateDisplay();
   makeBigDisplayDigitsSmaller();
});

numbersBtn.forEach(button => {
   button.addEventListener("click", () => {
      if (bigDisplayValue.length >= 20) {
         disableOperandsBtns();
      }
      else {
         getDisplayOperand(button.innerText);
         updateDisplay();
      }
   });
});

operatorsBtn.forEach(button => {
   button.addEventListener("click", () => {
      chooseOperator(button.innerText);
      enableOperandsBtns();
   });
});

floatBtn.addEventListener("click", () => {
   if (bigDisplayValue.length >= 20) {
      disableOperandsBtns();
   }
   if (bigDisplayValue === "0" || bigDisplayValue === 0) {
      bigScreen.textContent = "0.";
      bigDisplayValue += ".";
   }
   if (bigDisplayValue.includes(".")) {
      floatBtn.disabled = true;
   }   
   else {
      getDisplayOperand(floatBtn.innerText);
      updateDisplay();
   }
});

equalsBtn.addEventListener( "click", () => {
   operateEqualsBtn();
});

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}