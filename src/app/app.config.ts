import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from '@ngrx/store';
import {counterReducer} from './store/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import {CounterEffects} from './store/counter-effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({

    }),
    provideRouter(routes),
    provideStore({
        counter: counterReducer,
    }),
    provideEffects([CounterEffects])
]
};
