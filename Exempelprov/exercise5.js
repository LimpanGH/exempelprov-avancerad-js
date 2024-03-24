// * 5. (4p) Shoppingcart med separata priser
// Skriv klart funktionen calculateTotalPrice som tar en array med produkter
// och ett objekt med priser som input och returnerar det totala priset

const modelPrices = {
  EOS_70D: 100,
  D3400: 120,
  Hero_4: 80,
  Phantom: 50,
  Karma: 200,
};

const cameraGear = [
  { name: 'Camera', brand: 'Canon', model: 'EOS_70D' },
  { name: 'Camera', brand: 'Nikon', model: 'D3400' },
  { name: 'Camera', brand: 'GoPro', model: 'Hero_4' },
  { name: 'Drone', brand: 'DJI', model: 'Phantom' },
  { name: 'Drone', brand: 'GoPro', model: 'Karma' },
];

// Solution1:
// function calculateTotalPrice(shoppingCart, prices) {
//   let totalPrice = 0;

//   for (let i = 0; i < shoppingCart.length; i++) {
//     const product = shoppingCart[i];
//     const price = prices[product.model];

//     if (price !== undefined) {
//       totalPrice += price;
//     } else {
//       console.log('Price missing for', product.model);
//     }
//   }
//   return totalPrice;
// }

// Solution2:
// function calculateTotalPrice(shoppingCart, prices) {
//   let totalPrice = 0;

//   for (let i = 0; i < shoppingCart.length; i++) {
//     const product = shoppingCart[i];

//     if (prices.hasOwnProperty(product.model)) {
//       totalPrice += prices[product.model];
//     } else {
//       console.log('Pris saknas för', product.model);
//     }
//   }
//   return totalPrice;
// }

// Solution2 med reduce() :
// function calculateTotalPrice(shoppingCart, prices) {
//   return shoppingCart.reduce((accumulator, product) => {
//     const model = product.model;
//     if (prices.hasOwnProperty(model)) {
//       return accumulator + prices[model];
//     } else {
//       console.log(`Price not found for model: ${model}`);
//       return totalPrice;
//     }
//   }, 0);
// }

// Test
// console.log(calculateTotalPrice(cameraGear, modelPrices)); // Ska logga 550

// * I Solution2 och solution3 används hasOwnProperty() för att kontrollera om prices-objektet har en egenskap med namnet,
// *  som matchar product.model. Om det finns en egenskap i prices-objektet med nyckeln product.model innebär det,
// *  att det finns ett pris för den aktuella produkten i shoppingvagnen. Därför läggs priset till det totala priset.
