const tampaBayPlayers = [
  { id: 01, nome: "Baker Mayfield", posicao: "Quarterback" },
  { id: 02, nome: "Mike Evans", posicao: "Wide Receiver" },
  { id: 03, nome: "Lavonte David", posicao: "Linebacker" },
  { id: 04, nome: "Tristan Wirfs", posicao: "Offensive Tackle" },
  { id: 05, nome: "Devin White", posicao: "Linebacker" },
  { id: 06, nome: "Chris Godwin", posicao: "Wide Receiver" },
  { id: 07, nome: "Vita Vea", posicao: "Nose Tackle" },
  { id: 08, nome: "Cade Otton", posicao: "Tight End" },
  { id: 09, nome: "Cody Mauch", posicao: "Guard" },
  { id: 10, nome: "Carlton Davis III", posicao: "Cornerback" },
];

console.log(tampaBayPlayers);

console.log(
  tampaBayPlayers.find(function (tampaBay) {
    return tampaBay.nome == "Baker Mayfield";
  })
);

function encontrarJogador(nomeJogador) {
  let encontrou = tampaBayPlayers.find(function (tampaBay) {
    return tampaBay.nome == nomeJogador;
  });
  console.log(encontrou);
}

encontrarJogador("Baker Mayfield");
encontrarJogador("Mike Evans");
encontrarJogador("Cody Mauch");
encontrarJogador("Vita Vea");

console.log();

console.log(
  tampaBayPlayers.find((tampaBay) => tampaBay.nome == "Carlton Davis III")
);

console.log();

function encontrarJogador2(nomeJogador2) {
  let encontrou2 = tampaBayPlayers.find(
    (tampaBay) => tampaBay.nome == nomeJogador2
  );
  console.log(encontrou2);
}

encontrarJogador2("Cade Otton");
