import { Component } from '@angular/core';
import {CounterOutputComponent} from '../counter-output/counter-output.component';
import {CounterControlsComponent} from '../counter-controls/counter-controls.component';

@Component({
  selector: 'app-counter-page',
  imports: [CounterOutputComponent, CounterControlsComponent],
  templateUrl: './counter-page.component.html',
  standalone: true,
  styleUrl: './counter-page.component.scss'
})
export class CounterPageComponent {

}
