import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { of } from 'rxjs';

function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.contain('?')) {
    return null;
  }

  return { doesNotContainQuestionMark: true};
}

function emailIsUnique(control: AbstractControl) {
  if (control.value !== 'test@example.com') {
    return of(null);
  }

  return of({ notUnique: true});
}

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css'
})
export class Login2Component {
  form = new FormGroup({
    email: new FormControl('', {validators: [
      Validators.email, Validators.required
    ], asyncValidators: [emailIsUnique]}),
    password: new FormControl('', {validators: [
      Validators.required, Validators.minLength(6), mustContainQuestionMark
    ]}),
  });

  get emailIsInvalid() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    )
  }

  onSubmit() {
    console.log(this.form);
    console.log(this.form.value.email)
    
  }
}
