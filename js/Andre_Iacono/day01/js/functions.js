//Conchetes = Brackets
//Chaves = Curly Brackets or Curly Braces

function soma(a, b) {
  console.log(a + b);
}

soma(2, 3);

//Criando a função
function salesStatus(status) {
  console.log(`Transação: ${status}`);
}

//Chamando a função
salesStatus("aprovado");

function percentage10a(price) {
  console.log(price - (price * 10) / 100);
}

percentage10a(100);
percentage10a(10);
percentage10a(1);

function percentage10b(price) {
  console.log(price * 0.9);
}
percentage10b(100);

// function com return
function soma(number1, number2) {
  return number1 + number2;
}

// chamando a função e armazenano o resultado dentro de uma variável
let total = soma(10, 3);
//"Imprimindo" a variável total
console.log(total);
