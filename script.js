const display = document.querySelector(".display")
const operatorBtn = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equals");
const numberBtn = document.querySelectorAll(".number");
const ACBtn = document.querySelector(".all-clear");
const deleteBtn = document.querySelector(".delete");
const CEBtn = document.querySelector(".clear-entry");

let num1 = '';
let num2 = '';
let operator = '';
let haveDot = false;

numberBtn.forEach(number => {
  number.addEventListener("click", function inputNumber(e) {
    if(display.textContent === num1 + " " + operator) display.textContent = "";
    if(display.textContent.includes(".") && haveDot === false){
      haveDot = true;
    }else if(!display.textContent.includes(".")  && haveDot === true){
      haveDot = false;
    }
    if(e.target.textContent === "." && haveDot === true){
      return;
    }
    if(display.textContent.length < 16){
      display.textContent += e.target.textContent;
    }
    else{
      return;
    }
    num2 = display.textContent;
  });
});

operatorBtn.forEach(op => {
  op.addEventListener("click", function inputOperator(e) {
    if(!num2) return;
    else if(num1 && num2 && operator){
      equalTo();
    }
    else{
      haveDot = false;
      operator = e.target.textContent;
      num1 = num2;
      num2 = '';
      display.textContent = num1 + " " + operator;
    }
  });
});

equalBtn.addEventListener('click', () => {
  if(num1 === '') return;
  operate();
  operator = '';
  display.textContent = num1 + operator;
  num2 = num1;
  num1 = '';
}); 

function equalTo() {
  if(num1 === '') return;
  operate();
  display.textContent = num1;
  num2 = num1;
  num1 = '';
  operator = '';
}


function operate() {
  if (operator === '+') {
    return num1 = parseFloat(num1)+ parseFloat(num2);
  }
  else if (operator === '-') {
    return num1 = parseFloat(num1) - parseFloat(num2);
  }
  else if (operator === '×') {
    return num1 = parseFloat(num1) * parseFloat(num2);
  }
  else if (operator === '÷') {
    return num1 = parseFloat(num1) / parseFloat(num2);
  }
  else if (operator === '%') {
    return num1 = (parseFloat(num1)*100)/parseFloat(num2);
  }
}

ACBtn.addEventListener("click", () => {
  location.reload();
});

deleteBtn.addEventListener("click", () => {
  if(display.textContent.includes('+') === false && display.textContent.includes('-') === false && display.textContent.includes('÷') === false && display.textContent.includes('×') === false && display.textContent.includes('%') === false)
  {
    display.textContent = display.textContent.slice(0, -1);
  }
});

CEBtn.addEventListener("click", () =>{
  display.textContent = '';
  num2 = '';
});
