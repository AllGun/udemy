//Esvaziando um Array

/**
 * Se o array for declarado com Let
 * Podemos atribuir um array vazio
 */
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros);

numeros = [];
console.log(numeros);

/**
 * Se o array foi criado com const podemos fazer...
 */
const numerosConst = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
console.log(numerosConst);
console.log(numerosConst.length);

// Removendo atribuindo ao tamanho do array = 0
numerosConst.length = 0;
console.log(numerosConst);
console.log(numerosConst.length);

// Removendo com splice
const numerosConst2 = [210, 211, 212, 213, 214, 215, 216, 217, 218, 219];
console.log(numerosConst2);

numerosConst2.splice(0, numerosConst2.length);
console.log(numerosConst2);
console.log(numerosConst2.length);
