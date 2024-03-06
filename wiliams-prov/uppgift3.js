// 3. (4p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div> (skapa HTML-elementet med JavaScript eller lägg till dem i HTML-filen)
// Visa endast posts från användaren med userId: 1
// Använd async/await med felhantering. Använd dig av filter samt forEach eller map.

// Din kod här

const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then((res) => res.json())
  .then((data) => display(data))
  .catch((err) => console.log(err));

const display = (data) => {
  const post = document.querySelector(".post");
  const p = document.createElement("p");
  p.innerText = data
    .filter((i) => i.userId === 1)
    .map((i) => {
      return `${i.title} ${i.body}`;
    })
    .join();
  post.append(p);
};

display();
