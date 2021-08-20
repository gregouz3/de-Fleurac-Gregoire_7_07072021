import Ingredient from "./ingredient.js";

class Recipe {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.servings = data.servings;
    this.appliance = data.appliance;
    this.time = data.time;
    this.description = data.description;
    this.ingredients = data.ingredients;
    this.ustensils = data.ustensils;
  }
  get ingredient() {
    this.ingredientee = [];
    this.ingredients.forEach((ingredient) => {
      const ingrediente = new Ingredient(ingredient);
      this.ingredientee += ingrediente.displayIngredient;
    });
  }
  get recipeCard() {
    this.ingredient;
    return `
    <li class="recipe col-4 ">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="" alt="Card image cap">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <p>${this.name}</p>
            <p>${this.time} min</p>
          </div>
          <div class="d-flex justify-content-between">
            <ul class="ingredients">
            ${this.ingredientee}
            </ul>
            <p>${this.description}</p>
          </div>
        </div>
      </div>
    </li>
    `;
  }
}

export default Recipe;
