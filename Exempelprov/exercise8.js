// 8 (3p) Generera en lista av li-element med hjälp av map
// och template strings.

// Använd arrayen movies
// Skapa en funktion generateList som tar en array med objekt som argument och
// returnerar en lista av li-element som innehåller namlet på filmen och året den släpptes.

const movies = [
  { title: 'The Matrix', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Dark Knight', year: 2008 },
];

// Solution1, with arrow function
// let generateList = () => {
//   const listItem = movies.map((item) => {
//     return `<li>${item.title} ${item.year}</li>`;
//   });
//   const list = listItem.join('\n    ');
//   return `<ul>\n    ${list}\n</ul>`;
// };

// Solution2, with function declaration:
// function generateList() {
//   const listItems = movies.map(
//     (param) => `<li>${param.title} (${param.year})</li>`
//   );
//   const list = listItems.join('\n    ');
//   return `<ul>\n    ${list}\n</ul>`;
// }

// Test
// console.log(generateList());

// Ska logga strängen:
// "<ul>
//     <li>The Matrix (1999)</li>
//     <li>The Lord of the Rings: The Fellowship of the Ring (2001)</li>
//     <li>The Lord of the Rings: The Two Towers (2002)</li>
//     <li>The Lord of the Rings: The Return of the King (2003)</li>
//     <li>The Shawshank Redemption (1994)</li>
//     <li>The Godfather (1972)</li>
//     <li>The Dark Knight (2008)</li>
// </ul>"