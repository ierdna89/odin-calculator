let bigDisplayValue = 0;
let smallDisplayValue = null;

let selectedOperation = null;
let firstOperand = null;
let secondOperand = null;
let operationResult = null;

let isDivideButtonClicked = false;
let isMultiplyButtonClicked = false;
let isSubstractButtonClicked = false;
let isAddButtonClicked = false;





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
      // || !bigDisplayValue.includes(".")
   }
}

// const smallScreen = document.getElementById("small-screen");

// function updateSmallDisplay() {
//    smallScreen.textContent = smallDisplayValue;
// }


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

// // variable declarations to select all button operators
// const operators = document.querySelectorAll("btn");

// function enableOperatorsBtns() {
//    for (let i = 0; operators.length > i; i++) {
//       operators[i].classList.toggle("btnClicked");
//    }
// }


function makeBigDisplayDigitsSmaller() {
   if (bigDisplayValue.length === 11) {
      bigScreen.style.fontSize = "40px";
   }
   else if (bigDisplayValue.length >= 14) {
      bigScreen.style.fontSize = "28px";
   }
   else if (bigDisplayValue.length < 11) {
      bigScreen.style.fontSize = "50px";
   }
}

// makeBigDisplayDigitsSmaller();

function getDisplayOperand(a) {
   if (bigDisplayValue === "0" || bigDisplayValue === 0) {
      bigDisplayValue = `${a.value}`;
   }
   else {
      bigDisplayValue += `${a.value}`;
   }   
   // console.log(bigDisplayValue);
   // console.log(typeof bigDisplayValue); 
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

   
   if(isDivideButtonClicked === true) {
      divideBtn.classList.toggle("btnClicked");   
   }
   else if(isMultiplyButtonClicked === true) {
      multiplyBtn.classList.toggle("btnClicked");   
   }
   else if(isSubstractButtonClicked === true) {
      substractBtn.classList.toggle("btnClicked");   
   }
   else if(isAddButtonClicked === true) {
      addBtn.classList.toggle("btnClicked");   
   } 

   divideBtn.disabled = false;
   isDivideButtonClicked = false;

   multiplyBtn.disabled = false;
   isMultiplyButtonClicked = false;

   substractBtn.disabled = false;
   isSubstractButtonClicked = false; 

   addBtn.disabled = false;
   isAddButtonClicked = false; 
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

const divideBtn = document.getElementById("divide");
divideBtn.addEventListener( "click", () => {
   // divideBtn.classList.toggle("btnClicked");
   if (isDivideButtonClicked === false) {
      divideBtn.classList.toggle("btnClicked");
      isDivideButtonClicked = true;
      divideBtn.disabled = true;
      selectedOperation = "divide";
      firstOperand = bigDisplayValue;
      bigDisplayValue = 0;
      // smallDisplayValue = `${firstOperand}` + `/`;
      // updateSmallDisplay();
   }

   // divideBtn.disabled = true;
   // isDivideButtonClicked = true;
   // selectedOperation = "divide";
   // firstOperand = bigDisplayValue;
   // bigDisplayValue = 0;
   // divideBtn.classList.toggle("btnClicked");
    // else {

   // }
   // console.log(`first operand is: ${firstOperand}`);
});

const multiplyBtn = document.getElementById("multiply");
multiplyBtn.addEventListener( "click", () => {
   if (isMultiplyButtonClicked === false) {
      multiplyBtn.classList.toggle("btnClicked");
      isMultiplyButtonClicked = true;
      multiplyBtn.disabled = true;
      selectedOperation = "multiply";
      firstOperand = bigDisplayValue;
      bigDisplayValue = 0;
   }
});

const substractBtn = document.getElementById("substract");
substractBtn.addEventListener( "click", () => {
   if (isSubstractButtonClicked === false) {
      substractBtn.classList.toggle("btnClicked");
      isSubstractButtonClicked = true;
      substractBtn.disabled = true;
      selectedOperation = "substract";
      firstOperand = bigDisplayValue;
      bigDisplayValue = 0;
   }
});

const addBtn = document.getElementById("add");
addBtn.addEventListener( "click", () => {
   if (isAddButtonClicked === false) {
      addBtn.classList.toggle("btnClicked");
      isAddButtonClicked = true;
      addBtn.disabled = true;
      selectedOperation = "add";
      firstOperand = bigDisplayValue;
      bigDisplayValue = 0;
   }
});

const equalsBtn = document.getElementById("equality");
equalsBtn.addEventListener( "click", () => {

   if(secondOperand === null) {
      secondOperand = bigDisplayValue;
      // console.log(`second operand is: ${secondOperand}`);
      operationResult = operate(selectedOperation, Number(firstOperand), Number(secondOperand));
      
      bigDisplayValue = operationResult.toString();
      firstOperand = bigDisplayValue;
      secondOperand = 0;

      updateDisplay();
      bigDisplayValue = 0;
      console.log(`first operand is: ${firstOperand}`);
      console.log(`second operand is: ${secondOperand}`);
      if(isDivideButtonClicked === true) {
         divideBtn.classList.toggle("btnClicked");
         isDivideButtonClicked = false;
         divideBtn.disabled = false;    
      }  
      else if(isMultiplyButtonClicked === true) {         
         multiplyBtn.classList.toggle("btnClicked");
         isMultiplyButtonClicked = false;
         multiplyBtn.disabled = false;
      } 
      else if(isSubstractButtonClicked === true) {         
         substractBtn.classList.toggle("btnClicked");
         isSubstractButtonClicked = false;
         substractBtn.disabled = false;
      }  
      else if(isAddButtonClicked === true) {         
         addBtn.classList.toggle("btnClicked");
         isAddButtonClicked = false;
         addBtn.disabled = false;
      }   
   else if(secondOperand != null) {
      secondOperand = bigDisplayValue;
      console.log(` 2 second operand is: ${secondOperand}`);
      operationResult = operate(selectedOperation, firstOperand, secondOperand);
      
      bigDisplayValue = operationResult.toString();
      firstOperand = bigDisplayValue;

      updateDisplay();
      bigDisplayValue = 0;
      if(isDivideButtonClicked === true) {
         divideBtn.classList.toggle("btnClicked");
         isDivideButtonClicked = false;
         divideBtn.disabled = false;    
      }  
      else if(isMultiplyButtonClicked === true) {         
         multiplyBtn.classList.toggle("btnClicked");
         isMultiplyButtonClicked = false;
         multiplyBtn.disabled = false;
      } 
   }

   }
   // else {

   // }

   // if (isDivideButtonClicked == true) {
   //    isDivideButtonClicked == false;
   //    divideBtn.classList.toggle("btnClicked");
   // }

   // smallDisplayValue += `${secondOperand}`;
   // updateSmallDisplay();
});

const floatBtn = document.getElementById("float");
floatBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 18) {
      disaableOperandsBtns();
   }
   if (bigDisplayValue === "0" || bigDisplayValue === 0) {
      bigScreen.textContent = "0.";
      bigDisplayValue += ".";
      // getDisplayOperand(floatBtn);
      // updateDisplay();
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
      // makeBigDisplayDigitsSmaller();
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



// console.log(bigDisplayValue);
// console.log(typeof bigDisplayValue);



// function clickNumberBtns() {
//    for (let i = 0; numbers.length > i; i++) {
//       numbers[i].addEventListener("click", () => {
//          if (bigDisplayValue.length === 10) {
//             disaableOperandsBtns();
//          }
//          else {
//             getDisplayOperand(numbers[i]);
//             updateDisplay(); 
//          }
//       })
//    }
// }

// clickNumberBtns();