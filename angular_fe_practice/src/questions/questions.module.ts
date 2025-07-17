import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { ChipInputComponent } from './components/chip-input/chip-input.component';
import { FormsModule } from '@angular/forms';
import { RecipeComponent } from './components/recipe/recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { TabSwitchComponent } from './components/tab-switch/tab-switch/tab-switch.component';

@NgModule({
  declarations: [ChipInputComponent, RecipeComponent, TabSwitchComponent],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [ChipInputComponent, RecipeComponent, TabSwitchComponent],
})
export class QuestionsModule {}
