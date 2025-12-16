import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Reactive form for email and password
  form = new FormGroup({
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  // Toggle password visibility
  showPassword = signal(false);

  // PUBLIC_INTERFACE
  onTogglePassword(): void {
    /** Toggle the visibility of the password input between text and password. */
    this.showPassword.update((v) => !v);
  }

  // PUBLIC_INTERFACE
  onForgotPassword(): void {
    /** Placeholder handler for forgot password action. */
    // eslint-disable-next-line no-console
    console.log('Forgot Password clicked');
  }

  // PUBLIC_INTERFACE
  onSubmit(): void {
    /**
     * Placeholder submit handler for login.
     * Validates the form and logs the values to console.
     */
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // eslint-disable-next-line no-console
    console.log('Login submitted', this.form.getRawValue());
  }

  get emailCtrl() {
    return this.form.controls.email;
  }
  get passwordCtrl() {
    return this.form.controls.password;
  }
}
