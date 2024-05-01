const input = document.getElementById("input");
const buttons = document.getElementsByClassName("buttons");

let num1 = "";
let operator = "";

[...buttons].map((button) => {
  button.addEventListener("click", () => {
    if (
      button.innerText === "0" ||
      button.innerText === "1" ||
      button.innerText === "2" ||
      button.innerText === "3" ||
      button.innerText === "4" ||
      button.innerText === "5" ||
      button.innerText === "6" ||
      button.innerText === "7" ||
      button.innerText === "8" ||
      button.innerText === "9"
    ) {
      input.value += parseInt(button.innerText);
    } else if (button.innerText === "+") {
      if (input.value !== "") {
        num1 = parseInt(input.value);
        operator = "+";
        input.value = "";
      }
    } else if (button.innerText === "-") {
      if (input.value !== "") {
        num1 = parseInt(input.value);
        operator = "-";
        input.value = "";
      }
    } else if (button.innerText === "x") {
      if (input.value !== "") {
        num1 = parseInt(input.value);
        operator = "*";
        input.value = "";
      }
    } else if (button.innerText === "/") {
      if (input.value !== "") {
        num1 = parseInt(input.value);
        operator = "/";
        input.value = "";
      }
    } else if (button.innerText === "=") {
      if (input.value !== "") {
        const num2 = parseInt(input.value);
        let result;
        switch (operator) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            result = num1 / num2;
            break;
          default:
            result = "Error";
        }
        input.value = result;
        num1 = "";
        operator = "";
      }
    }
  });
});
