import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbTimepickerModule, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timepicker-demo',
  imports: [FormsModule, NgbTimepickerModule, JsonPipe],
  templateUrl: './timepicker-demo.html',
  styleUrl: './timepicker-demo.sass'
})
export class TimepickerDemo {
  time1: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
  time2: NgbTimeStruct = { hour: 9, minute: 15, second: 30 };
  time3: NgbTimeStruct = { hour: 14, minute: 0, second: 0 };
  time4: NgbTimeStruct = { hour: 10, minute: 0, second: 0 };
  time5: NgbTimeStruct = { hour: 8, minute: 0, second: 0 };
  time6: NgbTimeStruct = { hour: 12, minute: 0, second: 0 };
}
