// Soru 2
// "Hello, world!" yazısını "olleH, dlrow!" olarak tersine çeviren fonksiyonu yazınız.

const text = "Hello, world!";

const writeReverse = (string) => {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
};

console.log(writeReverse(text));
