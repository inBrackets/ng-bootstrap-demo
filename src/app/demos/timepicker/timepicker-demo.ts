import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbTimepickerModule, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timepicker-demo',
  imports: [FormsModule, NgbTimepickerModule, JsonPipe],
  template: `
    <h2 class="demo-title">Timepicker</h2>
    <p class="text-muted mb-4">A timepicker with hours, minutes, and optional seconds.</p>

    <div class="row g-4">
      <div class="col-md-4">
        <h5>Basic</h5>
        <ngb-timepicker [(ngModel)]="time1"></ngb-timepicker>
        <p class="text-muted small mt-2">{{ time1 | json }}</p>
      </div>

      <div class="col-md-4">
        <h5>With Seconds</h5>
        <ngb-timepicker [(ngModel)]="time2" [seconds]="true"></ngb-timepicker>
        <p class="text-muted small mt-2">{{ time2 | json }}</p>
      </div>

      <div class="col-md-4">
        <h5>Meridian (AM/PM)</h5>
        <ngb-timepicker [(ngModel)]="time3" [meridian]="true"></ngb-timepicker>
        <p class="text-muted small mt-2">{{ time3 | json }}</p>
      </div>

      <div class="col-md-4">
        <h5>Custom step</h5>
        <ngb-timepicker [(ngModel)]="time4" [hourStep]="1" [minuteStep]="15"></ngb-timepicker>
        <p class="text-muted small mt-2">15-minute steps</p>
      </div>

      <div class="col-md-4">
        <h5>Disabled</h5>
        <ngb-timepicker [(ngModel)]="time5" [disabled]="true"></ngb-timepicker>
      </div>

      <div class="col-md-4">
        <h5>Small size</h5>
        <ngb-timepicker [(ngModel)]="time6" size="small"></ngb-timepicker>
      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class TimepickerDemo {
  time1: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
  time2: NgbTimeStruct = { hour: 9, minute: 15, second: 30 };
  time3: NgbTimeStruct = { hour: 14, minute: 0, second: 0 };
  time4: NgbTimeStruct = { hour: 10, minute: 0, second: 0 };
  time5: NgbTimeStruct = { hour: 8, minute: 0, second: 0 };
  time6: NgbTimeStruct = { hour: 12, minute: 0, second: 0 };
}
