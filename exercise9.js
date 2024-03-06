// 9 (3p)
// Du ska skapa två klasser med ES6 syntax, Book och Author.

// Book ska ha följande egenskaper:
// title, author, rating
// och metoden
// displayBook som visar information om boken

// Author ska ha följande egenskaper:
// name, books (en array med böcker som är tom från början)
// och metoden addBook som lägger till en bok till författarens lista

// listBooks som visar en lista på författarens böcker

// * Solution: -------------------------------------
// class Book {
//   constructor(title, author, rating) {
//     this.title = title;
//     this.author = author;
//     this.rating = rating;
//   }

//   displayBook() {
//     console.log(
//       `Title: ${this.title}\nAuthor: ${this.author}\nRating: ${this.rating}`
//     );
//   }
// }

// class Author {
//   constructor(name) {
//     this.name = name;
//     this.books = [];
//   }

//   addBook(book) {
//     this.books.push(book);
//   }

//   listBooks() {
//     console.log(`Books by ${this.name}: `);
//     this.books.forEach((book) => console.log(book.title));
//   }
// }

// const author1 = new Author('J.K. Rowling');
// const book1 = new Book(
//   "Harry Potter and the Sorcerer's Stone",
//   'J.K. Rowling',
//   4.7
// );
// const book2 = new Book(
//   'Harry Potter and the Chamber of Secrets',
//   'J.K. Rowling',
//   4.6
// );

// author1.addBook(book1);
// author1.addBook(book2);

// author1.listBooks();
// book1.displayBook();


// * Logs: -------------------------------------
// Books by J.K. Rowling: 
// Harry Potter and the Sorcerer's Stone
// Harry Potter and the Chamber of Secrets
// Title: Harry Potter and the Sorcerer's Stone
// Author: J.K. Rowling
// Rating: 4.7