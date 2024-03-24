//*  4.1 (3p) -------------------------
// Skriv klart funktionen updatePeople som
// lägger till en property:
// - adult: true, om personen i arrayen är 18 år eller över
// - annars en property: adult: false

//funktionen ska returnera den uppdaterade arrayen.

// Använd map och spread operator.

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 15 },
  { name: 'Charlie', age: 35 },
  { name: 'Fred', age: 19 },
  { name: 'Alice', age: 6 },
];

//* Solution with if else:
// let updatePeople = (person) => {
//   let isAdult;

//   return person.map((person) => {
//     if (person.age >= 18) {
//       isAdult = true;
//     } else {
//       isAdult = false;
//     }
//     return {
//       ...person,
//       isAdult,
//     };
//   });
// };

//* Solution with ternary:
// function updatePeople(people) {
//   return people.map((param) => {
//     return {
//       ...param,
//       adult: param.age >= 18 ? true : false,
//     };
//   });
// }

// const updatedPeople = updatePeople(people);
// console.log(updatedPeople);

// * 4.2 (2p) Skriv klart funktionen getAdults med arrayen som returneras från
// updatePeople som input och som returnerar en array med bara vuxna (adult: true).
// Använd filter.

// Solution:
// function getAdults(people) {
//   return people.filter((param) => param.adult === true);
// }

// const adults = getAdults(updatedPeople);
// console.log(adults);

// * console.log(updatePeople(people)); // Ska logga
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

// *  console.log(getAdults(adults)); // Ska logga
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

//! Version1 ⬆ ---------------- Version 2 ⬇--------------------------------------------------------------------------------

//*  4.1 (3p) -------------------------------------------------------
// Skriv klart funktionen updatePeople som
// lägger till en property:
// - adult: true, om personen i arrayen är 18 år eller över
// - annars en property: adult: false

//funktionen ska returnera den uppdaterade arrayen.

// Använd map och spread operator.

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 15 },
  { name: 'Charlie', age: 35 },
  { name: 'Fred', age: 19 },
  { name: 'Alice', age: 6 },
];

// Solution:
// function updatePeople() {
//   return people.map((param) => {
//     return {
//       ...param,
//       adult: param.age >= 18 ? true : false,
//     };
//   });
// }
// let updatedPeople = updatePeople()
// console.log(updatedPeople);

// * 4.2 (2p) Skriv klart funktionen getAdults med arrayen som returneras från -----------------------------
// updatePeople som input och som returnerar en array med bara vuxna (adult: true).
// Använd filter.

// Solution:
// let getAdults = (updatedPeople) => {
// return updatedPeople.filter((person)=>{
//   return person.adult === true
// })
// }
// console.log(getAdults(updatedPeople));

// * console.log(updatePeople(people)); // Ska logga
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

// *  console.log(getAdults(adults)); // Ska logga
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
