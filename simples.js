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

//! rest - The rest parameter (...) is used to collect multiple elements/arguments into an array.
// function collectNumbers(...numbers) {
//   return numbers;
// }

// const collected = collectNumbers(1, 2, 3, 4, 5);
// console.log(collected);

//! spread - The spread operator (...) is used to expand an array into individual elements.
// const arr9 = [4,5,6];
// const arr10 = [7,8,9];

// const combinedArrays = () => {
//     return [1,2,3,...arr9, ...arr10]
// }

// const logCombinedArrays = combinedArrays()
// console.log(logCombinedArrays);

//! rest and spread - Using rest parameter to collect arguments into an array.
// function collectNumbers2(...numbers) {
//   return numbers;
// }

// const numbersCollected = collectNumbers2(1, 2, 3);
// const moreNumbers = [4, 5, 6];

// // Using spread operator to combine arrays.
// const combinedArray = [...numbersCollected, ...moreNumbers];
// console.log(combinedArray);

//! destructure object
// const person = {
//   firstName: 'John',
//   lastName: 'Wick',
//   city: 'New York',
//   age: 30,
// };

// const { firstName, lastName, city, age } = person;

// console.log(firstName);
// console.log(lastName);
// console.log(city);
// console.log(age);

//! destructure array
// const arr10 = ['John', 'Jim', 'Bob', 'Denise'];
// console.log(arr10);

// const [John, Jim, Bob, Denise] = arr10;

// console.log(John);
// console.log(Jim);
// console.log(Bob);
// console.log(Denise);

//todo -----------------------------------------------------------------------------------------------
// .reduce()
// .push()
// .keys()
// .map()
// .filter()

// Array of product objects, each with a name, price, and category
// const products = [
//   { name: 'Product 1', price: 20, category: 'Electronics' },
//   { name: 'Product 2', price: 30, category: 'Clothes' },
//   { name: 'Product 3', price: 40, category: 'Electronics' },
//   { name: 'Product 4', price: 50, category: 'Clothes' },
//   { name: 'Product 5', price: 60, category: 'Clothes' },
//   { name: 'Product 6', price: 70, category: 'Electronics' },
//   { name: 'Product 7', price: 80, category: 'Clothes' },
//   { name: 'Product 8', price: 90, category: 'Electronics' },
// ];

// // Group products by their category
// const groupedByCategory = products.reduce((accumulator, currentValue) => {
//   // Check if the category already exists in the accumulator object
//   if (!accumulator[currentValue.category]) {
//     // If the category does not exist, create an array for it
//     accumulator[currentValue.category] = [];
//   }
  
//   // Add the current product to the appropriate category array
//   accumulator[currentValue.category].push(currentValue);
  
//   // Return the updated accumulator object for the next iteration
//   return accumulator;
// }, {}); // Initial value of the accumulator is an empty object

// // Log the grouped products by category
// console.log(groupedByCategory);

// // Calculate the average price for each category
// const averagePricePerCategory = Object.keys(groupedByCategory).map((category) => {
//   // Retrieve the array of products for the current category
//   const products = groupedByCategory[category];
  
//   // Calculate the total price of all products in this category
//   const total = products.reduce((sum, product) => {
//     return sum + product.price;
//   }, 0); // Initial value of the sum is 0
  
//   // Calculate the average price by dividing the total by the number of products
//   const average = total / products.length;
  
//   // Return an object containing the category name and its average price
//   return { category: category, average: average };
// });

// // Log the average prices per category
// console.log(averagePricePerCategory);

// const highPricedCategories = averagePricePerCategory.filter(category => category.average > 50);
// console.log(highPricedCategories);