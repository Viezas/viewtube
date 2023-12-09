import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestLayoutComponent } from '../../layout/guest-layout/guest-layout.component';
import { VideoComponent } from '../../components/video/video.component';
import { SubstringPipe } from '../../pipe/substring/substring.pipe';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, GuestLayoutComponent, VideoComponent, SubstringPipe],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {}
