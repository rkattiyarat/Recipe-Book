import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recepeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    // this.recipeSelected.emit();
    this.recepeService.recipeSelected.emit(this.recipe);
  }
}
