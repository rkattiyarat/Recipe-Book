import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 
        'https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/11/korean-bbq-8064w.jpg',[new Ingredient('Pork', 15), new Ingredient('Veggies', 20)]),
        new Recipe('Another Test Recipe', 'This is also simply a test', 
        'https://amandascookin.com/wp-content/uploads/2022/09/Korean-Fried-Chicken-RCSQ.jpg', [new Ingredient('Chicken', 10), new Ingredient('Sasemes', 20)])
    ];

    constructor(private shoppingListService: ShoppingListService) {}


    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}