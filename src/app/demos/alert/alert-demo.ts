import { Component, signal } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-demo',
  imports: [NgbAlertModule],
  template: `
    <h2 class="demo-title">Alert</h2>
    <p class="text-muted mb-4">Provide contextual feedback messages for typical user actions.</p>

    <h5>Alert types</h5>
    <div class="mb-4">
      @for (type of types; track type) {
        <ngb-alert [type]="type" [dismissible]="false" class="mb-2">
          This is a <strong>{{ type }}</strong> alert.
        </ngb-alert>
      }
    </div>

    <h5>Dismissible alerts</h5>
    <div class="mb-4">
      @if (showSuccess()) {
        <ngb-alert type="success" (closed)="showSuccess.set(false)" class="mb-2">
          <strong>Well done!</strong> You successfully read this important alert message.
        </ngb-alert>
      }
      @if (showInfo()) {
        <ngb-alert type="info" (closed)="showInfo.set(false)" class="mb-2">
          <strong>Heads up!</strong> This alert needs your attention but is not super important.
        </ngb-alert>
      }
      @if (!showSuccess() && !showInfo()) {
        <p class="text-muted">All alerts dismissed.
          <button class="btn btn-sm btn-outline-secondary ms-2" (click)="reset()">Reset</button>
        </p>
      }
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class AlertDemo {
  types = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
  showSuccess = signal(true);
  showInfo = signal(true);

  reset() {
    this.showSuccess.set(true);
    this.showInfo.set(true);
  }
}
