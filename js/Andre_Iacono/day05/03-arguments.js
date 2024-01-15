function price() {
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;
}

console.log(price(5, 5, 5, 5, 1, 4));
