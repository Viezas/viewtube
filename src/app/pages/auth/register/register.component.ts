import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestLayoutComponent } from '../../../layout/guest-layout/guest-layout.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../service/user/user.service';
import { Router } from '@angular/router';
import { InputComponent } from '../../../components/form/input/input.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    GuestLayoutComponent,
    InputComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  userExists?: boolean | null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  updateValue(input: string, value: any) {
    switch (input) {
      case 'email':
        this.registerForm.controls['email'].setValue(value);
        break;
      case 'username':
        this.registerForm.controls['username'].setValue(value);
        break;
      case 'password':
        this.registerForm.controls['password'].setValue(value);
        break;
    }
  }

  submit() {
    this.userService
      .findByEmail(this.registerForm.controls['email'].value!)
      .subscribe((user) => {
        if (Object.keys(user).length > 0) {
          this.userExists = true;
          return;
        } else {
          this.userService
            .findByUsername(this.registerForm.controls['username'].value!)
            .subscribe((user) => {
              if (Object.keys(user).length > 0) {
                this.userExists = true;
                return;
              } else {
                this.userService
                  .store(
                    this.registerForm.controls['email'].value!,
                    this.registerForm.controls['username'].value!,
                    this.registerForm.controls['password'].value!
                  )
                  .subscribe((user) => {
                    this.userExists = true;
                    for (const [key, value] of Object.entries(user)) {
                      localStorage.setItem(
                        'auth',
                        JSON.stringify({ user: value })
                      );
                    }
                    this.router.navigate(['/dashboard']);
                  });
              }
            });
        }
      });
  }
}
