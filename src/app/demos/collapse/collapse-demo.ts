import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collapse-demo',
  imports: [NgbCollapseModule],
  template: `
    <h2 class="demo-title">Collapse</h2>
    <p class="text-muted mb-4">Toggle the visibility of content with a transition.</p>

    <h5>Basic collapse</h5>
    <div class="mb-4">
      <button class="btn btn-primary mb-3" (click)="isCollapsed = !isCollapsed">
        {{ isCollapsed ? 'Show' : 'Hide' }} content
      </button>
      <div [ngbCollapse]="isCollapsed">
        <div class="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
          3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
        </div>
      </div>
    </div>

    <h5>Multiple panels</h5>
    <div class="mb-4">
      @for (panel of panels; track panel.id) {
        <div class="mb-2">
          <button class="btn btn-outline-secondary btn-sm" (click)="panel.open = !panel.open">
            {{ panel.open ? '▲' : '▼' }} {{ panel.title }}
          </button>
          <div [ngbCollapse]="!panel.open" class="mt-1">
            <div class="card card-body py-2">{{ panel.content }}</div>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class CollapseDemo {
  isCollapsed = true;

  panels = [
    { id: 1, title: 'Section One', content: 'Content for section one.', open: false },
    { id: 2, title: 'Section Two', content: 'Content for section two.', open: false },
    { id: 3, title: 'Section Three', content: 'Content for section three.', open: false },
  ];
}
