// Função untilTen que recebe dois parâmetros n e m
const untilTen = (n, m) => {
  // Verifica se n é menor que 1
  if (n < 1) {
    console.log("A função parou de executar!");
  } else {
    // Calcula a diferença entre n e m
    const x = n - m;
    // Imprime o resultado
    console.log(x);
    // Chama recursivamente a função untilTen com os novos valores
    untilTen(x, m);
  }
};

// Chama a função untilTen com os valores iniciais 100 e 1
untilTen(100, 1);

let factorial = (x) => {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
};

console.log(factorial(6));
