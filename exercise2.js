// 2.1 (1p) Skapa ett nytt object car2 med spread operatorn ...
// Det nya objektet ska updatera speed till 200.

const car = {
  name: 'Volvo',
  speed: 100,
};

// Din kod här:
const car2 = { ...car, speed: 200 };

// 2.2 (1p) Skapa två variabler name och speed genom
// destructuring av objektet car.

// Din kod här:
const {name, speed} = car


// Test
// console.log(car2); // Ska logga { name: 'Volvo', speed: 200 }
// console.log(`Name: ${name}, Speed: ${speed}`); // Name Volvo, Speed: 100


