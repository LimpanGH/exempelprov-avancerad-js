// 4.1 (3p) Skriv klart funktionen updatePeople
// som lägger till en property:
// adult: true
// om personen i arrayen är 18 år eller över annars
// en property:
// adult: false
// funktionen ska returnera den uppdaterade arrayen.
// Använd map och spread operator.

const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 15 },
    { name: "Charlie", age: 35 },
    { name: "Fred", age: 19 },
    { name: "Alice", age: 6 },
  ];
  
  function updatePeople(people) {
    // Din kod här:
  

  }
  
// 4.2 (2p) Skriv klart funktionen getAdults med arrayen som returneras från 
// updatePeople som input och som returnerar en array med bara vuxna (adult: true).
// Använd filter.

function getAdults(adult) {
    // Din kod här:

  }


// Test
// console.log(updatePeople(people)); // Ska logga 
// [
//     {
//         "name": "Alice",
//         "age": 30,
//         "adult": true
//     },
//     {
//         "name": "Bob",
//         "age": 15,
//         "adult": false
//     },
//     {
//         "name": "Charlie",
//         "age": 35,
//         "adult": true
//     },
//     {
//         "name": "Fred",
//         "age": 19,
//         "adult": true
//     },
//     {
//         "name": "Alice",
//         "age": 6,
//         "adult": false
//     }
// ]
// console.log(getAdults(adults)); // Ska logga
// [
//     {
//         "name": "Alice",
//         "age": 30,
//         "adult": true
//     },
//     {
//         "name": "Charlie",
//         "age": 35,
//         "adult": true
//     },
//     {
//         "name": "Fred",
//         "age": 19,
//         "adult": true
//     }
// ]