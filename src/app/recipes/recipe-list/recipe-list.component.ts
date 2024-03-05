import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  @Output() recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 
    'https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/11/korean-bbq-8064w.jpg'),
    new Recipe('Another Test Recipe', 'This is also simply a test', 
    'https://amandascookin.com/wp-content/uploads/2022/09/Korean-Fried-Chicken-RCSQ.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
