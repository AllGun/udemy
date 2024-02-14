const testeArrow = () => {
  console.log("Arrow function");
};

testeArrow();

const parOuImpar = (numero) => {
  if (numero % 2 === 0) {
    console.log(`O número ${numero} é par.`);
  }

  console.log(`O número ${numero} é ímpar.`);
};

parOuImpar(4);
parOuImpar(5);
parOuImpar(55);

const potenciacao = (base) => {
  let potencia = base ** 2;
  console.log(`${base} x ${base} = ${potencia}`);
};

potenciacao(10);
potenciacao(5);

// Parametro opcional

const multiplication = (number1, number2) => {
  if (number2 === undefined) {
    return number1 * 2;
  } else {
    return number1 * number2;
  }
};

let a = multiplication(20, 3);
console.log(a);

console.log(multiplication(20, 3));
console.log(multiplication(20));

const greeting = (personName) => {
  if (!personName) {
    console.log("Hi");
    return;
  }

  console.log(`Hi, ${personName}`);
};

greeting("Carlos");
greeting();

const helloWorld = () => {
  console.log("Hello World!");
};

helloWorld();

const helloPerson = (personName) => {
  console.log(`Hello ${personName}!`);
};

helloPerson("Sally");

const helloPersonDefault = (personName = " user") => {
  console.log(`Hello ${personName}`);
};

helloPersonDefault();
helloPersonDefault("Pomnimi");
