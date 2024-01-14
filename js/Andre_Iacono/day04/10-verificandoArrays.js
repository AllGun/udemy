const temperaturas = [18, 13, 24, 20, 17, 14, 8, 12, 28, 15];

const temperaturaNegativa = temperaturas.every(function (valor) {
  return valor >= 0;
});

console.log(temperaturaNegativa);
