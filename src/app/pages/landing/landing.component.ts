import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestLayoutComponent } from '../../layout/guest-layout/guest-layout.component';
import { VideoComponent } from '../../components/video/video.component';
import { Video } from '../../model/video/video.model';
import { VideoService } from '../../service/video/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, GuestLayoutComponent, VideoComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  videos: Video[] = [];
  @Input() video!: Video;
  currentRoute!: String;

  constructor(private videoService: VideoService, private router: Router) {
    this.currentRoute = this.router.url;
  }

  ngOnInit(): void {
    this.videoService
      .all()
      .subscribe((videos) => (this.videos = <Video[]>videos));
  }

  redirect() {
    switch (this.currentRoute) {
      case '':
        console.log('test');

        this.router.navigate(['/show/:id' + this.video.id]);
        break;

      default:
        console.log('test2');

        this.router.navigate(['/']);
        break;
    }
  }
}
