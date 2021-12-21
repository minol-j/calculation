let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let submit = document.querySelector(".submit");
let resultText = document.querySelector(".p");

submit.addEventListener("click", onClick);

function onClick(e) {
  resultText.innerText = "";

  let numOne = parseInt(num1.value);
  let numTwo = parseInt(num2.value);
  if (numOne != numOne || numTwo != numTwo) {
    return;
  }

  let select = document.querySelector(".select");
  let operation = select.value;

  if (operation == "+") {
    sum = Math.round(numOne + numTwo);
  } else if (operation == "-") {
    sum = Math.round(numOne - numTwo);
  } else if (operation == "/") {
    if (numTwo == 0) {
      alert("На ноль делить нельзя");
      resultText.innerText = "На ноль делить нельзя";
      return;
    }
    sum = Math.round(numOne / numTwo);
  } else if (operation == "*") {
    sum = Math.round(numOne * numTwo);
  }

  if (sum == Infinity || sum == -Infinity) {
    resultText.innerText = "Слишком большое число";
    return;
  }

  resultText.innerText = sum;
}
