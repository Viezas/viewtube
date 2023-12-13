import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from '../../../../layout/client-layout/client-layout.component';
import { PageTitleDirective } from '../../../../directive/page-title/page-title.directive';
import { Router, RouterLink } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../../../components/form/input/input.component';
import { VideoService } from '../../../../service/video/video.service';

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
  constructor(
    private videoService: VideoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  form = this.formBuilder.group({
    title: ['', [Validators.required]],
    url: ['', [Validators.required, validateUrl]],
    description: [''],
  });

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
    this.videoService
      .store(
        this.form.controls['title'].value!,
        this.form.controls['url'].value!,
        this.form.controls['description'].value
      )
      .subscribe((video) => this.router.navigate(['/videos']));
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
