import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoThumbnailPipe } from '../../pipe/video-thumbnail/video-thumbnail.pipe';
import { RouterLink, Router } from '@angular/router';
import { Video } from '../../model/video/video.model';
import { SubstringPipe } from '../../pipe/substring/substring.pipe';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule, VideoThumbnailPipe, RouterLink, SubstringPipe],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css',
})
export class VideoComponent {
  @Input() video!: Video;
  currentRoute!: String;

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
  }

  redirect() {
    switch (this.currentRoute) {
      case '/videos':
        this.router.navigate(['/videos/' + this.video.id]);
        break;

      default:
        this.router.navigate(['/']);
        break;
    }
  }
}
