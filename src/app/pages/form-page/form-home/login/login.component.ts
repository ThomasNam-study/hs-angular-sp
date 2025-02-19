import { afterNextRender, Component, DestroyRef, inject, OnInit, viewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule],
})
export class LoginComponent implements OnInit {
  
  private form = viewChild.required<NgForm>('form');

  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const loadedFormData = window.localStorage.getItem('saved-login-form');

      if (loadedFormData) {
        const loadedData = JSON.parse(loadedFormData);
        const savedEmail = loadedData.email;

        

        setTimeout(() => {
          this.form().controls['email'].setValue(savedEmail);
          // this.form().setValue({
          //   email: savedEmail,
          //   password: '',
          // });
        });
        
      }


        const sub = this.form().valueChanges?.pipe(debounceTime(500)).subscribe({
          next: (value) => {
            console.log(value);
            window.localStorage.setItem('saved-login-form', JSON.stringify({email: value.email}));
          }
        });

        this.destroyRef.onDestroy(() => {
          sub?.unsubscribe();
        });
    });

    
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmitForm(formData: NgForm) {
    if (formData.form.invalid) {
      return;
    }

    console.log(formData.value.email);
    
    formData.form.reset();
  }
}

