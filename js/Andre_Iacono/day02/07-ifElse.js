function controleVelocidade(velocidade, corCarro, temCnh) {
  let velocidadeStatus;
  if (velocidade > 110) {
    velocidadeStatus = "Acima da velocidade permitida.";
  } else if (velocidade > 40 && velocidade <= 110) {
    velocidadeStatus = "Velocidade permitida.";
  } else {
    velocidadeStatus = "Muito lento.";
  }

  console.log(velocidadeStatus);

  /*if (corCarro) {
    console.log(corCarro);
  }
  */

  corCarro ? console.log(corCarro) : null;

  /* if (temCnh) {
    console.log("Motorista habilitado.");
  }
*/

  temCnh ? console.log("Motorista habilitado.") : null;

  console.log();
}

controleVelocidade(150);
controleVelocidade(100);
controleVelocidade(35);
controleVelocidade(65, "Azul");
controleVelocidade(90, "Prata");
controleVelocidade(85, "Vermelho", true);
controleVelocidade(110, "Vermelho", true);
