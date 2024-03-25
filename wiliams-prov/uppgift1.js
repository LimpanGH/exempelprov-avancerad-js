// * 1. Spread med objekt (2p) --------------
// Skriv klart funktionen addIsFast som tar ett bil-objekt och returnerar en kopia
// av objektet och dessutom lägger till egenskapen isFast på det nya objektet.
// Om speed är över 100 ska isFast vara true annars ska det vara false

const car = {
  name: 'Volvo',
  speed: 120,
};

// let addIsFast = (car) => {}

// Solution:
// let addIsFast = () => {
//   return {
//    ...car,
//    IsFast: car.speed >100 ? true : false
//   }
//  }

// * 1.2 (1p) Skapa tre variabler name, speed och isFast genom --------------
// destructuring av objektet som returneras från addIsFast.

// Solution:
// let car2 = addIsFast(car);
// const { speed, name, isFast } = car2;

// console.log(addIsFast(car)); // Ska logga { name: "Volvo", speed: 120, isFast: true }
// console.log(name, speed, isFast); // Ska logga "Volvo", 120, true
