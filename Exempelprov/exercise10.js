// 10 (2p)
// Använd ES6 moduler för att importera och exportera klasserna Book och Author, Book.js och Author.js.
// Skapa en tredje fil, main.js, där du importerar klasserna och skapar en författare och en lägger till minst två böcker till författaren.
// Skriv ut författarens böcker och information om böckerna, samt författarens namn
// * OBS! Ha med filändelsen i importen, det behövs efterssom bundlers löser detta men i detta repo har vi ingen bundler.

// export class Book {
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

// export class Author {
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
