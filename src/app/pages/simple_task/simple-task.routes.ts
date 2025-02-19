import {CanMatchFn, RedirectCommand, Route, Router} from '@angular/router';
import {NoTaskComponent} from './tasks/no-task/no-task.component';
import {resolveTitle, resolveUserName, UserTasksComponent} from './users/user-tasks/user-tasks.component';
import {inject} from '@angular/core';
import {TaskHomeComponent} from './task-home/task-home.component';

const dummyCanMatch :CanMatchFn = (route, segments) => {
  const router = inject(Router);

  const shouldGetAccess = Math.random();

  if (shouldGetAccess < 0.5) {
    return true;
  }

  return new RedirectCommand(router.parseUrl('/unauthorzied'));
}

export const SIMPLE_TASK_ROUTES: Route[] = [
  {
    path: '',
    component: TaskHomeComponent,
    children: [
      {
        path: '',
        component: NoTaskComponent,
        title: 'No task selected',
      },
      {
        path: 'users/:userId',
        component: UserTasksComponent,
        // children: userRoutes,
        loadChildren: () => import('./users/users.routes').then((mod) => mod.routes),
        canMatch: [dummyCanMatch],
        data: {
          'message': 'Hello',
        },
        resolve: {
          userName: resolveUserName
        },
        title: resolveTitle,
      },
    ]
  },
];
