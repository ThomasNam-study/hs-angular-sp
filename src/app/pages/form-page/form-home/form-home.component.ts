import { Component } from '@angular/core';
import {LoginComponent} from './login/login.component';

@Component({
  selector: 'app-form-home',
  imports: [
    LoginComponent
  ],
  templateUrl: './form-home.component.html',
  standalone: true,
  styleUrl: './form-home.component.scss'
})
export class FormHomeComponent {

}
