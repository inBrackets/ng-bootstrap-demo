import { Component, TemplateRef, inject } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offcanvas-demo',
  imports: [NgbOffcanvasModule],
  template: `
    <h2 class="demo-title">Offcanvas</h2>
    <p class="text-muted mb-4">Build hidden sidebars that slide in from the edge of the viewport.</p>

    <h5>Placement</h5>
    <div class="mb-4 d-flex gap-2 flex-wrap">
      @for (pos of positions; track pos) {
        <button class="btn btn-outline-primary" (click)="open(panel, pos)">
          From {{ pos }}
        </button>
      }
    </div>

    <ng-template #panel let-offcanvas>
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Offcanvas Panel</h5>
        <button type="button" class="btn-close" (click)="offcanvas.dismiss()"></button>
      </div>
      <div class="offcanvas-body">
        <p>This is content inside the offcanvas panel. You can put navigation links, forms, or any other content here.</p>
        <ul class="list-group">
          @for (item of navItems; track item) {
            <li class="list-group-item list-group-item-action" style="cursor:pointer">{{ item }}</li>
          }
        </ul>
      </div>
    </ng-template>
  `,
  styles: [`:host { display: block; }`]
})
export class OffcanvasDemo {
  private offcanvasService = inject(NgbOffcanvas);
  positions = ['start', 'end', 'top', 'bottom'] as const;
  navItems = ['Dashboard', 'Profile', 'Settings', 'Help', 'Logout'];

  open(content: TemplateRef<unknown>, position: 'start' | 'end' | 'top' | 'bottom') {
    this.offcanvasService.open(content, { position });
  }
}
