// 9 (4p)
// Du ska skapa två klasser med ES6 syntax, Chef och Recipe.

// Klassen Chef ska ha följande egenskaper:
// fullname, recipes (en array med kurser som är tom från början)
// och metoden
// learnRecipes() som lägger till ett recept i recipes-arrayen
// listRecipes() som visar en lista på kockens recept

// Klassen Recipe ska ha följande egenskaper:
// name, difficulty
// och metoderna
// getRecipeInfo() som visar information om kursen

// class Chef {
//   constructor(fullname) {
//     this.fullname = fullname;
//     this.recipes = [];
//   }

//   learnRecipe(recipe) {
//     this.recipes.push(recipe);
//   }

//   listRecipes() {
//     const listRecipes = this.recipes.map((recipe) => ({
//       name: recipe.name,
//       Difficulty: recipe.difficulty,
//     }));
    
//   }
// }

// class Recipe {
//   constructor(name, difficulty) {
//     this.name = name;
//     this.difficulty = difficulty;
//   }

//   getRecipeInfo() {
//     console.log(`${this.name}, Difficulty: ${this.difficulty}` );
//   }
// }

// // Test
// const chef1 = new Chef('Gordon Ramsay');
// const chef2 = new Chef('Jamie Oliver');
// const chef3 = new Chef('Nigella Lawson');

// const recipe1 = new Recipe('Beef Wellington', 'High');
// const recipe2 = new Recipe('Roast Chicken', 'Medium');
// const recipe3 = new Recipe('Chocolate Cake', 'Low');

// chef1.learnRecipe(recipe1);
// chef1.learnRecipe(recipe2);
// chef2.learnRecipe(recipe2);
// chef3.learnRecipe(recipe3);

// chef1.listRecipes(); // Beef Wellington, Roast Chicken
// chef2.listRecipes(); // Roast Chicken
// chef3.listRecipes(); // Chocolate Cake

// recipe1.getRecipeInfo(); // Expected to log: "Beef Wellington, Difficulty: High"
// recipe2.getRecipeInfo(); // Expected to log: "Roast Chicken, Difficulty: Medium"
// recipe3.getRecipeInfo(); // Expected to log: "Chocolate Cake, Difficulty: Low"
