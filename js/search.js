import recipes from "./recipes.js";
import displayRecipe from "./index.js";

const search = () => {
  const searchUser = document.getElementById("searchInput");
  searchUser.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      const tab = [];
      document.getElementById("recipes").innerHTML = "";
      recipes.filter((recipe) => filter1(element, recipe, tab));
      console.log(tab);
      search2(tab);
    }
    error(e);
  });
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

const search2 = (tab) => {
  search2ingredients(tab);
  search2appareils(tab);
  search2ustensils(tab);
};

const search2ingredients = (tab) => {
  const ingrs = document.querySelector(".ingredients");
  ingrs.innerHTML = "";
  tab.forEach((tabb) => {
    tabb.ingredients.forEach((ingr) => {
      ingrs.innerHTML += JSON.stringify(ingr.ingredient);
    });
  });
  const searchUserIngredient = document.getElementById("searchIngredient");
  searchUserIngredient.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      ingrs.innerHTML = "";
      console.log(element);
      document.getElementById("recipes").innerHTML = "";
      tab.filter((recipe) => {
        recipe.ingredients.forEach((el) => {
          if (el.ingredient.toLowerCase().match(element)) {
            // displayRecipe(recipe);
            ingrs.innerHTML += JSON.stringify(el.ingredient);

            console.log(el.ingredient);
          }
        });
      });
    } else if (e.target.value.length === 0) {
      ingrs.innerHTML = "";
      tab.forEach((tabb) => {
        tabb.ingredients.forEach((ingr) => {
          console.log(ingr);
          ingrs.innerHTML += JSON.stringify(ingr.ingredient);
        });
      });
    }
  });
};

const search2appareils = (tab) => {
  const apps = document.querySelector(".appareil");
  apps.innerHTML = "";

  tab.forEach((recipe) => {
    apps.innerHTML += recipe.appliance;
  });
  const searchUserAppareil = document.getElementById("searchAppareil");
  searchUserAppareil.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      apps.innerHTML = "";

      console.log(element);
      document.getElementById("recipes").innerHTML = "";
      tab.filter((recipe) => {
        if (recipe.appliance.toLowerCase().match(element)) {
          console.log(recipe.appliance);
          apps.innerHTML += recipe.appliance;
        }
      });
    } else if (e.target.value.length === 0) {
      apps.innerHTML = "";
      tab.forEach((recipe) => {
        console.log(recipe.appliance);
        apps.innerHTML += recipe.appliance;
      });
    }
  });
};

const search2ustensils = (tab) => {
  const usts = document.querySelector(".ustensiles");
  usts.innerHTML = "";
  tab.forEach((tabb) => {
    tabb.ustensils.forEach((ust) => {
      usts.innerHTML += JSON.stringify(ust);
    });
  });
  const searchUserUstensils = document.getElementById("searchUstensiles");
  searchUserUstensils.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      console.log(element);
      usts.innerHTML = "";
      tab.filter((recipe) => {
        recipe.ustensils.forEach((el) => {
          if (el.toLowerCase().match(element)) {
            // displayRecipe(recipe);
            console.log(el);
            usts.innerHTML += JSON.stringify(el);
          }
        });
      });
    } else if (e.target.value.length === 0) {
      usts.innerHTML = "";
      tab.forEach((tabb) => {
        tabb.ustensils.forEach((ust) => {
          console.log(ust);
          usts.innerHTML += JSON.stringify(ust);
        });
      });
    }
  });
};

search();

export default search2;
