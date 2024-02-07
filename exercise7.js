// 7.1 (1p) Gör om följande funktion till en arrow-funktion
const myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

//7.2 (1p) Gör om följande funktion till en arrow-funktion:
function add(a, b) {
  return a + b;
}

//7.3 (1p) Gör om följande funktion till en arrow-funktion:
const magic = function() {
  return new Date();
};



console.log(myConcat([1, 2], [3, 4, 5])); // Ska (som tidigare)logga [1, 2, 3, 4, 5]
console.log(add(2, 3)); // Ska (som tidigare) logga 5