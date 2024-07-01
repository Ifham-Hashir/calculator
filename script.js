let firstNum = 0;
let secondNum = 0;
let operator = '';

function add(num1, num2){
  return num1 + num2;
}

function sub(num1, num2){
  return num1 - num2;
}

function multiply(num1, num2){
  return num1 * num2;
}

function div(num1, num2){
  return num1 / num2;
}

function operate(num1, op, num2){
  switch(op)
  {
    case '+':
      return add(num1, num2);

    case '-':
      return sub(num1, num2);

    case '*':
      return multiply(num1, num2);

    case "/":
      return div(num1, num2);
  }
}
