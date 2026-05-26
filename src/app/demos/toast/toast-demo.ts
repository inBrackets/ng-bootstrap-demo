import { Component, signal } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

interface Toast { header: string; body: string; type: string; }

@Component({
  selector: 'app-toast-demo',
  imports: [NgbToastModule],
  template: `
    <h2 class="demo-title">Toast</h2>
    <p class="text-muted mb-4">Lightweight notifications that appear temporarily.</p>

    <h5>Show toasts</h5>
    <div class="mb-4 d-flex gap-2 flex-wrap">
      <button class="btn btn-success" (click)="add('success')">Success Toast</button>
      <button class="btn btn-danger" (click)="add('danger')">Danger Toast</button>
      <button class="btn btn-warning" (click)="add('warning')">Warning Toast</button>
      <button class="btn btn-info" (click)="add('info')">Info Toast</button>
      <button class="btn btn-dark" (click)="add('dark')">Dark Toast</button>
    </div>

    <p class="text-muted small">Toasts appear in the bottom-right corner and auto-dismiss after 4 seconds.</p>

    <div class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index: 1200">
      @for (toast of toasts(); track toast; let i = $index) {
        <ngb-toast
          [header]="toast.header"
          [autohide]="true"
          [delay]="4000"
          (hidden)="remove(i)"
          [class]="'bg-' + toast.type + (toast.type === 'warning' || toast.type === 'light' ? ' text-dark' : ' text-white')"
        >
          {{ toast.body }}
        </ngb-toast>
      }
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class ToastDemo {
  toasts = signal<Toast[]>([]);

  add(type: string) {
    const messages: Record<string, { header: string; body: string }> = {
      success: { header: 'Success', body: 'Operation completed successfully!' },
      danger: { header: 'Error', body: 'Something went wrong. Please try again.' },
      warning: { header: 'Warning', body: 'Please review your input before proceeding.' },
      info: { header: 'Info', body: 'Here is some useful information for you.' },
      dark: { header: 'Notification', body: 'You have a new message.' },
    };
    this.toasts.update(t => [...t, { type, ...messages[type] }]);
  }

  remove(index: number) {
    this.toasts.update(t => t.filter((_, i) => i !== index));
  }
}
