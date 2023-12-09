import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestLayoutComponent } from '../../../layout/guest-layout/guest-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, GuestLayoutComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
