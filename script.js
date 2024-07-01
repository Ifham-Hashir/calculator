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

function operate(num1, operator, num2){
  switch(operator)
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

const display = document.querySelector(".display");
const numBtn = document.querySelectorAll(".num");

for(let i = 0; i < numBtn.length; i++){
  numBtn[i].addEventListener("click", () => {
    if(display.textContent.length <= 7){
      display.textContent += numBtn[i].innerText;
    }

  });
}