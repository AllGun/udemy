let customers = [
  "Nathália",
  "Hugo",
  "Mathias",
  "Silvana",
  "Eliana",
  "Oliveira",
  "Gabriel",
];
console.log(customers);

customers.sort();

console.log(customers);

let numbers = [2, 6, 1, 9, 4, 3, 11, 5, 7, 10, 8];
console.log(numbers);

// Ordem crescente
numbers.sort(function (numberA, numberB) {
  return numberA - numberB;
});
console.log(numbers);

// Ordem decrescente
numbers.sort(function (numberA, numberB) {
  return numberB - numberA;
});

console.log(numbers);

console.log();

let numeros = [];
for (let i = 1; i < 10; i++) {
  numeros.push(i);
}
console.log(numeros);

numeros.sort(function (a, b) {
  return b - a;
});

console.log(numeros);
