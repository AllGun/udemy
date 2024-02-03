function someFunction() {
  let text = "Alguma coisa";
  function dislplay() {
    console.log(text);
  }

  dislplay();
}

someFunction();

const multiplicationClosure = (numero1) => {
  return (numero2) => {
    return numero1 * numero2;
  };
};

const result1 = multiplicationClosure(5);
const result2 = multiplicationClosure(10);
const result3 = result2(10);

console.log(result1, result2);

console.log(result1(5), result2(10));

console.log(result3);
console.log(result3 * 3);
