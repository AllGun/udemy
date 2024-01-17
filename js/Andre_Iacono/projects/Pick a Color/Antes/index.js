let yourColor = document.getElementById("color");
// Definindo uma lista de cores que serão utilizadas para fundo e fonte
const colors = [
  "Red",
  "Blue",
  "Yellow",
  "Purple",
  "Green",
  "White", // Cor branca
  "Black", // Cor preta
];

// Obtendo uma referência para o botão com o id "btn" no HTML
const btn = document.getElementById("btn");

// Adicionando um ouvinte de eventos para o clique no botão
btn.addEventListener("click", function () {
  // Obtendo um índice aleatório para a cor de fundo
  let randomColor = getRandomColor();

  // Obtendo um índice aleatório para a cor da fonte, evitando que seja igual à cor de fundo
  let fontColor = getFontColor(randomColor);

  // Aplicando a cor de fundo ao corpo (body) do documento HTML
  document.body.style.background = colors[randomColor];
  document.getElementById("color").innerHTML = `${colors[randomColor]}`;
  // Aplicando a cor da fonte ao primeiro elemento h1 encontrado no documento HTML
  document.getElementsByTagName("h1")[0].style.color = colors[fontColor];

  // Exibindo os índices aleatórios no console para fins de depuração
  console.log(randomColor, fontColor);
});

// Função para obter um índice aleatório da array de cores
function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}

// Função para obter um índice aleatório para a cor da fonte, evitando que seja igual à cor de fundo
function getFontColor(bgColorIndex) {
  // Declaração da variável para armazenar o índice da cor da fonte
  let fontColor;

  // Início de um loop 'do-while'
  do {
    // Atribui um índice aleatório gerado pela função getRandomColor() à variável fontColor
    fontColor = getRandomColor();
  } while (fontColor === bgColorIndex); // Continua gerando índices até que a cor da fonte seja diferente da cor de fundo

  // Retorna o índice escolhido para a cor da fonte
  return fontColor;
}
