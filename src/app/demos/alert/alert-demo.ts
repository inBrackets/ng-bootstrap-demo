import { Component, signal } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-demo',
  imports: [NgbAlertModule],
  templateUrl: './alert-demo.html',
  styleUrl: './alert-demo.sass'
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
