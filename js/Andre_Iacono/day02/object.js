// Object
let pen = {
  itemName: "Pen",
  itemAmount: 100,
  itemAvailable: true,
  itemColor: "blue",
  itemPrice: 1.5,
};

console.log(pen);

console.log(pen.itemName);
console.log(`Item: ${pen.itemName}`);
console.log(`Quantidade: ${pen.itemAmount}`);
console.log(`Disponibilidade: ${pen.itemAvailable}`);
console.log(`Cor: ${pen.itemColor}`);
console.log(`Preço: R$ ${pen.itemPrice}`);

pen.itemPrice = 1.51;
console.log(`Preço: R$ ${pen.itemPrice}`);

console.log();

pen.itemName = "Caneta";
console.log(pen.itemName);
