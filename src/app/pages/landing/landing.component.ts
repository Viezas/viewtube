import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestLayoutComponent } from '../../layout/guest-layout/guest-layout.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, GuestLayoutComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {

}
