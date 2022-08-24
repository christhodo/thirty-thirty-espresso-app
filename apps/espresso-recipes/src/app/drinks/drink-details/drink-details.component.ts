import { Component, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Drink } from '@espresso-recipes/api-interfaces';

@Component({
  selector: 'espresso-recipes-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss'],
})
export class DrinkDetailsComponent {
  currentDrink: Drink;
  originalName = '';

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set drink(value) {
    if (!value) return;
    this.currentDrink = { ...value };
    this.originalName = this.currentDrink.name;
  }
}
