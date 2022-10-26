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

let displayValue;
let selectedOperation;


// console.log(operate(selectedOperation, 999999, 100));