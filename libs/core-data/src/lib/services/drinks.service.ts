import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drink } from '@espresso-recipes/api-interfaces';
import {
  DrinkEnvironment,
  DRINK_ENVIRONMENT,
} from '@espresso-recipes/environment';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root',
})
export class DrinksService {
  model = 'drinks';

  constructor(
    private httpClient: HttpClient,
    @Inject(DRINK_ENVIRONMENT) private environment: DrinkEnvironment,
    private notificationsService: NotificationsService
  ) {}

  all() {
    return this.httpClient.get<Drink[]>(this.getUrl());
  }

  find(drinkId: string) {
    return this.httpClient.get<Drink>(this.getUrlById(drinkId));
  }

  create(drinks: Drink) {
    this.notificationsService.notify('Created Drink HTTP Call');
    return this.httpClient.post<Drink>(this.getUrl(), drinks);
  }

  update(drinks: Drink) {
    this.notificationsService.notify('Updated Drink HTTP Call');
    return this.httpClient.patch<Drink>(this.getUrlById(drinks.id), drinks);
  }

  delete(id: number) {
    this.notificationsService.notify('Deleted Drink HTTP Call');
    return this.httpClient.delete(this.getUrlById(id));
  }

  private getUrl() {
    return `${this.environment.apiUrl}${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`;
  }
}
