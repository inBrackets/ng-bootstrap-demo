import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-demo',
  imports: [NgbModalModule],
  templateUrl: './modal-demo.html',
  styleUrl: './modal-demo.sass'
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
