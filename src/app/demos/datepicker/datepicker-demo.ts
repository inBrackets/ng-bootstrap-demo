import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-demo',
  imports: [FormsModule, NgbDatepickerModule, JsonPipe],
  template: `
    <h2 class="demo-title">Datepicker</h2>
    <p class="text-muted mb-4">A fully-featured datepicker widget with month/year navigation.</p>

    <div class="row g-4">
      <div class="col-md-6">
        <h5>Inline Datepicker</h5>
        <ngb-datepicker [(ngModel)]="inlineDate" class="mb-2"></ngb-datepicker>
        <p class="text-muted small">Selected: {{ inlineDate | json }}</p>
      </div>

      <div class="col-md-6">
        <h5>Input Datepicker (popup)</h5>
        <div class="input-group mb-2">
          <input class="form-control" placeholder="yyyy-mm-dd"
                 name="dp" [(ngModel)]="popupDate" ngbDatepicker #d="ngbDatepicker">
          <button class="btn btn-outline-secondary" (click)="d.toggle()" type="button">
            📅
          </button>
        </div>
        <p class="text-muted small">Selected: {{ popupDate | json }}</p>
      </div>

      <div class="col-md-6">
        <h5>With min/max dates</h5>
        <ngb-datepicker [(ngModel)]="rangedDate"
          [minDate]="{year: 2024, month: 1, day: 1}"
          [maxDate]="{year: 2026, month: 12, day: 31}">
        </ngb-datepicker>
      </div>

      <div class="col-md-6">
        <h5>Multiple months</h5>
        <ngb-datepicker [(ngModel)]="multiDate" [displayMonths]="2" [navigation]="'arrows'">
        </ngb-datepicker>
      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class DatepickerDemo {
  inlineDate: NgbDateStruct | null = null;
  popupDate: NgbDateStruct | null = null;
  rangedDate: NgbDateStruct | null = null;
  multiDate: NgbDateStruct | null = null;
}
