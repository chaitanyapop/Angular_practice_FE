import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  recipeUrl = 'assets/recipe.json';

  constructor(private http: HttpClient) {}

  getRecipeData() {
    return this.http.get<any>(this.recipeUrl);
  }
}
