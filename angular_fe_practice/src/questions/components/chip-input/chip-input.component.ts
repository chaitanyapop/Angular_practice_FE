import { Component } from '@angular/core';

@Component({
  selector: 'app-chip-input',
  standalone: false,
  templateUrl: './chip-input.component.html',
  styleUrl: './chip-input.component.scss',
})
export class ChipInputComponent {
  chips!: string;
  chipsList: string[] = [];

  addChip() {
    console.log('Adding chip:', this.chips);

    this.chipsList = [...this.chipsList, this.chips];
    this.chips = '';
  }

  removeChip(chip: string) {
    this.chipsList = this.chipsList.filter((c) => {
      return chip !== c;
    });
  }
}
