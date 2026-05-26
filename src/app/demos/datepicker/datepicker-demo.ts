import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-demo',
  imports: [FormsModule, NgbDatepickerModule, JsonPipe],
  templateUrl: './datepicker-demo.html',
  styleUrl: './datepicker-demo.sass'
})
export class DatepickerDemo {
  inlineDate: NgbDateStruct | null = null;
  popupDate: NgbDateStruct | null = null;
  rangedDate: NgbDateStruct | null = null;
  multiDate: NgbDateStruct | null = null;
}
