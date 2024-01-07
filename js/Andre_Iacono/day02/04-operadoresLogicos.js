function podeVotar(idadeMinima, tituloEleitor) {
  let eleitor = idadeMinima && tituloEleitor ? "Pode votar" : "Não pode votar";
  console.log(eleitor);
}

podeVotar(true, true);
podeVotar(false, true);
podeVotar(true, false);
podeVotar(false, false);
