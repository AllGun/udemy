const horarios = [3, 5, 6, 2, 8, 2, 10, 12, 22];

const horarioTarde = horarios.filter(function (valor) {
  return valor >= 6;
});

console.log(horarioTarde);
