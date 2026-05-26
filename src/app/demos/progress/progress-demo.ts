import { Component, signal } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-progress-demo',
  imports: [NgbProgressbarModule],
  templateUrl: './progress-demo.html',
  styleUrl: './progress-demo.sass'
})
export class ProgressDemo {
  bars = [
    { type: 'primary', value: 30 },
    { type: 'secondary', value: 50 },
    { type: 'success', value: 70 },
    { type: 'danger', value: 45 },
    { type: 'warning', value: 85 },
    { type: 'info', value: 60 },
  ];

  progress = signal(40);

  adjust(amount: number) {
    const next = Math.max(0, Math.min(100, this.progress() + amount));
    this.progress.set(next);
  }
}
