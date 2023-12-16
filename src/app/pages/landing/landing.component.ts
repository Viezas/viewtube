import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestLayoutComponent } from '../../layout/guest-layout/guest-layout.component';
import { VideoComponent } from '../../components/video/video.component';
import { Video } from '../../model/video/video.model';
import { VideoService } from '../../service/video/video.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, GuestLayoutComponent, VideoComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  videos: Video[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService
      .all()
      .subscribe((videos) => (this.videos = <Video[]>videos));
  }
}
