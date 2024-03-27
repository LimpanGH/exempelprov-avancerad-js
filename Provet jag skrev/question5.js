// 5. (2p) En lista med böcker och  priser
// Skriv klart funktionen calculateTotalPrice som tar en array med produkter och returnerar det totala priset
// Använd reduce

const booksInCart = [
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 15 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 12 },
  { title: '1984', author: 'George Orwell', price: 10 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 18 },
  { title: 'Moby Dick', author: 'Herman Melville', price: 22 },
];

function calculateTotalBookPrice(cart) {
  let total = cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  return total;
}

// Test
// console.log(`$${calculateTotalBookPrice(booksInCart)}`); // Ska logga:  $77
