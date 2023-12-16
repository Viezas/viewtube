import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestLayoutComponent } from '../../../layout/guest-layout/guest-layout.component';
import { Video } from '../../../model/video/video.model';
import { VideoService } from '../../../service/video/video.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { VideoComponent } from '../../../components/video/video.component';
import { SanitizePipe } from '../../../pipe/sanitize/sanitize.pipe';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [CommonModule, GuestLayoutComponent, VideoComponent, SanitizePipe],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css',
})
export class ShowComponent {
  videoId?: number;
  video?: Video;
  videos: Video[] = [];

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id')) {
        this.videoId = +params.get('id')!;
        this.videoService.find(this.videoId).subscribe((video) => {
          this.video = <Video>video;
        });
      }
      this.videoService
        .paginate(5)
        .subscribe((videos) => (this.videos = <Video[]>videos));
    });
  }
}
