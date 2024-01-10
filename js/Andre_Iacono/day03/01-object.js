let book = {
  bookTitle: "Atomic Habits",
  bookAuthor: "James Clear",
  bookPages: 306,
  bookChapters: {
    chapter01: "Fundamentals",
    chapter02: "1st Law",
  },
  printBook: function printBook() {
    console.log(book.bookTitle);
  },
};

console.log(book);
console.log(book.bookAuthor);
console.log(book.bookPages);
console.log(book.bookChapters.chapter01);

console.log(book.printBook());
