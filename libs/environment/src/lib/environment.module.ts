import { ModuleWithProviders, NgModule } from '@angular/core';
import { DrinkEnvironment } from './drinks.model';
import { DRINK_ENVIRONMENT } from './drinks.token';

@NgModule({})
export class EnvironmentModule {
  static withEnvironment(
    environment: DrinkEnvironment
  ): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: DRINK_ENVIRONMENT,
          useValue: environment,
        },
      ],
    };
  }
}
