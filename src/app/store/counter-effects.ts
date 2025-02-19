import {Actions, createEffect, ofType} from '@ngrx/effects';
import {decrement, increment} from './counter.actions';
import {tap} from 'rxjs';
import {inject, Injectable} from '@angular/core';

@Injectable()
export class CounterEffects {
  private actions$ = inject(Actions);

  saveCount = createEffect(() => this.actions$.pipe(
    ofType(increment, decrement),
    tap((action) => {
      console.log(action);
      localStorage.setItem('count', action.value.toString());
    })
  ), {dispatch: false});

  // constructor(private actions$: Actions) {
  //
  // }
}
