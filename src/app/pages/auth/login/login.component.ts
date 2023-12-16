import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestLayoutComponent } from '../../../layout/guest-layout/guest-layout.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../../components/form/input/input.component';
import { UserService } from '../../../service/user/user.service';
import { User } from '../../../model/user/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    GuestLayoutComponent,
    InputComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userExists?: boolean | null;
  
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  updateValue(input: string, value: any) {
    switch (input) {
      case 'email':
        this.loginForm.controls['email'].setValue(value);
        break;
      case 'password':
        this.loginForm.controls['password'].setValue(value);
        break;
    }
  }

  submit() {
    this.userService
      .authenticate(
        this.loginForm.controls['email'].value!,
        this.loginForm.controls['password'].value!
      )
      .subscribe((user) => {
        if (Object.keys(user).length == 0) {
          this.userExists = false;
        } else {
          this.userExists = true;
          for (const [key, value] of Object.entries(user)) {
            localStorage.setItem('auth', JSON.stringify({ user: value }));
          }
          this.router.navigate(['/dashboard']);
        }
      });
  }
}
