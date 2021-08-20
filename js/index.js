import recipes from "./recipes.js";
import Recipe from "./recipe.js";

const displayRecipes = () => {
  console.log(recipes);
  recipes.forEach((recipe) => {
    displayRecipe(recipe);
  });
};

const displayRecipe = (recipe) => {
  //console.log(recipes);
  const recipesHmtl = document.getElementById("recipes");
  const recette = new Recipe(recipe);
  recipesHmtl.innerHTML += recette.recipeCard;
};

export default displayRecipe;

displayRecipes();
