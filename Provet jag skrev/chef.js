export class Chef {
    constructor(fullname) {
      this.fullname = fullname;
      this.recipes = [];
    }
  
    learnRecipe(recipe) {
      this.recipes.push(recipe);
    }
  
    listRecipes() {
      const listRecipes = this.recipes.map((recipe) => ({
        name: recipe.name,
        Difficulty: recipe.difficulty,
      }));
      
    }
  }
  
  export class Recipe {
    constructor(name, difficulty) {
      this.name = name;
      this.difficulty = difficulty;
    }
  
    getRecipeInfo() {
      console.log(`${this.name}, Difficulty: ${this.difficulty}` );
    }
  }