import { Component, OnInit } from '@angular/core';
import { emptyDrink, Drink } from '@espresso-recipes/api-interfaces';
import { DrinksService } from '@espresso-recipes/core-data';
import { tap } from 'rxjs';

@Component({
  selector: 'espresso-recipes-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss'],
})
export class DrinksComponent implements OnInit {
  drinks = [];
  drinks$: any;
  selectedDrink = emptyDrink;
  originalName = '';

  constructor(private drinksService: DrinksService) {}

  ngOnInit(): void {
    this.fetchDrinks();
  }

  selectDrink(drink: Drink) {
    this.selectedDrink = drink;
  }

  fetchDrinks() {
    this.drinks$ = this.drinksService.all();
  }

  saveDrink(drink: Drink) {
    if (drink.id) {
      this.updateDrink(drink);
    } else {
      this.createDrink(drink);
    }
  }

  createDrink(drink: Drink) {
    this.drinksService.create(drink).subscribe((result) => this.fetchDrinks());
  }

  updateDrink(drink: Drink) {
    this.drinksService.update(drink).subscribe((result) => this.fetchDrinks());
  }

  deleteDrink(id: number) {
    this.drinksService
      .delete(id)
      .pipe(tap(() => this.fetchDrinks()))
      .subscribe();
  }

  reset() {
    this.selectDrink({ ...emptyDrink });
  }
}
