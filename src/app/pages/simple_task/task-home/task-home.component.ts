import { Component } from '@angular/core';
import {UsersComponent} from '../users/users.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-task-home',
  imports: [
    UsersComponent,
    RouterOutlet
  ],
  templateUrl: './task-home.component.html',
  standalone: true,
  styleUrl: './task-home.component.scss'
})
export class TaskHomeComponent {

}
