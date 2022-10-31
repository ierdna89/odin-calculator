let bigDisplayValue = 0;
let selectedOperation = "";
let firstOperand = null;
let secondOperand = null;



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
  if(selectedOperation === add) {
  	return add(a, b);
  }

  else if (selectedOperation == substract) {
  	return substract(a, b);
  }

  else if (selectedOperation == multiply) {
  	return multiply(a, b);
  }

  else if (selectedOperation == divide) {
  	return divide(a, b);
  }
}


//select each number button and populate the screen

const bigScreen = document.getElementById("big-screen");

function updateDisplay() {
   bigScreen.textContent = bigDisplayValue;

   // if (bigDisplayValue.length > 10) {
   //    bigScreen.textContent = bigDisplayValue.substring(0, 10);
   // }

   if (bigDisplayValue.length == 0) {
      bigScreen.textContent = "0";
      bigDisplayValue = 0;
   }

   if (bigDisplayValue.length < 10 || !bigDisplayValue.includes(",")) {
      enableOperandsBtns();
      floatBtn.disabled = false;
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

//
//function to disable all number buttons after the number on display is equals and bigger than 10 digits
function disaableOperandsBtns() {
   for (let i = 0; numbers.length > i; i++) {
      numbers[i].disabled = true;
   }
}

function makeBigDisplayDigitsSmaller() {
   if (bigDisplayValue.length === 10) {
      bigScreen.style.fontSize = "30px";
   }
}

makeBigDisplayDigitsSmaller();

function getDisplayOperand(a) {
   if (bigDisplayValue === "0" || bigDisplayValue === 0) {
      bigDisplayValue = `${a.value}`;
   }
   else {
      bigDisplayValue += `${a.value}`;
   }   
   console.log(bigDisplayValue);
   console.log(typeof bigDisplayValue); 
}


function clearBigScreen() {
   // bigScreen.textContent = "0";
   bigDisplayValue = 0;
   enableOperandsBtns()
   updateDisplay();
}

const backspaceBtn = document.getElementById("backspace");
backspaceBtn.addEventListener("click", () => {
   bigDisplayValue = bigDisplayValue.slice(0, -1);
   // bigScreen.textContent = bigDisplayValue;
   updateDisplay();
   console.log(bigDisplayValue);
});


const allClearBtn = document.getElementById("all-clear");
   allClearBtn.addEventListener("click", () => {
   clearBigScreen();
});


const floatBtn = document.getElementById("float");
floatBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 10) {
      disaableOperandsBtns();
   }
   if (bigDisplayValue.includes(",")) {
      floatBtn.disabled = true;
   }
   else {
      getDisplayOperand(floatBtn);
      updateDisplay();
   }
});

const oneNumberBtn = document.getElementById("one");
oneNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 100) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(oneNumberBtn);
      updateDisplay();
      makeBigDisplayDigitsSmaller() 
   }
});

const twoNumberBtn = document.getElementById("two");
twoNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 10) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(twoNumberBtn);
      updateDisplay(); 
   }
});

const threeNumberBtn = document.getElementById("three");
threeNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 10) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(threeNumberBtn);
      updateDisplay(); 
   }
});

const fourNumberBtn = document.getElementById("four");
fourNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 10) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(fourNumberBtn);
      updateDisplay(); 
   }});

const fiveNumberBtn = document.getElementById("five");
fiveNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 10) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(fiveNumberBtn);
      updateDisplay(); 
   }
});

const sixNumberBtn = document.getElementById("six");
sixNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 10) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(sixNumberBtn);
      updateDisplay(); 
   }
});

const sevenNumberBtn = document.getElementById("seven");
sevenNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 10) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(sevenNumberBtn);
      updateDisplay(); 
   }
});

const eightNumberBtn = document.getElementById("eight");
eightNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 10) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(eightNumberBtn);
      updateDisplay(); 
   }
});

const nineNumberBtn = document.getElementById("nine");
nineNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 10) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(nineNumberBtn);
      updateDisplay(); 
   }
});

const zeroNumberBtn = document.getElementById("zero");
zeroNumberBtn.addEventListener("click", () => {
   if (bigDisplayValue.length === 10) {
      disaableOperandsBtns();
   }
   else {
      getDisplayOperand(zeroNumberBtn);
      updateDisplay(); 
   }
});



console.log(bigDisplayValue);
console.log(typeof bigDisplayValue);



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












