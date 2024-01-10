// Por conveção, a primeira letra do constructor é maiúscula
function CreateBook(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const book1 = new CreateBook(
  "Atomic",
  "James Clear",
  306,
  "Fundamentals",
  "First Law"
);
const book2 = new CreateBook(
  "Akira",
  "Katsuhiro Otomo",
  440,
  "O Herói",
  "The gun"
);

console.log(book1);
console.log(book2);
