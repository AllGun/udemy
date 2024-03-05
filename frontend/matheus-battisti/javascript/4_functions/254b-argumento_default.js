const customGreeting = (userName, greet = "Olá") => {
  return `${greet}, ${userName}`;
};

console.log(customGreeting("Matheus"));

console.log(customGreeting("João", "Bom dia"));

const repeatText = (text, repeat = 2) => {
  for (let i = 0; i < repeat; i++) {
    console.log(text);
  }
};

repeatText("Hi there!");

repeatText("Agora repete 5x", 5);
