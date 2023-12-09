import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() value: any;
  @Input() type: String = 'text';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Output() newValue = new EventEmitter<object>()

  modelChangeFn(value: any) {
    this.newValue.emit(value);
  }
}
