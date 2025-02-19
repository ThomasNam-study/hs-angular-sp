import {Component, DestroyRef, effect, inject, OnInit, signal} from '@angular/core';
import {interval, map} from 'rxjs';

@Component({
  selector: 'app-rxjs-home-page',
  templateUrl: './rxjs-home-page.component.html',
  standalone: true,
  styleUrl: './rxjs-home-page.component.scss'
})
export class RxjsHomePageComponent implements OnInit {
  clickCount = signal(0);
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(`Clicked button ${this.clickCount()} times`);
    });
  }

  ngOnInit(): void {
    const subscription = interval(1000)
      .pipe(
        map((v) => v * 2)
      )
      .subscribe({
        next: (v) => {
          console.log(v);
        },
        complete: () => {

        },
        error: () => {

        },
      });


    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }

  onClick() {
    this.clickCount.update((v) => v + 1);
  }
}
