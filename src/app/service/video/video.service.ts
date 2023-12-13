import { Injectable } from '@angular/core';
import { Video } from '../../model/video/video.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private videos: Video[] = [];

  constructor(private http: HttpClient) {}

  /**
   * Return all videos
   *
   * @returns {Video[]}
   */
   all() {
    return this.http.get('http://localhost:3000/videos');
  }

  /**
   * Store a new video resource in db
   *
   * @param {string} title
   * @param {string} url
   * @param {string|null} description
   */
  store(
    title: string,
    url: string,
    description: string | null
  ): Observable<Video> {
    const video = new Video(title, url, description, 1);
    // this.http
    //   .post<Video>('http://localhost:3000/videos', video)
    //   .subscribe((video) => {
    //     this.videos.push(video);
    //   });
    return this.http.post<Video>('http://localhost:3000/videos', video);
  }
}
