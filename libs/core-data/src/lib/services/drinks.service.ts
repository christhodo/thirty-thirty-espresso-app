import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drink } from '@espresso-recipes/api-interfaces';
import {
  DrinkEnvironment,
  DRINK_ENVIRONMENT,
} from '@espresso-recipes/environment';

@Injectable({
  providedIn: 'root',
})
export class DrinksService {
  model = 'drinks';

  constructor(
    private httpClient: HttpClient,
    @Inject(DRINK_ENVIRONMENT) private environment: DrinkEnvironment
  ) {}

  all() {
    return this.httpClient.get<Drink[]>(this.getUrl());
  }

  find(drinkId: string) {
    return this.httpClient.get<Drink>(this.getUrlById(drinkId));
  }

  create(drinks: Drink) {
    return this.httpClient.post<Drink>(this.getUrl(), drinks);
  }

  update(drinks: Drink) {
    return this.httpClient.patch<Drink>(this.getUrlById(drinks.id), drinks);
  }

  delete({ id }: Drink) {
    return this.httpClient.delete<Drink>(this.getUrlById(id));
  }

  private getUrl() {
    return `${this.environment.apiUrl}${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`;
  }
}
