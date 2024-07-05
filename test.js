// const array = ['a', 'b', 'c', 'd', 'e'];
// const arrayToString = array.toString();
// console.log(arrayToString);

// const array2 = ['a', 'b', 'c', 'd', 'e'];
// const arrayToString2 = array2.toLocaleString();
// console.log(arrayToString2);

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
];

const sum = items.reduce((acc, curr) => {
    return acc + curr.price
},0)

console.log(sum);