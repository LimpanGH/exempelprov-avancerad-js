// 1.1 (1p) Skapa ett nytt object book2 med spread operatorn ...
// Det nya objektet ska updatera numberOfPages till 500.

const book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  numberOfPages: 218,
};
// Din kod här:
const book2 = {
  ...book,
  numberOfPages: 500,
};

// 1.2 (1p) Skapa tre variabler title och author genom
// destructuring av objektet book.

// Din kod här:
const { title, author } = book;

// Test
// console.log(book2); // Ska logga: { title: 'Stora Gatsby', author: 'F. Scott Fitzgerald', numberOfPages: 500 }
// console.log(`Titel: ${title}, Författare: ${author}`); // Ska logga: Titel: Stora Gatsby, Författare: F. Scott Fitzgerald
