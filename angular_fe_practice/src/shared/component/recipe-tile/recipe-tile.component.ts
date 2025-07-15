import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-recipe-tile',
  standalone: false,
  templateUrl: './recipe-tile.component.html',
  styleUrl: './recipe-tile.component.scss',
})
export class RecipeTileComponent {
  @Input() recipeData!: any;
  @Output() addToCartEvent = new EventEmitter();

  addToCart(data: any) {
    this.addToCartEvent.emit(data);
  }
}
