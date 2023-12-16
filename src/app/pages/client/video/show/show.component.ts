import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoService } from '../../../../service/video/video.service';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { Video } from '../../../../model/video/video.model';
import { ClientLayoutComponent } from '../../../../layout/client-layout/client-layout.component';
import { PageTitleDirective } from '../../../../directive/page-title/page-title.directive';
import { InputComponent } from '../../../../components/form/input/input.component';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [
    CommonModule,
    ClientLayoutComponent,
    PageTitleDirective,
    RouterLink,
    InputComponent,
  ],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css',
})
export class ShowComponent {
  videoId?: number;
  video?: Video;

  constructor(
    private videoService: VideoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id')) {
        this.videoId = +params.get('id')!;
        this.videoService.find(this.videoId).subscribe((video) => {
          this.video = <Video>video;
          console.log(this.video);
        });
      }
    });
  }
}
