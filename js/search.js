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
          // searchIngredients();
          console.log(recipe);

          //second
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
        // window.location.reload();
        document.getElementById("recipes").innerHTML = "";
        recipes.forEach((recipe) => {
          displayRecipe(recipe);
        });
        console.log(element);
      }
    } else if (element.length === 0) {
      document.getElementById("recipes").innerHTML = "";
      recipes.forEach((recipe) => {
        displayRecipe(recipe);
      });
    }
  });
};

const searchAppareil = () => {
  const searchUserAppareil = document.getElementById("searchAppareil");
  searchUserAppareil.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      console.log(element);
      document.getElementById("recipes").innerHTML = "";
      recipes.filter((recipe) => {
        if (recipe.appliance.toLowerCase().match(element)) {
          //  displayRecipe(recipe);
          console.log(recipe.appliance);
        }
      });
    }
  });
};

const searchIngredients = () => {
  const searchUserIngredient = document.getElementById("searchIngredient");
  searchUserIngredient.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      console.log(element);
      document.getElementById("recipes").innerHTML = "";
      recipes.filter((recipe) => {
        recipe.ingredients.forEach((el) => {
          if (el.ingredient.toLowerCase().match(element)) {
            // displayRecipe(recipe);
            console.log(el.ingredient);
          }
        });
      });
    }
  });
};

const searchUstensils = () => {
  const searchUserUstensils = document.getElementById("searchUstensiles");
  searchUserUstensils.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      console.log(element);
      document.getElementById("recipes").innerHTML = "";
      recipes.filter((recipe) => {
        recipe.ustensils.forEach((el) => {
          if (el.toLowerCase().match(element)) {
            // displayRecipe(recipe);
            console.log(el);
          }
        });
      });
    }
  });
};

principalSearch();
searchIngredients();
searchAppareil();
searchUstensils();
