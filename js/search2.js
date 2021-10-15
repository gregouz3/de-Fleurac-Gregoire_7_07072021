import recipes from "./recipes.js";
import displayRecipe from "./index.js";

const principalSearch = () => {
  const searchUser = document.getElementById("searchInput");
  searchUser.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      console.log(element);
      document.getElementById("recipes").innerHTML = "";
      for (let i = 0; i < recipes.length; i++) {
        if (
          recipes[i].name.toLowerCase().includes(element) ||
          recipes[i].description.toLowerCase().includes(element)
        ) {
          displayRecipe(recipes[i]);
        } else if (
          !recipes[i].name.toLowerCase().includes(element) &&
          !recipes[i].description.toLowerCase().includes(element)
        ) {
          recipes[i].ingredients.forEach((el) => {
            if (el.ingredient.toLowerCase().includes(element)) {
              console.log(el.ingredient);
              displayRecipe(recipes[i]);
            }
          });
        }
      }

      if (document.getElementById("recipes").innerHTML === "") {
        alert(
          "« Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
        );
        document.getElementById("recipes").innerHTML = "";
        e.target.value = "";
        for (let i = 0; i < recipes.length; i++) {
          displayRecipe(recipes[i]);
        }
      }
    } else if (element.length === 0) {
      document.getElementById("recipes").innerHTML = "";
      for (let i = 0; i < recipes.length; i++) {
        displayRecipe(recipes[i]);
      }
    }
  });
};

principalSearch();
