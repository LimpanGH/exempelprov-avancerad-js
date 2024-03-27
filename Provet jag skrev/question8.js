// 8.1  (1p) Använd filter för att returnera en ny array "updatedTweets" utan kommentaren med id 827364 (1p)

const tweets = [
  {
    text: 'Quantum computing breakthrough doubles processing power.',
    id: 907543,
  },
  { text: 'Mars rover discovers signs of ancient water streams.', id: 315234 },
  {
    text: 'New AI algorithm can predict weather changes with 90% accuracy.',
    id: 827364,
  },
  { text: 'World’s first space hotel slated to open in 2030.', id: 462738 },
  {
    text: 'Deep sea drones reveal mysterious structures at the bottom of the Pacific.',
    id: 583902,
  },
];

// Din kod här:
let updatedTweets = tweets.filter((tweet) => {
  return tweet.id !== 827364;
});

// console.log(updatedTweets);

// 8.2 (2p) Använd map för att skapa en ny array "tweetsHtml" med endast texten från varje tweet inom <li>-taggar (utgå från updatedTweets-arrayen)
// Omvandla arrayen till en sträng med metoden join('') på arrayen.
// Visa den genererade listan med tweets på sidan inuti <ul id="tweets"></ul>  (skapa HTML-elementet med JavaScript eller lägg till dem i HTML-filen)

function tweetsHtml(updatedTweets) {
  const ul = document.getElementById('tweets');
  ul.innerHTML = updatedTweets
    .map((item) => {
      return `<li>${item.text}</li>`;
    })
    .join('');
}

let callUppdatedTweets = updatedTweets;
// console.log(tweetsHtml(callUppdatedTweets));

// Test
// console.log(updatedTweets); // Ska logga en array utan kommentaren med id 823423
// [
//   { text: 'Elon Musk is ...', id: 523423 },
//   { text: 'The future of AI ...', id: 2039842 },
//   { text: 'SpaceX is planning human Mars missions...', id: 123523 },
//   { text: 'The future is now: Neuralink’s ...', id: 542328 }
// ]
