import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizePipe } from '../../pipe/sanitize/sanitize.pipe';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule, SanitizePipe],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css',
})
export class VideoComponent {
  @Input() url: string = '';
}
