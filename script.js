let firstNum = null;
let secondNum = null;
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
    if(!operator){
      if(display.textContent[0] === "0"){
        display.textContent ="";
      }
  
      if(display.textContent.length <= 7){
        display.textContent += numBtn[i].innerText;
      }
  
      firstNum = Number(display.textContent);

    }else{
      if(secondNum === null){
        display.textContent ="";
      }

        if(display.textContent[0] === "0"){
          display.textContent ="";
        }
    
        if(display.textContent.length <= 7){
          display.textContent += numBtn[i].innerText;
        }

        secondNum = Number(display.textContent);
    }

  });
}



const opBtn = document.querySelectorAll(".op");
for(let i = 0; i < opBtn.length; i++){
  opBtn[i].addEventListener("click", () => {
    if(firstNum !== null && secondNum === null){
      operator = opBtn[i].innerText;
      display.textContent = `${firstNum} ${operator} `;
    }

    if(firstNum && operator && secondNum){
      firstNum = operate(firstNum, operator, secondNum);
      operator = opBtn[i].innerText;
      display.textContent = `${firstNum} ${operator} `;
      secondNum = null;
    }

  });
}

const equalBtn = document.querySelector(".equals");
equalBtn.addEventListener("click", () => {
  firstNum = operate(firstNum, operator, secondNum);
  display.textContent = `${firstNum}`;
  secondNum = null;
});