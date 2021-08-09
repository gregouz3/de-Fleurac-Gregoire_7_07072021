import recipes from "./recipes.js";
import displayRecipes from "./index.js";

const search = () => {
  const searchUser = document.getElementById("searchInput");
  searchUser.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      console.log(element);
      const newRecipe = recipes.filter((recipe) => {
        if (recipe.name.toLowerCase().includes(element)) {
          console.log(recipe.name);
        }
      });
    }
  });
};

search();
