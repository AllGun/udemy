let nomeProduto = prompt("Nome do produto:");
let precoProduto = Number(prompt("Preço do produto:"));
let statusProduto;

if (precoProduto >= 20) {
  statusProduto = "Aprovado";
} else {
  statusProduto = "Reprovado";
  alert("O preço do produto precisa ser maior que R$ 20,00");
}

document.getElementById("nomeProduto").innerHTML = nomeProduto;
document.getElementById("precoProduto").innerHTML = `R$ ${precoProduto}`;
document.getElementById("statusProduto").innerHTML = statusProduto;
