const input = document.getElementById("input");
const buttons = document.getElementsByClassName("buttons");
console.log(buttons);
[...buttons].map((button) => {
  button.addEventListener("click", () => {
    if (button.innerText === "0") {
      input.value += parseInt(button.innerText);
    } else if (button.innerText === "1") {
      input.value += parseInt(button.innerText);
    } else if (button.innerText === "2") {
      input.value += parseInt(button.innerText);
    } else if (button.innerText === "3") {
      input.value += parseInt(button.innerText);
    } else if (button.innerText === "4") {
      input.value += parseInt(button.innerText);
    } else if (button.innerText === "5") {
      input.value += parseInt(button.innerText);
    } else if (button.innerText === "6") {
      input.value += parseInt(button.innerText);
    } else if (button.innerText === "7") {
      input.value += parseInt(button.innerText);
    } else if (button.innerText === "8") {
      input.value += parseInt(button.innerText);
    } else if (button.innerText === "9") {
      input.value += parseInt(button.innerText);
    }
  });
});
