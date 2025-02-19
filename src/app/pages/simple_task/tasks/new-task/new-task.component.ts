import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TasksService } from '../tasks.service';
import { CanDeactivate, CanDeactivateFn, Router, RouterLink } from '@angular/router';
import { single } from 'rxjs';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId = input.required<string>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');
  sumbmitted = false;
  private tasksService = inject(TasksService);
  private router = inject(Router);

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.userId()
    );

    this.sumbmitted = true;

    this.router.navigate(['/users', this.userId(), 'tasks'], {replaceUrl: true});
  }
}

export const canLeaveEditPage: CanDeactivateFn<NewTaskComponent> = (component) => {
  if (component.sumbmitted) return true;

  if (component.enteredTitle() || component.enteredSummary() || component.enteredDate()) {
      return window.confirm('Do you really want to leave? You will lose the entered data.');
  }

  return true;
}