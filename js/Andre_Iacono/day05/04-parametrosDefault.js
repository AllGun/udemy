function totalDebito(valor, taxa = 2.5, meses = 24) {
  return ((valor * taxa) / 100) * meses + valor;
}

console.log(totalDebito(10000));
