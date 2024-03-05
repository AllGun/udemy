const helloPerson = (person) => {
  console.log(`02) Hello ${person}`);
};

helloPerson("Mikael");

const helloDefault = (personDefault = "User!") => {
  console.log(`03) Hello ${personDefault}!`);
};

helloDefault();
helloDefault("Erika");

const soma = (number1, number2) => {
  console.log(number1 + number2);
};

soma(20, 23);

const multiplica = (mult1, mult2) => {
  console.log(mult1 * mult2);
};

multiplica(4, 5);

const divisao = (dividendo, divisor);
