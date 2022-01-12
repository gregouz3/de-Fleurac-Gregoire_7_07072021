import recipes from "./recipes.js";
import displayRecipe from "./index.js";

const search = () => {
  displayTag(recipes);
  search2(recipes);
  const searchUser = document.getElementById("searchInput");
  searchUser.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      const tab = [];
      document.getElementById("recipes").innerHTML = "";
      /*  document.querySelector(".ingredients").innerHTML = "";
      document.querySelector(".appareil").innerHTML = "";
      document.querySelector(".ustensiles").innerHTML = "";
      document.getElementById("searchAppareil").value = "";
      document.getElementById("searchUstensiles").value = "";
      document.getElementById("searchIngredient").value = "";
      +close toggle*/
      recipes.filter((recipe) => filter1(element, recipe, tab));
      search2(tab);
      displayTag(tab);
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
        displayRecipe(recipe);
        tab.push(recipe);
      }
    });
  }
};

const displayTag = (tab) => {
  ingredients(tab);
  appareils(tab);
  ustensils(tab);
};

const search2 = (tab) => {
  search2ingredients(tab);
  search2appareils(tab);
  search2ustensils(tab);
};

const ingredients = (tab) => {
  const ingrs = document.querySelector(".ingredients");
  ingrs.innerHTML = "";
  const tingr = [];
  tab.forEach((tabb) => {
    tabb.ingredients.forEach((ingr) => {
      tingr.push(ingr.ingredient.toLowerCase());
    });
  });
  console.log(tingr);
  const uTab = [...new Set(tingr)];
  console.log(uTab);
  uTab.forEach((el) => {
    const ingredient = JSON.stringify(el);
    ingrs.innerHTML += `
        <li>${ingredient}</li>
      `;
  });
};

const search2ingredients = (tab) => {
  const t1ingr = [];
  const t1ingRecipe = [];
  const ingrs = document.querySelector(".ingredients");
  const searchUserIngredient = document.getElementById("searchIngredient");
  searchUserIngredient.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      ingrs.innerHTML = "";
      document.getElementById("searchAppareil").value = "";
      document.getElementById("searchUstensiles").value = "";
      document.querySelector(".appareil").innerHTML = "";
      document.querySelector(".ustensiles").innerHTML = "";

      document.getElementById("recipes").innerHTML = "";

      tab.filter((recipe) => {
        recipe.ingredients.forEach((el) => {
          if (el.ingredient.toLowerCase().match(element)) {
            t1ingr.push(el.ingredient.toLowerCase());
            t1ingRecipe.push(recipe);
          }
        });
      });
      console.log(t1ingRecipe);
      const ut1ingRecipe = [...new Set(t1ingRecipe)];
      console.log(ut1ingRecipe);
      ingrs.innerHTML = "";
      document.querySelector(".appareil").innerHTML = "";
      document.querySelector(".ustensiles").innerHTML = "";

      document.getElementById("recipes").innerHTML = "";
      ut1ingRecipe.forEach((recipe) => {
        displayRecipe(recipe);
        appareils(ut1ingRecipe);
        ustensils(ut1ingRecipe);
      });

      const uTab = [...new Set(t1ingr)];
      console.log(uTab);
      uTab.forEach((el) => {
        const ingredient = JSON.stringify(el);
        ingrs.innerHTML += `
        <li>${ingredient}</li>
      `;
      });
      console.log(ut1ingRecipe);
      search2appareils(ut1ingRecipe);
      search2ustensils(ut1ingRecipe);
    } else if (element.length === 0) {
      // ingredients(tab);
    }
  });
};

const appareils = (tab) => {
  const apps = document.querySelector(".appareil");
  apps.innerHTML = "";
  const tapp = [];
  tab.forEach((app) => {
    tapp.push(app.appliance.toLowerCase());
  });
  const appTab = [...new Set(tapp)];
  console.log(appTab);
  appTab.forEach((el) => {
    const app = JSON.stringify(el);
    apps.innerHTML += `
        <li>${app}</li>
      `;
  });
};
const search2appareils = (tab) => {
  const t1app = [];
  const t1appRecipe = [];
  const apps = document.querySelector(".appareil");
  const searchUserAppareil = document.getElementById("searchAppareil");
  searchUserAppareil.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      apps.innerHTML = "";
      document.getElementById("searchIngredient").value = "";
      document.getElementById("searchUstensiles").value = "";
      document.querySelector(".ingredients").innerHTML = "";
      document.querySelector(".ustensiles").innerHTML = "";
      document.getElementById("recipes").innerHTML = "";

      tab.filter((recipe) => {
        if (recipe.appliance.toLowerCase().match(element)) {
          t1app.push(recipe.appliance.toLowerCase());
          t1appRecipe.push(recipe);
        }
      });
      const ut1appRecipe = [...new Set(t1appRecipe)];
      console.log(ut1appRecipe);

      document.getElementById("recipes").innerHTML = "";
      apps.innerHTML = "";
      ut1appRecipe.forEach((recipe) => {
        displayRecipe(recipe);
        ingredients(ut1appRecipe);
        ustensils(ut1appRecipe);
      });

      const uTab = [...new Set(t1app)];
      console.log(uTab);
      uTab.forEach((el) => {
        const app = JSON.stringify(el);
        apps.innerHTML += `
        <li>${app}</li>
      `;
      });
      search2ingredients(ut1appRecipe);
      search2ustensils(ut1appRecipe);
    } else if (e.target.value.length === 0) {
      //appareils(tab);
    }
  });
};

const ustensils = (tab) => {
  const usts = document.querySelector(".ustensiles");
  usts.innerHTML = "";
  const tUst = [];
  tab.forEach((ust) => {
    ust.ustensils.forEach((ustt) => {
      tUst.push(ustt.toLowerCase());
    });
  });
  const ustab = [...new Set(tUst)];
  ustab.forEach((el) => {
    const ust = JSON.stringify(el);
    usts.innerHTML += `
        <li>${ust}</li>
    `;
  });
};

const search2ustensils = (tab) => {
  const t1Ust = [];
  const t1UstRecipe = [];
  const usts = document.querySelector(".ustensiles");
  const searchUserUstensils = document.getElementById("searchUstensiles");
  searchUserUstensils.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      usts.innerHTML = "";
      document.getElementById("searchIngredient").value = "";
      document.getElementById("searchAppareil").value = "";
      document.querySelector(".ingredients").innerHTML = "";
      document.querySelector(".appareil").innerHTML = "";
      document.getElementById("recipes").innerHTML = "";

      tab.filter((recipe) => {
        recipe.ustensils.forEach((el) => {
          if (el.toLowerCase().match(element)) {
            t1Ust.push(el.toLowerCase());
            t1UstRecipe.push(recipe);
          }
        });
      });
      const ut1UstRecipe = [...new Set(t1UstRecipe)];
      document.getElementById("recipes").innerHTML = "";
      ut1UstRecipe.forEach((recipe) => {
        displayRecipe(recipe);
        ingredients(ut1UstRecipe);
        appareils(ut1UstRecipe);
      });
      const uTab = [...new Set(t1Ust)];
      usts.innerHTML = "";
      uTab.forEach((el) => {
        const ust = JSON.stringify(el);
        usts.innerHTML += `
        <li>${ust}</li>
      `;
      });
      console.log(ut1UstRecipe);
      search2appareils(ut1UstRecipe);
      search2ingredients(ut1UstRecipe);
    } else if (e.target.value.length === 0) {
      //ustensils(tab);
    }
  });
};

search();
