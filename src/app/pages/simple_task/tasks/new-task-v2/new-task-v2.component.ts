import {Component, ElementRef, inject, viewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new-task-v2',
  imports: [FormsModule],
  templateUrl: './new-task-v2.component.html',
  standalone: true,
  styleUrl: './new-task-v2.component.scss'
})
export class NewTaskV2Component {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  taskService = inject(TasksService);

  onAddTask(title: string, description: string) {

    this.taskService.addTask({date: '', title, summary: description}, "");

    this.formEl()?.nativeElement.reset();
  }
}
