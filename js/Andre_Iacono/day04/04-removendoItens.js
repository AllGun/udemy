const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let removido;

console.log(numeros);
console.log();

// Removendo do final
removido = numeros.pop();
console.log(numeros);
console.log("Número removido: " + removido);
console.log();

//Removendo do Início
removido = numeros.shift();
console.log(numeros);
console.log("Número removido: " + removido);
console.log();

//Removendo com splice
removido = numeros.splice(5, 1);
console.log(numeros);
console.log("Número removido: " + removido);
console.log();

//Removendo todos
removido = numeros.splice(0, numeros.length);
console.log(numeros);
console.log("Número removido: " + removido);
