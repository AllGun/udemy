// Switch Case

function qualAeroporto(siglaAeroporto) {
  switch (siglaAeroporto) {
    case "GYN":
      console.log("Goiânia");
      break;
    case "BSB":
      console.log("Brasília");
      break;
    default:
      console.log("Esse aeroporto não existe.");
  }
}

qualAeroporto("GYN");
qualAeroporto("BSB");
qualAeroporto("AWS");
