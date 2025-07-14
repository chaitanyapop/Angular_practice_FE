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
  constructor(private questService: QuestionsService) {}

  ngOnInit(): void {
    this.questService.getRecipeData().subscribe({
      next: (data) => {
        this.recipeData = data;
      },
    });
  }
}
