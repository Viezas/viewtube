import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from '../../../layout/client-layout/client-layout.component';
import { VideoComponent } from '../../../components/video/video.component';
import { SubstringPipe } from '../../../pipe/substring/substring.pipe';
import { PageTitleDirective } from '../../../directive/page-title/page-title.directive';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ClientLayoutComponent, VideoComponent, SubstringPipe, PageTitleDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
