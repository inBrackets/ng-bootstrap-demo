import { Component, signal } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

interface Toast { header: string; body: string; type: string; }

@Component({
  selector: 'app-toast-demo',
  imports: [NgbToastModule],
  templateUrl: './toast-demo.html',
  styleUrl: './toast-demo.sass'
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
