// * 1.1 (2p) Använd filter för att filtrera numbers och
// skapa en ny array med alla tal som är mindre än 50.
// Den nya arrayen ska sparas i en variabel som heter smallerThan50.
const numbers = [200, 54, 582, 33, 4];

// Solution:
// const smallerThan50 = numbers.filter((items) => {
//   return items < 50;
// });

// * 1.2 (2p) Använd map på arrayen numbers2 och
// skapa en ny array där alla tal är tripplade. Alltså gånger 3.
// Den nya arrayen ska sparas i en variabel som heter tripple.
const numbers2 = [...numbers]; //[200, 54, 582, 33, 4];

// Solution:
// const tripple = numbers2.map((item) => {
//   return item * 3;
// });

// ! Test
// console.log(smallerThan50); // Ska logga [33, 4]
// console.log(tripple); // Ska logga [600, 162, 1746, 99, 12]
