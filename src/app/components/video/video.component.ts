import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoThumbnailPipe } from '../../pipe/video-thumbnail/video-thumbnail.pipe';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule, VideoThumbnailPipe],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css',
})
export class VideoComponent {
  @Input() url: string = '';
}
