import recipes from "./recipes.js";
import displayRecipe from "./index.js";

const search = () => {
  const searchUser = document.getElementById("searchInput");
  searchUser.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      const tab = [];
      document.getElementById("recipes").innerHTML = "";
      for (let i = 0; i < recipes.length; i++) {
        tab.push(recipes[i]);
        filter1(element, recipes[i], tab);
      }
    }
    error(e);
  });
};

const filter1 = (element, recipe, tab) => {
  if (
    recipe.name.toLowerCase().match(element) ||
    recipe.description.toLowerCase().match(element)
  ) {
    displayRecipe(recipe);
    tab.push(recipe);
  } else if (
    !recipe.name.toLowerCase().match(element) &&
    !recipe.description.toLowerCase().match(element)
  ) {
    recipe.ingredients.forEach((el) => {
      if (el.ingredient.toLowerCase().match(element)) {
        console.log(el.ingredient);
        displayRecipe(recipe);
        tab.push(recipe);
      }
    });
  }
};

const error = (e) => {
  if (document.getElementById("recipes").innerHTML === "") {
    alert(
      "« Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
    );
    document.getElementById("recipes").innerHTML = "";
    e.target.value = "";
    recipes.forEach((recipe) => {
      displayRecipe(recipe);
    });
    // console.log(element);
  } else if (e.target.value.length === 0) {
    document.getElementById("recipes").innerHTML = "";
    recipes.forEach((recipe) => {
      displayRecipe(recipe);
    });
  }
};

search();
