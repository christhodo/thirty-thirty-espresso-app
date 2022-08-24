import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrinksListComponent } from './drinks/drinks-list/drinks-list.component';
import { DrinkDetailsComponent } from './drinks/drink-details/drink-details.component';
import { DrinksComponent } from './drinks/drinks.component';
import { CoreDataModule } from '@espresso-recipes/core-data';
import { CoreStateModule } from '@espresso-recipes/core-state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { UiLoginModule } from '@espresso-recipes/ui-login';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@espresso-recipes/environment';
import { MaterialModule } from '@espresso-recipes/material';

@NgModule({
  declarations: [
    AppComponent,

    DrinksListComponent,
    DrinkDetailsComponent,
    DrinksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
