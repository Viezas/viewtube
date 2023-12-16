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
   * Return and paginate all videos
   *
   * @param {number|string} limit
   * @returns {Video[]}
   */
  paginate(limit: number | string = 10) {
    return this.http.get('http://localhost:3000/videos?_limit=' + limit);
  }

  /**
   * Find a return a video
   *
   * @param {number|string} id
   * @returns {Video}
   */
  find(videoId: number | string) {
    return this.http.get('http://localhost:3000/videos/' + videoId);
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

    return this.http.post<Video>('http://localhost:3000/videos', video);
  }

  /**
   * Update a video resource in db
   *
   * @param {number|string} videoId
   * @param {string} title
   * @param {string} url
   * @param {string|null} description
   */
  update(
    videoId: number | string,
    title: string,
    url: string,
    description: string | null
  ): Observable<Video> {
    const video = new Video(title, url, description, 1);

    return this.http.put<Video>(
      'http://localhost:3000/videos/' + videoId,
      video
    );
  }
}
