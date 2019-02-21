let total = 0;
let calcBuffer = "0";
let mathOperator;
const display = document.querySelector(".display");

let buttonClicked = function(buttonValue) {
  if(isNaN(parseInt(buttonValue))) {
    processSymbol(buttonValue);
  } else {
    processNumbers(buttonValue);
  }
  renderDisplay();
}

let processSymbol = function(symbol) {
  console.log(symbol);
  switch (symbol) {
    case "C":
      calcBuffer = "0";
      runningTotal = 0;
      break;
    case "=":
      console.log("Equals operator");
      if(mathOperator === null) {
        return;   // Requires two numbers in order to do the math
      }
      processMathOperator(parseInt(calcBuffer));
      mathOperator = null;
      calcBuffer = +total;
      total = 0;
      break;
    case "←":
      if(calcBuffer.length === 1) {
        calcBuffer = "0";
      } else {
        calcBuffer = calcBuffer.substring(0, calcBuffer.length - 1);
      }
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      doTheMath(symbol);
      break;
  }
}

let processNumbers = function(num) {
  console.log(num);
  if(calcBuffer === "0") {
    calcBuffer = num;
  } else {
    calcBuffer += num;
  }
}

let processMathOperator = function(buff) {
  if(mathOperator === "+") {
    total += buff;
  } else if(mathOperator === "-") {
    total -= buff;
  } else if(mathOperator === "*") {
    total *= buff;
  } else {
    total /= buff;
  }
}

let doTheMath = function(value) {
  if(calcBuffer === "0") {
    return;
  }

  const mathBuffer = parseInt(calcBuffer);
  if(total === 0) {
    total = mathBuffer;
  } else {
    processMathOperator(mathBuffer);
  }

  mathOperator = value;
  calcBuffer = "0";
}

let renderDisplay = function() {
  display.innerText = calcBuffer;
}

let initialize = function() {
  document.querySelector(".calc-buttons").addEventListener("click", function(event) {
    buttonClicked(event.target.innerText);
  });
}

initialize();