const arr1 = [1, 2, 3, 4, 5];
// console.log('Arr1: ' + arr1);

//todo Returning a new array, does not alter the original array.
//!  Filter
// const filter = arr1.filter((item) => {
//   return item < 3;
// });
// console.log('Arr1.filter: ' + filter);

// console.log('Arr1: ' + arr1)

//! Map
// const map = arr1.map((item) => {
//   return item + 1;
// });
// console.log('Arr1.map: ' + map);

// console.log('Arr1: ' + arr1);

//! Reduce
// const reduce = arr1.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log('arr1.reduce: ' + reduce);

// console.log('Arr1: ' + arr1);

//todo Does not return a new array, iterates over the array and changes it.
//! forEach
// const arr3 = [1, 2, 3, 4, 5];
// arr3.forEach((element, index, array) => {
//   array[index] = element * 2;
// });
//   console.log(arr3);

//! for
// const arr4 = [1, 2, 3, 4, 5];
// const doubledArr4 = [];

// for (let i = 0; i < arr4.length; i++) {
//   doubledArr4.push(arr4[i] * 2);
// }

// console.log(doubledArr);

//! while
// const arr5 = [1, 2, 3, 4, 5];
// const doubbledArr5 = [];

// let i = 0;

// while (i < arr5.length) {
//   doubbledArr5.push(arr5[i] * 2);
//   i++;
// }

// console.log(doubbledArr5);

//! do while
// const arr6 = [1, 2, 3, 4, 5];
// const doubbledArr6 = [];
// let i = 0;

// do {
//   doubbledArr6.push(arr6[i] * 2);
//   i++;
// } while (i < arr6.length);

// console.log(doubbledArr6);

//! for of
// const arr7 = [1, 2, 3, 4, 5];

// const bingo =() => {
//     for (const element of arr7) {
//         console.log(element);
// }}

// bingo()

//! for in  ITERATE OVER OBJECT
// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York',
// };

// const bongo = () => {
//   for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//       console.log(key + ': ' + person[key]);
//     }
//   }
// };

// bongo();
