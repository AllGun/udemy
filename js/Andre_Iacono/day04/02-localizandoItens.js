const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * Para lozalizar um item em uma lista use o indexof()
 * 1) Coloque o nome do array: numeros.
 * 2) Insira "indexof()" após o nome do array: numeros.indexof()
 * 3) Insira o item a ser procurado: numeros.indexof(13)
 *
 */
function localizarNumero(numero) {
  let resultadoBusca = numeros.indexOf(numero);
  if (resultadoBusca !== -1) {
    console.log(
      `O número ${numero} está localizado no índice ${resultadoBusca}.`
    );
  } else {
    console.log(`O número ${numero} não foi localizado.`);
  }
}

localizarNumero(3);
localizarNumero(13);
localizarNumero(9);
localizarNumero(90);
localizarNumero(0);
localizarNumero(1);
