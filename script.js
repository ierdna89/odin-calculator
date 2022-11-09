let bigDisplayValue = 0;
let smallDisplayValue = null;

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
  if(selectedOperation == "add") {
  	return add(a, b);
  }

  else if (selectedOperation == "substract") {
  	return substract(a, b);
  }

  else if (selectedOperation == "multiply") {
  	return multiply(a, b);
  }

  else if (selectedOperation == "divide") {
  	return divide(a, b);
  }
}


//select each number button and populate the screen

const bigScreen = document.getElementById("big-screen");

function updateDisplay() {
   bigScreen.textContent = bigDisplayValue;
   makeBigDisplayDigitsSmaller();

   if (bigDisplayValue.length == 0) {
      bigScreen.textContent = "0";
      bigDisplayValue = 0;

   }
   if (bigDisplayValue.length < 18) {
      enableOperandsBtns();
      floatBtn.disabled = false;
      console.log(`${bigDisplayValue}`);
   }
}

// variable declarations to select all button numbers
const numbers = document.querySelectorAll("numbers");

//function to enable all number buttons after the number on display is smaller than 10 digits
function enableOperandsBtns() {
   for (let i = 0; numbers.length > i; i++) {
      numbers[i].disabled = false;
   }
}

//function to disable all number buttons after the number on display is equals and bigger than 10 digits
function disaableOperandsBtns() {
   for (let i = 0; numbers.length > i; i++) {
      numbers[i].disabled = true;
   }
}


function makeBigDisplayDigitsSmaller() {
   if (bigDisplayValue.length === 11) {
      bigScreen.style.fontSize = "40px";
   }
   else if (bigDisplayValue.length >= 14) {
      bigScreen.style.fontSize = "25px";
   }
   else if (bigDisplayValue.length < 11) {
      bigScreen.style.fontSize = "50px";
   }
}


function getDisplayOperand(a) {
   if (bigDisplayValue === "0" || bigDisplayValue === 0) {
      bigDisplayValue = `${a.value}`;
   }
   else {
      bigDisplayValue += `${a.value}`;
   }   
}


function clearBigScreen() {
   bigDisplayValue = 0;
   bigScreen.style.fontSize = "50px";
   selectedOperation = null;
   firstOperand = null;
   secondOperand = null;
   operationResult = null;
   enableOperandsBtns()
   updateDisplay();
}

const backspaceBtn = document.getElementById("backspace");
backspaceBtn.addEventListener("click", () => {
   bigDisplayValue = bigDisplayValue.slice(0, -1);
   updateDisplay();
   makeBigDisplayDigitsSmaller();
   console.log(bigDisplayValue);
});


const allClearBtn = document.getElementById("all-clear");
allClearBtn.addEventListener("click", () => {
   clearBigScreen();
});

// const divideBtn = document.getElementById("divide");
// divideBtn.addEventListener( "click", () => {
//    if (secondOperand === null) {
//       console.log(`hello from divide first`); 
//       selectedOperation = "divide";
//       firstOperand = bigDisplayValue;
//       bigDisplayValue = 0;
//       // secondOperand = 0;
//    }
//    else if (selectedOperation != null) {
//       console.log(`hello from divide second`); 
//       selectedOperation = "divide";
//       operateEqualsBtn();
//    }
//    else if (secondOperand === null) {
//       console.log(`hello from divide third`);  
//       selectedOperation = "divide";
//       operateEqualsBtn(); 
      
//    }    
// });

const divideBtn = document.getElementById("divide");
divideBtn.addEventListener( "click", () => {
   if (secondOperand === null && selectedOperation === null) {
      console.log(`hello from divide first`); 
      selectedOperation = "divide";
      firstOperand = bigDisplayValue;
      bigDisplayValue = 0;
      // secondOperand = 0;
   }
   else if (secondOperand === null && selectedOperation != null) {
      console.log(`hello from divide new added`); 
      operateEqualsBtn();
      selectedOperation = "divide";  
   }
   else if (selectedOperation != null) {
      console.log(`hello from divide second`); 
      selectedOperation = "divide";
      operateEqualsBtn();
   }
   else if (secondOperand === null) {
      console.log(`hello from divide third`);  
      selectedOperation = "divide";
      operateEqualsBtn(); 
      
   }    
});

// const multiplyBtn = document.getElementById("multiply");
// multiplyBtn.addEventListener( "click", () => {
//    if (secondOperand === null) {
//       console.log(`hello from multiply first`);
//       selectedOperation = "multiply";
//       firstOperand = bigDisplayValue;
//       bigDisplayValue = 0;
//       // secondOperand = 0;
//    }
//    else if (selectedOperation != null) {
//       console.log(`hello from multiply second`); 
//       selectedOperation = "multiply";
//       operateEqualsBtn();
//    }
//    else if (secondOperand === null) {
//       console.log(`hello from multiply third`);  
//       selectedOperation = "multiply";
//       operateEqualsBtn();
//    }    
// });

const multiplyBtn = document.getElementById("multiply");
multiplyBtn.addEventListener( "click", () => {
   if (secondOperand === null && selectedOperation === null) {
      console.log(`hello from multiply first`);
      selectedOperation = "multiply";
      firstOperand = bigDisplayValue;
      bigDisplayValue = 0;
      // secondOperand = 0;
   }
   else if (secondOperand === null && selectedOperation != null) {
      console.log(`hello from multiply new added`); 
      operateEqualsBtn();
      selectedOperation = "multiply";
   }
   else if (selectedOperation != null) {
      console.log(`hello from multiply second`); 
      selectedOperation = "multiply";
      operateEqualsBtn();
   }
   else if (secondOperand === null) {
      console.log(`hello from multiply third`);  
      selectedOperation = "multiply";
      operateEqualsBtn();
   }    
});

const substractBtn = document.getElementById("substract");
substractBtn.addEventListener( "click", () => {
   if (secondOperand === null && selectedOperation === null) {
      console.log(`hello from substract first`); 
      selectedOperation = "substract";
      firstOperand = bigDisplayValue;
      bigDisplayValue = 0;
      // secondOperand = 0;
   }
   else if (secondOperand === null && selectedOperation != null) {
      console.log(`hello from substract new added`); 
      operateEqualsBtn();
      selectedOperation = "substract";
   }
   else if (selectedOperation != null) {
      console.log(`hello from substract second`); 
      
      operateEqualsBtn();
      selectedOperation = "substract";
      
   }
   else if (secondOperand === null) {
      console.log(`hello from substract third`);  
      selectedOperation = "substract";
      operateEqualsBtn();
   }  
});

const addBtn = document.getElementById("add");
addBtn.addEventListener( "click", () => {
   if (secondOperand === null && selectedOperation === null) {
      console.log(`hello from add first`); 
      selectedOperation = "add";
      firstOperand = bigDisplayValue;
      bigDisplayValue = 0;
      // secondOperand = 0;
   }
   else if (secondOperand === null && selectedOperation != null) {
      console.log(`hello from add new added`); 
      operateEqualsBtn();
      selectedOperation = "add";
   }
   else if (secondOperand != null) {
      console.log(`hello from add second`); 
      
      operateEqualsBtn();
      selectedOperation = "add";
      
   }
   else if (selectedOperation != null) {
      console.log(`hello from add third`); 
      selectedOperation = "add";
      operateEqualsBtn();
   }

});

function operateEqualsBtn() {
   
   if (secondOperand === null && operationResult === null) {
      console.log(`hello from equals FIRST IF `);

      secondOperand = bigDisplayValue;

      console.log(` firstOperand is: ${firstOperand}`);
      console.log(` second operand is: ${secondOperand}`);
      console.log(`selectedOperation is: ${selectedOperation}`);

      operationResult = roundResult(operate(selectedOperation, Number(firstOperand), Number(secondOperand)));
      
      console.log(`operationResult: ${operationResult}`);

      bigDisplayValue = operationResult.toString();
      firstOperand = operationResult;
      // operationResult = null;
      secondOperand = null;
      // selectedOperation = null;

      updateDisplay();
      bigDisplayValue = 0;
   } 
   else if (secondOperand === 0 && operationResult === null) {
      console.log(`hello from equals SECOND IF `);

      secondOperand = bigDisplayValue;

      console.log(` firstOperand is: ${firstOperand}`);
      console.log(` second operand is: ${secondOperand}`);
      console.log(`selectedOperation is: ${selectedOperation}`);

      operationResult = roundResult(operate(selectedOperation, Number(firstOperand), Number(secondOperand)));
      
      console.log(`operationResult: ${operationResult}`);

      bigDisplayValue = operationResult.toString();
      // operationResult = null;
      firstOperand = bigDisplayValue;
      // selectedOperation = null;
      // secondOperand = null;

      updateDisplay();
      bigDisplayValue = 0;
   } 

   else {
      console.log(`hello from equals THIRD IF `);

      secondOperand = bigDisplayValue;

      console.log(` firstOperand is: ${firstOperand}`);
      console.log(` secondOperand is: ${secondOperand}`);
      console.log(`selectedOperation is: ${selectedOperation}`);

      operationResult = roundResult(operate(selectedOperation, Number(firstOperand), Number(secondOperand)));
     
      console.log(`operationResult: ${operationResult}`);
     
      bigDisplayValue = operationResult.toString();
      // operationResult = null;
      firstOperand = bigDisplayValue;
      // selectedOperation = null;
      secondOperand = null;

      updateDisplay();
      bigDisplayValue = 0;
   }

   console.log(` firstOperand is: ${firstOperand}`);
   console.log(` secondOperand is: ${secondOperand}`);
   console.log(`selectedOperation: ${selectedOperation}`);
   console.log(`operationResult: ${operationResult}`);
   console.log(`bigDisplayValue: ${bigDisplayValue}`);
   console.log(`*******`);
}

const equalsBtn = document.getElementById("equality");
equalsBtn.addEventListener( "click", () => {
   operateEqualsBtn();
});


const floatBtn = document.getElementById("float");
floatBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 18) {
      disaableOperandsBtns();
   }
   if (bigDisplayValue === "0" || bigDisplayValue === 0) {
      bigScreen.textContent = "0.";
      bigDisplayValue += ".";
   }
   if (bigDisplayValue.includes(".")) {
      floatBtn.disabled = true;
   }   
   else {
      getDisplayOperand(floatBtn);
      updateDisplay();
   }
});

const oneNumberBtn = document.getElementById("one");
oneNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 18) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(oneNumberBtn);
      updateDisplay();
   }
});

const twoNumberBtn = document.getElementById("two");
twoNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 18) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(twoNumberBtn);
      updateDisplay(); 
   }
});

const threeNumberBtn = document.getElementById("three");
threeNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 18) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(threeNumberBtn);
      updateDisplay(); 
   }
});

const fourNumberBtn = document.getElementById("four");
fourNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 18) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(fourNumberBtn);
      updateDisplay(); 
   }});

const fiveNumberBtn = document.getElementById("five");
fiveNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 18) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(fiveNumberBtn);
      updateDisplay(); 
   }
});

const sixNumberBtn = document.getElementById("six");
sixNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 18) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(sixNumberBtn);
      updateDisplay(); 
   }
});

const sevenNumberBtn = document.getElementById("seven");
sevenNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 18) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(sevenNumberBtn);
      updateDisplay(); 
   }
});

const eightNumberBtn = document.getElementById("eight");
eightNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 18) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(eightNumberBtn);
      updateDisplay(); 
   }
});

const nineNumberBtn = document.getElementById("nine");
nineNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 18) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(nineNumberBtn);
      updateDisplay(); 
   }
});

const zeroNumberBtn = document.getElementById("zero");
zeroNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 18) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(zeroNumberBtn);
      updateDisplay(); 
   }
});

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}
