import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-demo',
  imports: [NgbModalModule],
  template: `
    <h2 class="demo-title">Modal</h2>
    <p class="text-muted mb-4">Add dialogs to your site for lightboxes, user notifications, or custom content.</p>

    <h5>Basic Modal</h5>
    <div class="mb-4 d-flex gap-2 flex-wrap">
      <button class="btn btn-primary" (click)="open(basicModal)">Basic Modal</button>
      <button class="btn btn-warning" (click)="open(largeModal, 'lg')">Large Modal</button>
      <button class="btn btn-info" (click)="open(smallModal, 'sm')">Small Modal</button>
      <button class="btn btn-secondary" (click)="open(scrollModal)">Scrollable Modal</button>
      <button class="btn btn-dark" (click)="open(centeredModal, undefined, true)">Vertically Centered</button>
    </div>

    <ng-template #basicModal let-modal>
      <div class="modal-header">
        <h4 class="modal-title">Basic Modal</h4>
        <button type="button" class="btn-close" (click)="modal.dismiss()"></button>
      </div>
      <div class="modal-body">
        <p>This is a basic modal dialog. You can put any content here.</p>
        <p>Click outside or press Escape to close.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss()">Cancel</button>
        <button type="button" class="btn btn-primary" (click)="modal.close('confirmed')">Confirm</button>
      </div>
    </ng-template>

    <ng-template #largeModal let-modal>
      <div class="modal-header">
        <h4 class="modal-title">Large Modal</h4>
        <button type="button" class="btn-close" (click)="modal.dismiss()"></button>
      </div>
      <div class="modal-body">
        <p>This is a large modal. It has more horizontal space for complex content like tables or forms.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="modal.close()">Close</button>
      </div>
    </ng-template>

    <ng-template #smallModal let-modal>
      <div class="modal-header">
        <h4 class="modal-title">Small Modal</h4>
        <button type="button" class="btn-close" (click)="modal.dismiss()"></button>
      </div>
      <div class="modal-body">Compact dialog.</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="modal.close()">OK</button>
      </div>
    </ng-template>

    <ng-template #scrollModal let-modal>
      <div class="modal-header">
        <h4 class="modal-title">Scrollable Modal</h4>
        <button type="button" class="btn-close" (click)="modal.dismiss()"></button>
      </div>
      <div class="modal-body" style="max-height: 300px; overflow-y: auto">
        @for (i of [1,2,3,4,5,6,7,8,9,10]; track i) {
          <p>Line {{ i }}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        }
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="modal.close()">Close</button>
      </div>
    </ng-template>

    <ng-template #centeredModal let-modal>
      <div class="modal-header">
        <h4 class="modal-title">Vertically Centered</h4>
        <button type="button" class="btn-close" (click)="modal.dismiss()"></button>
      </div>
      <div class="modal-body">This modal is centered vertically on the page.</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="modal.close()">Close</button>
      </div>
    </ng-template>

    @if (result) {
      <div class="alert alert-success mt-3">Modal result: <strong>{{ result }}</strong></div>
    }
  `,
  styles: [`:host { display: block; }`]
})
export class ModalDemo {
  private modalService = inject(NgbModal);
  result = '';

  open(content: TemplateRef<unknown>, size?: 'sm' | 'lg' | 'xl', centered = false) {
    this.modalService.open(content, { size, centered }).result.then(
      r => this.result = r,
      () => this.result = 'dismissed'
    );
  }
}
