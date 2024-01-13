let runArray; //para testes
let pesquisarNumero;
// Cria uma lista de números
const num = [7, 8, 9];

//Adiciona itens ao final da lista
num.push(10, 11, 12);

//Adiciona itens ao início da lista
num.unshift(1, 2, 3);

/**Adiciona itens na lista a partir do index 3
 * Primeiro elemento: 3
 *      - O primeiro número é o index onde se iniciara a inserção;
 * O segundo elemento: 0
 *      - É a quandade de itens que serão excluídos;
 *      - A exclução é a partir do index de início;
 * Do terceiro elemento em diante: 4, 5, 6
 *      - São os itens que serão inseridos na lista.
 */
num.splice(3, 0, 4, 5, 6);

runArray = num;
console.log(runArray);
