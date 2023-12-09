import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestLayoutComponent } from '../../../layout/guest-layout/guest-layout.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, GuestLayoutComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
