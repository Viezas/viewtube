import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoThumbnail',
  standalone: true,
})
export class VideoThumbnailPipe implements PipeTransform {
  transform(value: string): string {
    let videoId = value.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)?.pop();
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/0.jpg`;
    }
    return '/assets/img/placeholder.png';
  }
}
