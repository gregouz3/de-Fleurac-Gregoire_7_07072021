import recipes from "./recipes.js";
import Recipe from "./recipe.js";

const displayRecipes = () => {
  //console.log(recipes);
  const recipesHmtl = document.getElementById("recipes");
  recipesHmtl.innerHTML = "";
  recipes.forEach((recipe) => {
    const recette = new Recipe(recipe);
    recipesHmtl.innerHTML += recette.recipeCard;
    recette.undefinedremove;
  });
};

export default displayRecipes;
displayRecipes();
