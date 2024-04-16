let display = document.getElementById("display");
let number1 = "";
let number2 = "";
let result;
let operand = null;

function numb(number) {
  let cursorPosition = display.selectionStart;
  if (number === ".") {
    if (!display.value.includes(".")) {
      display.value =
        display.value.slice(0, cursorPosition) +
        number +
        display.value.slice(cursorPosition);
    }
  } else {
    display.value =
      display.value.slice(0, cursorPosition) +
      number +
      display.value.slice(cursorPosition);
  }
  display.selectionStart = cursorPosition + 1;
  display.selectionEnd = cursorPosition + 1;
}
function operator(op) {
  number1 = parseFloat(display.value);
  display.value = "";
  operand = op;
}
function calculate() {
  number2 = parseFloat(display.value);
  switch (operand) {
    case "+":
      result = number1 + number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    case "√":
      result = Math.sqrt(display.value);
      break;

    default:
      break;
  }
  display.value = result;
  number1 = "";
  number2 = "";
  operand = null;
}
function clearDisplay() {
  number1 = "";
  number2 = "";
  operand = null;
  result = "";
  display.value = "";
}
function del() {
  display.value = display.value.slice(0, -1);
}
