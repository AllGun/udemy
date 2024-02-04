let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(typeof numeros);

const client = ["Matheus", "true", 2, 3.12, []];
console.log(client);
console.log(typeof client);

// Propriedades
console.log(numeros.length);

let userName = "Lucas Montando";
console.log(userName.length);

const letras = ["a", "b", "c"];

const concatArrays = letras.concat(numeros);
console.log(concatArrays);

const concatArrays2 = numeros.concat(letras);
console.log(concatArrays2);

//Obs: a ordem de concatenação é importante

const text = "ser ou não ser, eis a questão.";
console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);
console.log(text.indexOf("ã"));
console.log(text.indexOf(" "));

const text2 = "a b";
console.log(text2.length);
