import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from '../../../../layout/client-layout/client-layout.component';
import { PageTitleDirective } from '../../../../directive/page-title/page-title.directive';
import { VideoComponent } from '../../../../components/video/video.component';
import { SubstringPipe } from '../../../../pipe/substring/substring.pipe';
import { RouterLink } from '@angular/router';
import { VideoService } from '../../../../service/video/video.service';
import { Video } from '../../../../model/video/video.model';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    ClientLayoutComponent,
    PageTitleDirective,
    VideoComponent,
    SubstringPipe,
    RouterLink,
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  videos: Video[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService
      .all()
      .subscribe((videos) => (this.videos = <Video[]>videos));
  }
}
