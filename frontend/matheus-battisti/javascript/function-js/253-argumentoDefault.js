const greeting = (userName, greet = "Olá") => {
  console.log(`${greet}, ${userName}`);
  return;
};

greeting("Matheus");

greeting("Lucas", "Bom dia");

greeting();
