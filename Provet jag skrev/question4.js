// ! Hoppa över denna, svaret låg kvar.

// 4. (2p) Skriv en funktion calculateLifespans som tar en array med författare och returnerar en 
// ny array med författarens totala livslängd (passed - year).
// Använd map

const authors = [
    { first: 'Leo', last: 'Tolstoj', year: 1828, passed: 1910 },
    { first: 'Alexander', last: 'Pusjkin', year: 1799, passed: 1837 },
    { first: 'Fjodor', last: 'Dostojevski', year: 1821, passed: 1881 },
    { first: 'Anton', last: 'Tjechov', year: 1860, passed: 1904 },
    { first: 'Vladimir', last: 'Nabokov', year: 1899, passed: 1997 },
    { first: 'Maksim', last: 'Gorkij', year: 1868, passed: 1936 },
    { first: 'Koldan', last: 'Egorov', year: 1821 , passed: 1921 },
    { first: 'Nikolaj', last: 'Gogl', year: 1809, passed: 1852 },
    { first: 'Leonid', last: 'Andrejev', year: 1871, passed: 1919 },
    { first: 'Mirra', last: 'Lokhvitskaya', year: 1869, passed: 1905 },
    { first: 'Ivan', last: 'Krylov', year: 1769, passed: 1844 },
    { first: 'Michail', last: 'Lermontov', year: 1814, passed: 1841 },
    { first: 'Alexandr', last: 'Blok', year: 1880, passed: 1921 }
  ];

  function calculateLifespans(authors) {
    // Din kod här
    return authors.map(author => author.passed - author.year);

  }

// Test
// console.log(calculateLifespans(authors)); //  Ska logga: [
//   82, 38, 60, 44, 98, 68,
//  100, 43, 48, 36, 75, 27,
//   41
// ]