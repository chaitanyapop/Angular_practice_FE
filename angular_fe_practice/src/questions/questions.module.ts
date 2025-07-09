import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { ChipInputComponent } from './components/chip-input/chip-input.component';
import { FormsModule } from '@angular/forms';
import { RecipeComponent } from './components/recipe/recipe.component';

@NgModule({
  declarations: [ChipInputComponent, RecipeComponent],
  imports: [CommonModule, QuestionsRoutingModule, FormsModule],
  exports: [ChipInputComponent],
})
export class QuestionsModule {}
