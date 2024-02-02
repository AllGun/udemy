let counter = 0;

for (let i = 0; i <= 25; i++) {
  console.log(i);
}

console.log();

for (let i = 0; i <= 25; i++) {
  if (i > 1 && i < 24) {
    continue;
  }
  console.log(i);
}
