import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { ChipInputComponent } from './components/chip-input/chip-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChipInputComponent],
  imports: [CommonModule, QuestionsRoutingModule, FormsModule],
  exports: [ChipInputComponent],
})
export class QuestionsModule {}
