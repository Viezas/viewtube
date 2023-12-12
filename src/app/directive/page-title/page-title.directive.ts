import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPageTitle]',
  standalone: true,
})
export class PageTitleDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.setAttribute("class", "text-2xl font-bold");
  }
}
