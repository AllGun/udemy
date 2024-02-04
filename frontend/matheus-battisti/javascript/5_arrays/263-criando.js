// Criando um objeto chamado 'car' que representa as características de um carro.
const car = {
  engine: 2.0, // Atributo: motor com capacidade 2.0
  brand: "VW", // Atributo: marca do carro é "VW" (Volkswagen)
  model: "Tiguan", // Atributo: modelo do carro é "Tiguan"
  km: 20000, // Atributo: quilometragem do carro é 20000
};

// Exibindo o objeto 'car' no console.
console.log(car);

// Modificando o modelo do carro para "Gol".
car.model = "Gol";

// Exibindo o objeto 'car' novamente após a modificação.
console.log(car);

// Adicionando uma nova propriedade ao carro: a cor é "Azul".
car.color = "Azul";

// Exibindo o objeto 'car' após adicionar a nova propriedade.
console.log(car);

// Adicionando uma nova propriedade ao carro: número de portas é 4.
car.doors = 4;

// Exibindo o objeto 'car' após adicionar outra nova propriedade.
console.log(car);

// Deletando a propriedade 'km' do objeto 'car'.
delete car.km;

// Exibindo o objeto 'car' após excluir a propriedade 'km'.
console.log(car);
