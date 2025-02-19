import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  userId = input.required<string>();

  message = input.required<string>();
  userName = input.required<string>();

  // private usersService = inject(UsersService);

  // private activatedRoute = inject(ActivatedRoute);

  // ngOnInit(): void {
  //   this.activatedRoute.paramMap.subscribe({next: (paramMap) => {
  //     paramMap.get('userId')
  //   }});
  // }

  // userName = computed(() => this.usersService.users.find((u => u.id === this.userId()))?.name);
}

export const resolveUserName: ResolveFn<string> = (
  activedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);

  const userName = usersService.users.find((u) => u.id === activedRoute.paramMap.get('userId'))?.name || '';

  return userName;
};


export const resolveTitle: ResolveFn<string> = (
  activedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  return resolveUserName(activedRoute, routerState) + `'s Tasks`;
};
