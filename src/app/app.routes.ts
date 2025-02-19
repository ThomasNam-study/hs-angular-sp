import {Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {NotFoundComponent} from './pages/common/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'counter', loadChildren: () =>
      import('./pages/counter/counter.routes').then((mod) => mod.COUNTER_ROUTES), },
  { path: 'simple_task', loadChildren: () =>
      import('./pages/simple_task/simple-task.routes').then((mod) => mod.SIMPLE_TASK_ROUTES), },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
