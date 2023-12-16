import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from '../../../layout/client-layout/client-layout.component';
import { VideoComponent } from '../../../components/video/video.component';
import { PageTitleDirective } from '../../../directive/page-title/page-title.directive';
import { VideoService } from '../../../service/video/video.service';
import { Video } from '../../../model/video/video.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ClientLayoutComponent, VideoComponent, PageTitleDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  videos: Video[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService
      .paginate(5)
      .subscribe((videos) => (this.videos = <Video[]>videos));
  }
}
