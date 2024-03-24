// 5. (2p) Shoppingcart med priser
// Skriv klart funktionen calculateTotalPrice som tar en array med produkter och returnerar det totala priset
// Använd reduce .

const cameraGear = [
  { name: 'Camera', brand: 'Canon', model: 'EOS_70D', price: 100 },
  { name: 'Camera', brand: 'Nikon', model: 'D3400', price: 120 },
  { name: 'Camera', brand: 'GoPro', model: 'Hero_4', price: 80 },
  { name: 'Drone', brand: 'DJI', model: 'Phantom', price: 50 },
  { name: 'Drone', brand: 'GoPro', model: 'Karma', price: 200 },
];

function calculateTotalPrice() {
  
}

// Solution:
// function calculateTotalPrice() {
//   const total = cameraGear.reduce((acc, item) => acc + item.price, 0);
//  return total;
// }

// Test
// console.log(calculateTotalPrice()); // Ska logga: 550
