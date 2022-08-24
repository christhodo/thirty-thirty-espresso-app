import { Component, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Drink } from '@espresso-recipes/api-interfaces';

@Component({
  selector: 'espresso-recipes-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.scss'],
})
export class DrinksListComponent {
  @Input() drinks: Drink[] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
