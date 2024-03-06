// 2.1 (1p) Gör om följande funktion till en arrow-funktion
const getCurrentDateTime = () => {
  const now = new Date();
  return now.toLocaleString(); // Converts to a more readable format
};

// Din kod här:

//2.2 (1p) Gör om följande funktion till en arrow-funktion:
const stringIncludes = (string, substring) => string.indexOf(substring) !== -1;

// Din kod här:

//2.3 (1p) Gör om följande funktion till en arrow-funktion:
const numbers = [1, -1, 2, -2, 3, -3];

const removeNegatives = numbers.filter((number) => number >= 0);

// Din kod här:

// 2.4 (2p) Skriv om följande funktion (och callback-funktionen) till arrow-funktioner:

const logMessageLater = () =>
  setTimeout(() => {
    console.log("Logged after 2 seconds");
  }, 2000);

// Din kod här:

// Test
console.log(getCurrentDateTime()); // Ska logga dagens datum och tid
console.log(stringIncludes("Hello World", "Hello")); // Ska logga true
console.log(removeNegatives); // Ska logga [1, 2, 3]
console.log(logMessageLater()); // Ska logga "Logged after 2 seconds" efter 2 sekunder
