const input = document.getElementById("input");
const buttons = document.getElementsByClassName("buttons");

const numbers = [];
let operator = "";
let decimalClicked = false;

[...buttons].map((button) => {
  button.addEventListener("click", () => {
    if (isButtonTextDigit(button)) {
      input.value += parseFloat(button.innerText);
    } else if (input.value === "") {
      return;
    } else if (button.innerText === ".") {
      // BUNA BAKICAKSIN
    } else if (button.innerText === "+/-") {
      const currentValue = parseFloat(input.value);
      input.value = -currentValue;
    } else if (
      button.value === "/" ||
      button.value === "x" ||
      button.value === "+" ||
      button.value === "-"
    ) {
      getOperator(button.value);
    } else if (button.innerText === "=") {
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
      numbers.length = 0;
      operator = "";
      console.log(result);
    } else if (button.innerText === "AC") {
      numbers.length = 0;
      input.value = "";
      operator = "";
    }
  });
});

const getOperator = (value) => {
  numbers.push(parseFloat(input.value));
  operator = value;
  input.value = "";
};

const isButtonTextDigit = (button) => {
  return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(
    button.innerText
  );
};
