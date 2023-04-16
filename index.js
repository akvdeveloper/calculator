const input = document.querySelector("#inputBox");
const buttons = document.querySelectorAll("button");

var string = "";

var arr = Array.from(buttons);
arr.map(button =>{
  button.addEventListener("click", (e)=>{
    if(e.target.innerText == "="){
      string = eval(string);
      input.value = string;
    }else if( e.target.innerText == "AC"){
      string = "";
      input.value = string;
    }else if(e.target.innerText =="DEL"){
      string = string.substring(0, string.length-1)
      input.value = string;
    }else {
      string += e.target.innerText;
      input.value = string;
    }
  })
})








































// // Initialize state variables
// let leftOperand = "";
// let operator = "";
// let rightOperand = "";

// // Define helper functions
// function clearInput() {
//   input.value = "";
// }

// function appendInput(value) {
//   input.value += value;
// }

// function setOperator(value) {
//   operator = value;
//   leftOperand = input.value;
//   clearInput();
// }

// function evaluate() {
//   rightOperand = input.value;
//   const left = parseFloat(leftOperand);
//   const right = parseFloat(rightOperand);
//   let result = 0;
//   switch (operator) {
//     case "+":
//       result = left + right;
//       break;
//     case "-":
//       result = left - right;
//       break;
//     case "*":
//       result = left * right;
//       break;
//     case "/":
//       result = left / right;
//       break;
//   }
//   input.value = result;
//   leftOperand = result.toString();
//   operator = "";
//   rightOperand = "";
// }

// // Add event listeners to buttons
// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     const value = e.target.innerText;
//     if (/\d/.test(value)) {
//       appendInput(value);
//     } else if (value === "AC") {
//       clearInput();
//       leftOperand = "";
//       operator = "";
//       rightOperand = "";
//     } else if (value === "+") {
//       setOperator(value);
//     } else if (value === "-") {
//       setOperator(value);
//     } else if (value === "*") {
//       setOperator(value);
//     } else if (value === "/") {
//       setOperator(value);
//     } else if (value === "=") {
//       evaluate();
//     }
//   });
// });
