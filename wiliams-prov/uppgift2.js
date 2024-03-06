// *  2.1 (1p) Gör om följande funktion till en arrow-funktion -----------------------
const getCurrentDateTime = function () {
  const now = new Date();
  return now.toLocaleString();
};

// Solution:
// const getCurrentDateTime = () => {
//   const now = new Date();
//   return now.toLocaleString(); // Converts to a more readable format
// };

// * 2.2 (1p) Gör om följande funktion till en arrow-funktion: -----------------------

// Solution:
// const stringIncludes = (string, substring) => string.indexOf(substring) !== -1;

// * 2.3 (1p) Gör om följande funktion till en arrow-funktion:
const numbers = [1, -1, 2, -2, 3, -3];
const removeNegatives = numbers.filter(function (number) {
  return number >= 0;
});

// Solution:
// const removeNegatives = numbers.filter((number) => number >= 0);

// * 2.4 (2p) Skriv om följande funktion (och callback-funktionen) till arrow-funktioner: -----------------------
const logMessageLater = function () {
  setTimeout(function () {
    console.log('Logged after 2 seconds');
  }, 2000);
};

// Solution:
// const logMessageLater = () =>
//   setTimeout(() => {
//     console.log('Logged after 2 seconds');
//   }, 2000);

// Test
// console.log(getCurrentDateTime()); // Ska logga dagens datum och tid
// console.log(stringIncludes('Hello World', 'Hello')); // Ska logga true
// console.log(removeNegatives); // Ska logga [1, 2, 3]
// console.log(logMessageLater()); // Ska logga "Logged after 2 seconds" efter 2 sekunder
