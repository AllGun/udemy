// Função para formatar um valor como moeda, adicionando "R$" e fixando duas casas decimais.
function formatMoney(value) {
  value = value.toFixed(2);
  return `R$ ${value}`;
}

// Função para colocar a palavra pessoas no singular o plural, escolhendo "pessoa" ou "pessoas" com base no valor.
function formatPerson(value) {
  if (value == 1) {
    return " pessoa";
  } else {
    return " pessoas";
  }
}

// Função principal que é chamada quando há uma alteração nos campos de entrada (input).
function update() {
  // Obter os valores do HTML usando IDs específicos.
  let bill = Number(document.getElementById("yourBill").value);
  let tipPercent = document.getElementById("tipInput").value;
  let split = document.getElementById("splitInput").value;

  // Exibir os valores obtidos no console para fins de depuração.
  console.log({ bill, tipPercent, split });

  // Calcular o valor da gorjeta, o total da conta com gorjeta e a divisão da conta por pessoa.
  let tipValue = (bill * tipPercent) / 100;
  let billTotal = bill + tipValue;
  let billEach = billTotal / split;

  // Exibir os valores calculados no console para fins de depuração.
  console.log({ tipValue, billTotal, billEach });

  // Atualizar o conteúdo do HTML com os valores calculados e formatados.
  document.getElementById("tipPercent").innerHTML = `${tipPercent} %`;
  document.getElementById("tipValue").innerHTML = `R$ ${formatMoney(tipValue)}`;
  document.getElementById("totalWithTip").innerHTML = `R$ ${formatMoney(
    billTotal
  )}`;
  document.getElementById("splitValue").innerHTML =
    `${split}` + formatPerson(split);

  document.getElementById("billEach").innerHTML = `R$ ${formatMoney(billEach)}`;
}
