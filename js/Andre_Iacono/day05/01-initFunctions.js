// Function Declaration
// Pode ser chamada antes da declaração
soma(2, 3); // Executa a função soma antes da declaração

function soma(a, b) {
  total = a + b;
  console.log(total);
}

// Function Expression
const multiplicacao = function (a, b) {
  return a * b;
};

//Se a função for executada antes da função vai dar erro
multiplicacao(10, 5); // Executa a função após sua criação

let mult = multiplicacao(10, 5);

console.log(mult);

mult = multiplicacao;

mult(5, 5);
