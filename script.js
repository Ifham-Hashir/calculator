const num1 = 1;
const num2 = 2;
const operator = '';

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

function operate(num1, operator, num2){
  if(operator === '+'){
    return add(num1, num2);
  }
  else if(operator === '-'){
    return subtract(num1, num2);
  }
  if(operator === '*'){
    return multiply(num1, num2);
  }
  if(operator === '/'){
    return divide(num1, num2);
  }
}
console.log(operate(15, '/', 5));