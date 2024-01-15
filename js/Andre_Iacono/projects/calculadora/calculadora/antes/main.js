let number1, number2, total;

document.getElementById("btnSomar").addEventListener("click", function (event) {
  // Aqui, 'event.target' é o botão que foi clicado
  console.log("Clicou no botão de Somar");
  // Adicione o código que você deseja executar quando o botão for clicado
  total = number1 + number2;
  console.log(total);
  document.getElementById("resultArea").innerHTML = total;
});

function somar() {
  number1 = Number(document.getElementById("number1").value);
  number2 = Number(document.getElementById("number2").value);

  console.log(number1);
  console.log(number2);
}

function subtrair() {
  number1 = Number(document.getElementById("number1").value);
  number2 = Number(document.getElementById("number2").value);

  console.log(number1);
  console.log(number2);

  total = number1 - number2;
  console.log(total);

  document.getElementById("resultArea").innerHTML = total;
}

function multiplicar() {
  number1 = Number(document.getElementById("number1").value);
  number2 = Number(document.getElementById("number2").value);

  console.log(number1);
  console.log(number2);

  total = number1 * number2;
  console.log(total);

  document.getElementById("resultArea").innerHTML = total;
}

function dividir() {
  number1 = Number(document.getElementById("number1").value);
  number2 = Number(document.getElementById("number2").value);

  console.log(number1);
  console.log(number2);

  total = number1 / number2;
  console.log(total);

  document.getElementById("resultArea").innerHTML = total;
}
