const input = document.getElementById("input");
const buttons = document.getElementsByClassName("buttons");
console.log(buttons);
[...buttons].map((button) => {
  button.addEventListener("click", () => {
    if (button.innerText === "1") {
      input.value += parseInt(button.innerText);
    }
  });
});
