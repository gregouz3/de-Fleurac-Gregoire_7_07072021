import recipes from "./recipes.js";
import Recipe from "./recipe.js";

const main = () => {
  console.log(recipes);
  recipes.forEach((recipe) => {
    displayRecipes(recipe);
  });
};

const displayRecipes = (recipe) => {
  //console.log(recipes);
  const recipesHmtl = document.getElementById("recipes");
  const recette = new Recipe(recipe);
  recipesHmtl.innerHTML += recette.recipeCard;
  recette.undefinedremove;
};

export default displayRecipes;

main();
