import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-recipe',
  standalone: false,
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent implements OnInit {
  recipeData!: any[];
  totalData!: any[];
  itemsInCart: any[] = [];
  cartItems: number = 0;
  average: number = 0;
  displayed_receipe = 0;
  defaultRating = 4.0;
  constructor(private questService: QuestionsService) {}

  ngOnInit(): void {
    this.questService.getRecipeData().subscribe({
      next: (data) => {
        this.totalData = data;
        this.recipeData = data;
        this.filterAndAvgCalcFunc(this.defaultRating);
      },
    });
  }

  filterSelected(data: any) {
    let rating: any = data.target.value;
    rating = parseFloat(rating.split('+')[0]);
    this.filterAndAvgCalcFunc(rating);
  }

  filterAndAvgCalcFunc(rating: number) {
    this.recipeData = [];
    this.average = 0;
    this.totalData.forEach((data) => {
      if (data.rating >= rating) {
        this.recipeData = [...this.recipeData, data];
        this.average = this.average + data.rating;
      }
    });
    this.average =
      Number((this.average / this.recipeData.length).toFixed(1)) || 0;
    this.displayed_receipe = this.recipeData.length;
  }

  addToCart(data: any) {
    this.itemsInCart = [...this.itemsInCart, data];
    this.cartItems = this.itemsInCart.length;
  }
}
