function corDoCarro(corCliente) {
  let corEstoque = "Black";
  let corVendida = corCliente || corEstoque;
  console.log(corVendida);
}

corDoCarro("White");
corDoCarro(undefined);
corDoCarro(null);
corDoCarro();
