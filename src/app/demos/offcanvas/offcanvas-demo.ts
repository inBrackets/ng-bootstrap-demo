import { Component, TemplateRef, inject } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offcanvas-demo',
  imports: [NgbOffcanvasModule],
  templateUrl: './offcanvas-demo.html',
  styleUrl: './offcanvas-demo.sass'
})
export class OffcanvasDemo {
  private offcanvasService = inject(NgbOffcanvas);
  positions = ['start', 'end', 'top', 'bottom'] as const;
  navItems = ['Dashboard', 'Profile', 'Settings', 'Help', 'Logout'];

  open(content: TemplateRef<unknown>, position: 'start' | 'end' | 'top' | 'bottom') {
    this.offcanvasService.open(content, { position });
  }
}
