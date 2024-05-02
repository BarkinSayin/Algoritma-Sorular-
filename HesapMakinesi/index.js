const input = document.getElementById("input");
const buttons = document.getElementsByClassName("buttons");

let numbers = [];
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
      input.value += parseFloat(button.innerText);
    } else if (button.innerText === "+/-") {
      if (input.value !== "") {
        const currentValue = parseFloat(input.value);
        input.value = -currentValue;
      }
    } else if (button.innerText === "+") {
      if (input.value !== "") {
        numbers.push(parseFloat(input.value));
        operator = "+";
        input.value = "";
      }
    } else if (button.innerText === "-") {
      if (input.value !== "") {
        numbers.push(parseFloat(input.value));
        operator = "-";
        input.value = "";
      }
    } else if (button.innerText === "x") {
      if (input.value !== "") {
        numbers.push(parseFloat(input.value));
        operator = "*";
        input.value = "";
      }
    } else if (button.innerText === "/") {
      if (input.value !== "") {
        numbers.push(parseFloat(input.value));
        operator = "/";
        input.value = "";
      }
    } else if (button.innerText === "=") {
      if (input.value !== "") {
        numbers.push(parseFloat(input.value));
        let result;
        switch (operator) {
          case "+":
            result = 0;
            numbers.forEach((num) => (result = result + parseFloat(num)));
            break;
          case "-":
            result = numbers[0];
            numbers.shift();
            numbers.forEach((num) => (result = result - parseFloat(num)));
            break;
          case "*":
            result = 1;
            numbers.forEach((num) => (result = result * parseFloat(num)));
            break;
          case "/":
            result = numbers[0];
            numbers.shift();
            numbers.forEach((num) => (result = result / parseFloat(num)));
            break;
          default:
            result = "Error";
        }
        input.value = result;
        numbers = [];
        operator = "";
        console.log(result);
      }
    } else if (button.innerText === "AC") {
      numbers = [];
      input.value = "";
      operator = "";
    }
  });
});
