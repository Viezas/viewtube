import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from '../../../../layout/client-layout/client-layout.component';
import { PageTitleDirective } from '../../../../directive/page-title/page-title.directive';
import { VideoComponent } from '../../../../components/video/video.component';
import { SubstringPipe } from '../../../../pipe/substring/substring.pipe';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    ClientLayoutComponent,
    PageTitleDirective,
    VideoComponent,
    SubstringPipe,
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {}
