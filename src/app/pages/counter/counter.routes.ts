import {CounterPageComponent} from './counter-page/counter-page.component';
import {Route} from '@angular/router';

export const COUNTER_ROUTES: Route[] = [
  {
    path: 'counter',
    component: CounterPageComponent,
  },
];
