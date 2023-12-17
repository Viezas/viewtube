import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoService } from '../../../../service/video/video.service';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { Video } from '../../../../model/video/video.model';
import { ClientLayoutComponent } from '../../../../layout/client-layout/client-layout.component';
import { PageTitleDirective } from '../../../../directive/page-title/page-title.directive';
import { InputComponent } from '../../../../components/form/input/input.component';
import { VideoComponent } from '../../../../components/video/video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { GuestLayoutComponent } from '../../../../layout/guest-layout/guest-layout.component';

@Component({
  selector: 'app-show',
  standalone: true,
  templateUrl: './show.component.html',
  styleUrl: './show.component.css',
  imports: [
    CommonModule,
    ClientLayoutComponent,
    PageTitleDirective,
    RouterLink,
    InputComponent,
    VideoComponent,
    YouTubePlayerModule,
    GuestLayoutComponent,
  ],
})
export class ShowComponent {
  videoId?: number;
  video?: Video;
  youtubeVideoId: string | undefined;
  otherVideos?: Video[];

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get the current video ID from the route parameters
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id')) {
        this.videoId = +params.get('id')!;
        this.videoService.find(this.videoId).subscribe((video) => {
          this.video = <Video>video;

          // Extract YouTube video ID from the provided YouTube URL
          this.extractYoutubeVideoId(this.video.url);
        });
      }
    });

    // Get all videos except the current one
    this.videoService.all().subscribe((videos) => {
      this.otherVideos = <Video[]>videos;
      this.otherVideos = this.otherVideos.filter(
        (video) => video.id !== this.videoId
      );
    });
  }

  private extractYoutubeVideoId(url: string): void {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    this.youtubeVideoId = match ? match[1] : undefined;
  }
}
