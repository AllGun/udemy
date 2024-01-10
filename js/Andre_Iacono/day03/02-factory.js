function createBook(title, author, pages, chapter1, chapter2) {
  let book = {
    bookTitle: title,
    bookAuthor: author,
    bookPages: pages,
    bookChapters: {
      chapter1: chapter1,
      chapter2: chapter2,
    },
  };
  return book;
}

const book1 = createBook("Atomic", "James", 306, "Fundamentals", "First Law");
const book2 = createBook("Akira", "Katsuhiro Otomo", 440, "O Herói", "The gun");

//Adicionando uma característica que só se aplica a um dos livros
book1.color = "White";

console.log(book1);
console.log(book2);
