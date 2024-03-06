// *  8.1  (1p) Använd filter för att returnera en ny array "updatedTweets" utan kommentaren med id 823423 (1p)

const tweets = [
  { text: 'Elon Musk is ...', id: 523423 },
  { text: 'Sam Altman is missing since one week ..', id: 823423 },
  { text: 'The future of AI ...', id: 2039842 },
  { text: 'SpaceX is planning human Mars missions...', id: 123523 },
  { text: 'The future is now: Neuralink’s ...', id: 542328 },
];

// Solution:
// const updatedTweets = tweets.filter((tweet) => {
//   return tweet.id !== 823423;
// });

// Test
// console.log(updatedTweets);

// Ska logga en array utan kommentaren med id 823423
// [
//   { text: 'Elon Musk is ...', id: 523423 },
//   { text: 'The future of AI ...', id: 2039842 },
//   { text: 'SpaceX is planning human Mars missions...', id: 123523 },
//   { text: 'The future is now: Neuralink’s ...', id: 542328 }
// ]

// * 8.2 (2p) Använd map för att skapa en ny array "tweetsHtml" med endast texten från varje tweet inom <li>-taggar (utgå från updatedTweets-arrayen).
//            Omvandla arrayen till en sträng med metoden join('') på arrayen.
//            Visa den genererade listan med tweets på sidan inuti <ul id="tweets"></ul>  (skapa HTML-elementet med JavaScript eller lägg till dem i HTML-filen)

// Solution:
// function displayTweet(updatedTweets) {
//   const posts = document.querySelector('post');
//   const ul = document.getElementById('tweets');

//   ul.innerHTML = updatedTweets.map((item) => {
//       // console.log(item);
//       return `<li>${item.text}</li>`;
//     })
//     .join('');
//   // console.log(ul.innerHTML);
// }

// displayTweet(updatedTweets);

// Ska rendera:
// Elon Musk is ...
// The future of AI ...
// SpaceX is planning human Mars missions...
// The future is now: Neuralink’s ...
