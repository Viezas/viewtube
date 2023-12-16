import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from '../../../../layout/client-layout/client-layout.component';
import { PageTitleDirective } from '../../../../directive/page-title/page-title.directive';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../../../components/form/input/input.component';
import { VideoService } from '../../../../service/video/video.service';
import { Video } from '../../../../model/video/video.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ClientLayoutComponent,
    PageTitleDirective,
    RouterLink,
    ReactiveFormsModule,
    InputComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  videoId?: number;
  video?: Video;

  constructor(
    private videoService: VideoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  form = this.formBuilder.group({
    title: ['', [Validators.required]],
    url: ['', [Validators.required, validateUrl]],
    description: [''],
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id')) {
        this.videoId = +params.get('id')!;
        this.videoService.find(this.videoId).subscribe((video) => {
          this.video = <Video>video;
          this.form.controls['title'].setValue(this.video.title);
          this.form.controls['url'].setValue(this.video.url);
          this.form.controls['description'].setValue(this.video.description);
        });
      }
    });
  }

  updateValue(input: string, value: any) {
    switch (input) {
      case 'title':
        this.form.controls['title'].setValue(value);
        break;
      case 'url':
        this.form.controls['url'].setValue(value);
        break;
      case 'description':
        this.form.controls['description'].setValue(value);
        break;
    }
  }

  handleSubmit() {
    if (this.video) {
      this.videoService
        .update(
          this.videoId!,
          this.form.controls['title'].value!,
          this.form.controls['url'].value!,
          this.form.controls['description'].value
        )
        .subscribe((video) => this.router.navigate(['/videos']));
    } else {
      this.videoService
        .store(
          this.form.controls['title'].value!,
          this.form.controls['url'].value!,
          this.form.controls['description'].value
        )
        .subscribe((video) => this.router.navigate(['/videos']));
    }
  }
}

function validateUrl(control: AbstractControl): { [key: string]: any } | null {
  if (
    control.value &&
    !control.value.startsWith('https://www.youtube.com/embed/')
  ) {
    return { urlInvalid: true };
  }
  return null;
}
