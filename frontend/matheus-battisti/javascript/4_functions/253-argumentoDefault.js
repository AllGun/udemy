const greeting = (userName, greet = "Olá") => {
  console.log(`${greet}, ${userName}`);
  return;
};

greeting("Matheus");

greeting("Lucas", "Bom dia");

greeting();

const repeatText = (text, repeat = 2) => {
  for (let i = 0; i < repeat; i++) {
    console.log(text);
  }
};

repeatText("Dev selecionado!");
repeatText("Dev selecionado, parabêns!", 5);
