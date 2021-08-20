import recipes from "./recipes.js";
import displayRecipe from "./index.js";

const principalSearch = () => {
  const searchUser = document.getElementById("searchInput");
  searchUser.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      console.log(element);
      document.getElementById("recipes").innerHTML = "";
      recipes.filter((recipe) => {
        if (
          recipe.name.toLowerCase().match(element) ||
          recipe.description.toLowerCase().match(element)
        ) {
          displayRecipe(recipe);
        } else if (
          !recipe.name.toLowerCase().match(element) &&
          !recipe.description.toLowerCase().match(element)
        ) {
          recipe.ingredients.forEach((el) => {
            if (el.ingredient.toLowerCase().match(element)) {
              console.log(el.ingredient);
              displayRecipe(recipe);
            }
          });
        }
      });
      if (document.getElementById("recipes").innerHTML === "") {
        alert(
          "« Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
        );
        document.getElementById("recipes").innerHTML = "";
        recipes.forEach((recipe) => {
          displayRecipe(recipe);
        });
      }
    } else if (element.length === 0) {
      document.getElementById("recipes").innerHTML = "";
      recipes.forEach((recipe) => {
        displayRecipe(recipe);
      });
    }
  });
};

principalSearch();
