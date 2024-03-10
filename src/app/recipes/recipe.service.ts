import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 
        'https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/11/korean-bbq-8064w.jpg'),
        new Recipe('Another Test Recipe', 'This is also simply a test', 
        'https://amandascookin.com/wp-content/uploads/2022/09/Korean-Fried-Chicken-RCSQ.jpg')
    ];


    getRecipes() {
        return this.recipes.slice();
    }
}