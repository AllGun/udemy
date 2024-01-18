// Variáveis globais para armazenar informações do jogo
let computerNumber,
  userNumbers = [], // Lista de números que o usuário tentou
  attempts = 0, // Contador de tentativas
  maxAttempts = 10; // Número máximo de tentativas permitidas

// Função para iniciar um novo jogo, recarregando a página
function newGame() {
  window.location.reload();
}

// Função para inicializar o jogo, gerando um número aleatório para o computador
function init() {
  // Gerando um número aleatório entre 1 e 100 para o computador
  computerNumber = Math.floor(Math.random() * 100 + 1);
  // Registrando o número do computador e a lista de números do usuário no console para fins de depuração
  console.log({ computerNumber, userNumbers });
}

// Função para comparar o número apostado pelo usuário com o número do computador
function compareNumbers() {
  const betNumber = Number(document.getElementById("inputBox").value);
  userNumbers.push(" " + betNumber);
  document.getElementById("guesses").innerHTML = userNumbers;
  console.log(betNumber, userNumbers);

  // Verificando se o número de tentativas não ultrapassou o máximo permitido
  if (attempts < maxAttempts) {
    // Incrementa o contador de tentativas apenas se ainda houver tentativas disponíveis
    attempts++;

    // Comparando o número apostado com o número do computador
    if (betNumber > computerNumber) {
      // Atualizando a saída de texto indicando que o número é alto
      document.getElementById("textOutput").innerHTML = "High";
      // Atualizando a exibição do número de tentativas no HTML
      document.getElementById("attempts").innerHTML = attempts;
      // Limpa o campo de entrada para a próxima tentativa
      document.getElementById("inputBox").value = "";
    } else if (betNumber < computerNumber) {
      // Atualizando a saída de texto indicando que o número é baixo
      document.getElementById("textOutput").innerHTML = "Low";
      // Atualizando a exibição do número de tentativas no HTML
      document.getElementById("attempts").innerHTML = attempts;
      // Limpa o campo de entrada para a próxima tentativa
      document.getElementById("inputBox").value = "";
    } else {
      // Se o número apostado for igual ao número do computador, o usuário acertou
      // Atualizando a saída de texto para parabenizar o usuário
      document.getElementById("textOutput").innerHTML = "Congrats!";
      // Tornando o campo de entrada somente leitura após acertar
      document.getElementById("inputBox").setAttribute("readonly", "true");
    }
  } else {
    // Se o número de tentativas ultrapassou o máximo permitido, o usuário perdeu
    // Atualizando a saída de texto indicando a derrota e mostrando o número do computador
    document.getElementById(
      "textOutput"
    ).innerHTML = `You Lose! Computer number is ${computerNumber}`;
    // Tornando o campo de entrada somente leitura após atingir o limite de tentativas
    document.getElementById("inputBox").setAttribute("readonly", "true");
  }
}
