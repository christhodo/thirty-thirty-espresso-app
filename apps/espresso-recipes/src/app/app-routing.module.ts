import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DrinksComponent } from './drinks/drinks.component';

const routes: Route[] = [
  { path: 'drinks', component: DrinksComponent },

  { path: '**', redirectTo: 'wild', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
