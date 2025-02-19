import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AsyncPipe} from '@angular/common';
import {selectCount} from '../../../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [
    AsyncPipe
  ]
})
export class CounterOutputComponent {
  counter$: Observable<number>;

  constructor(private store: Store<{counter: number}>) {
    // this.counter$ = store.select('counter');
    this.counter$ = store.select(selectCount);
  }

  // constructor(private counterService: CounterService) {}
  //
  // ngOnInit(): void {
  //   this.counterServiceSub = this.counterService.counterChanged.subscribe(
  //     (newVal) => (this.counter = newVal)
  //   );
  // }
  //
  // ngOnDestroy(): void {
  //   if (this.counterServiceSub) {
  //     this.counterServiceSub.unsubscribe();
  //   }
  // }
}
