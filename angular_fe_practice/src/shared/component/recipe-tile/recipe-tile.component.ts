import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-tile',
  standalone: false,
  templateUrl: './recipe-tile.component.html',
  styleUrl: './recipe-tile.component.scss',
})
export class RecipeTileComponent {
  @Input() recipeData!: any;
}
